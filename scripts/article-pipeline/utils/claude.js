/**
 * Claude API utility with streaming, adaptive thinking, and web search support.
 * All pipeline stages call through this module.
 */

import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

/**
 * Stream a Claude Opus 4.6 response with adaptive thinking.
 * Returns the full text content when stream completes.
 */
export async function streamOpus(messages, options = {}) {
  const {
    system,
    maxTokens = 16000,
    thinking = true,
    tools = [],
    effort = 'high',
  } = options;

  const requestParams = {
    model: 'claude-opus-4-6',
    max_tokens: maxTokens,
    messages,
    ...(system ? { system } : {}),
    ...(thinking ? { thinking: { type: 'adaptive' } } : {}),
    ...(effort ? { output_config: { effort } } : {}),
    ...(tools.length > 0 ? { tools } : {}),
  };

  const stream = client.messages.stream(requestParams);

  let fullText = '';
  let thinkingContent = '';

  process.stdout.write('  ');

  for await (const event of stream) {
    if (event.type === 'content_block_delta') {
      if (event.delta.type === 'text_delta') {
        fullText += event.delta.text;
        process.stdout.write('.');
      } else if (event.delta.type === 'thinking_delta') {
        thinkingContent += event.delta.thinking;
      }
    }
  }

  process.stdout.write('\n');
  const finalMessage = await stream.finalMessage();

  return {
    text: fullText,
    thinking: thinkingContent,
    usage: finalMessage.usage,
    stopReason: finalMessage.stop_reason,
    content: finalMessage.content,
  };
}

/**
 * Call Claude with web search enabled for research tasks.
 * Runs an agentic loop until Claude is done searching.
 */
export async function researchWithWebSearch(prompt, system, options = {}) {
  const { maxTokens = 32000 } = options;

  const webSearchTool = { type: 'web_search_20260209', name: 'web_search' };
  const webFetchTool = { type: 'web_fetch_20260209', name: 'web_fetch' };

  const messages = [{ role: 'user', content: prompt }];

  let iteration = 0;
  const maxIterations = 12;

  while (iteration < maxIterations) {
    iteration++;
    process.stdout.write(`  [search iteration ${iteration}]`);

    const stream = client.messages.stream({
      model: 'claude-opus-4-6',
      max_tokens: maxTokens,
      thinking: { type: 'adaptive' },
      output_config: { effort: 'max' },
      system,
      messages,
      tools: [webSearchTool, webFetchTool],
    });

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        process.stdout.write('.');
      }
    }

    const message = await stream.finalMessage();
    process.stdout.write('\n');

    messages.push({ role: 'assistant', content: message.content });

    if (message.stop_reason === 'end_turn') {
      const textBlock = message.content.find((b) => b.type === 'text');
      return textBlock?.text ?? '';
    }

    if (message.stop_reason === 'pause_turn') {
      messages.push({
        role: 'user',
        content: [{ type: 'text', text: 'Please continue your research and provide the final compiled results.' }],
      });
      continue;
    }

    // Handle tool results automatically (server-side tools don't need client execution)
    if (message.stop_reason === 'tool_use') {
      const toolResults = message.content
        .filter((b) => b.type === 'tool_use')
        .map((b) => ({
          type: 'tool_result',
          tool_use_id: b.id,
          content: 'Tool executed successfully.',
        }));
      messages.push({ role: 'user', content: toolResults });
    }
  }

  const lastMsg = messages[messages.length - 1];
  const textBlock = Array.isArray(lastMsg.content)
    ? lastMsg.content.find((b) => b.type === 'text')
    : null;
  return textBlock?.text ?? '';
}

/**
 * Simple single-call Claude request (no streaming, for short structured outputs).
 */
export async function callOpus(prompt, system, options = {}) {
  const { maxTokens = 8000 } = options;

  const response = await client.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: maxTokens,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'high' },
    ...(system ? { system } : {}),
    messages: [{ role: 'user', content: prompt }],
  });

  const textBlock = response.content.find((b) => b.type === 'text');
  return textBlock?.text ?? '';
}

export { client };
