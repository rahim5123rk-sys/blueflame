/**
 * TSX Template Generator
 *
 * Takes the fully enhanced article state and generates a pixel-perfect
 * Blue Flame React TSX component, matching existing article conventions.
 *
 * Rich features produced:
 *  - Table of contents (clickable anchors)
 *  - Inline SVG infographics (bar charts, process flows, comparison diagrams)
 *  - YouTube video embed cards
 *  - Website screenshot images with captions
 *  - External link callout boxes
 *  - Internal links using React Router <Link>
 *  - FAQ section with schema-ready structure
 *  - Related articles grid
 *  - CTAs (mid-article + footer)
 */

/**
 * Convert article state → complete TSX source code string.
 *
 * @param {object} state - The full pipeline state after all 7 stages.
 * @returns {string} Valid TypeScript React component source.
 */
export function generateTSX(state) {
  const { plan, enhanced, screenshots = [], componentName } = state;

  const title = enhanced?.metaTitle?.replace(/\|.*$/, '').trim() || plan.title;
  const metaTitle = enhanced?.metaTitle || plan.title;
  const category = plan.category;
  const readTime = plan.readTime;
  const date = plan.date || new Date().toISOString().slice(0, 10);
  const intro = enhanced?.finalContent?.intro || plan.excerpt;
  const sections = enhanced?.finalContent?.sections || [];
  const faqs = enhanced?.finalContent?.faqs || plan.faqQuestions?.map((q) => ({ q, a: '' })) || [];
  const relatedArticles = plan.relatedArticles || [];
  const youtubeVideos = state.research?.youtubeVideos || [];
  const infographics = enhanced?.finalContent?.infographics || plan.infographicConcepts || [];

  // Collect all lucide icons used
  const icons = new Set(['Phone', 'ArrowRight', 'CheckCircle', 'ExternalLink', 'ChevronRight', 'Info', 'AlertTriangle', 'Star', 'Clock', 'Play']);

  // Build section JSX
  const sectionsJSX = buildSections(sections, screenshots, youtubeVideos, infographics, icons);

  // Build FAQ JSX
  const faqJSX = buildFAQ(faqs);

  // Build related articles JSX
  const relatedJSX = buildRelatedArticles(relatedArticles);

  // Build table of contents
  const tocJSX = buildTableOfContents(sections);

  // Build inline SVG components
  const svgComponents = buildInfographicComponents(infographics);

  const iconImports = [...icons].join(', ');

  return `import { Link } from 'react-router-dom';
import { ${iconImports} } from 'lucide-react';

${svgComponents}

export default function ${componentName}() {
  return (
    <article className="bg-white animate-fadeIn">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <span className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            ${category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            ${escJSX(title)}
          </h1>
          <p className="text-blue-200 text-lg">
            By Blue Flame Gas Services · ${formatDate(date)} · ${readTime}
          </p>
        </div>
      </header>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">

        {/* Intro */}
        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
          ${escJSX(intro)}
        </p>

        {/* Table of Contents */}
${tocJSX}

        {/* ── SECTIONS ─────────────────────────────────────────────────── */}
${sectionsJSX}

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
${faqJSX}

        {/* ── RELATED ARTICLES ─────────────────────────────────────────── */}
${relatedJSX}

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center mt-10">
          <h2 className="text-2xl font-bold mb-3">Need help? We cover all of Worcestershire</h2>
          <p className="text-blue-200 mb-6">
            Gas Safe registered engineers. Honest advice, fair prices, and available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:07480561846"
              className="bg-white text-blue-800 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={18} /> 07480 561 846
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
`;
}

// ── Builders ─────────────────────────────────────────────────────────────────

function buildTableOfContents(sections) {
  if (!sections || sections.length === 0) return '';

  const items = sections
    .map(
      (s) =>
        `          <li><a href="#${toAnchor(s.h2)}" className="text-blue-800 hover:underline text-sm flex items-center gap-1.5"><ChevronRight size={14} /> ${escJSX(s.h2)}</a></li>`,
    )
    .join('\n');

  return `        {/* Table of Contents */}
        <nav className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
          <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">In this guide</p>
          <ul className="space-y-2">
${items}
          </ul>
        </nav>`;
}

function buildSections(sections, screenshots, youtubeVideos, infographics, icons) {
  if (!sections || sections.length === 0) return '        {/* Content generated by pipeline */}';

  return sections
    .map((section, si) => {
      const videoForSection = youtubeVideos[si] || null;
      const screenshotForSection = screenshots[si] || null;
      const infographicForSection = infographics[si] || null;

      let jsx = `        {/* ── ${section.h2} ── */}
        <section id="${toAnchor(section.h2)}" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">${escJSX(section.h2)}</h2>
`;

      // Main content paragraphs
      if (section.content) {
        const paragraphs = splitParagraphs(section.content);
        jsx += paragraphs
          .map(
            (p) =>
              `          <p className="text-gray-700 mb-4 leading-relaxed">${escJSX(p)}</p>`,
          )
          .join('\n');
        jsx += '\n';
      }

      // Infographic for this section
      if (infographicForSection) {
        jsx += buildInfographicEmbed(infographicForSection, si);
      }

      // YouTube video for this section
      if (videoForSection && videoForSection.videoId) {
        jsx += buildYouTubeEmbed(videoForSection);
      }

      // Screenshot for this section
      if (screenshotForSection && screenshotForSection.path) {
        jsx += buildScreenshot(screenshotForSection);
      }

      // Checklist items
      if (section.checklist && section.checklist.length > 0) {
        jsx += `          <ul className="space-y-3 mb-6">
${section.checklist.map((item) => `            <li className="flex items-start gap-3 text-gray-700"><CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} /><span>${escJSX(item)}</span></li>`).join('\n')}
          </ul>\n`;
      }

      // Table
      if (section.table) {
        jsx += buildTable(section.table);
      }

      // Callout box
      if (section.callout) {
        jsx += buildCallout(section.callout);
        icons.add('Info');
      }

      // Warning box
      if (section.warning) {
        jsx += buildWarning(section.warning);
        icons.add('AlertTriangle');
      }

      // External link box
      if (section.externalLinks && section.externalLinks.length > 0) {
        jsx += buildExternalLinksBox(section.externalLinks);
        icons.add('ExternalLink');
      }

      // Subsections (h3)
      if (section.subsections && section.subsections.length > 0) {
        jsx += section.subsections
          .map((sub, subIdx) => {
            const subVideo = youtubeVideos[si + subIdx + 10] || null;
            let subJsx = `          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">${escJSX(sub.h3)}</h3>\n`;
            if (sub.content) {
              const paras = splitParagraphs(sub.content);
              subJsx += paras
                .map((p) => `          <p className="text-gray-700 mb-4 leading-relaxed">${escJSX(p)}</p>`)
                .join('\n');
              subJsx += '\n';
            }
            if (sub.checklist) {
              subJsx += `          <ul className="space-y-3 mb-6">
${sub.checklist.map((item) => `            <li className="flex items-start gap-3 text-gray-700"><CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} /><span>${escJSX(item)}</span></li>`).join('\n')}
          </ul>\n`;
            }
            return subJsx;
          })
          .join('\n');
      }

      jsx += `        </section>`;
      return jsx;
    })
    .join('\n\n');
}

function buildYouTubeEmbed(video) {
  return `
          {/* YouTube: ${escJSX(video.title)} */}
          <div className="mb-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100" style={{paddingBottom: '56.25%', height: 0}}>
              <iframe
                src="https://www.youtube.com/embed/${video.videoId}?rel=0"
                title="${escJSX(video.title)}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="text-sm text-gray-500 text-center mt-2 flex items-center justify-center gap-1">
              <Play size={13} className="text-red-600" /> ${escJSX(video.title)}
              {' '}&mdash;{' '}${escJSX(video.channelName || '')}
            </p>
          </div>\n`;
}

function buildScreenshot(screenshot) {
  return `
          {/* Screenshot */}
          <figure className="mb-8">
            <img
              src="${screenshot.path}"
              alt="${escAttr(screenshot.caption || screenshot.description || '')}"
              className="w-full rounded-xl shadow-md border border-gray-100"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2 italic">
              ${escJSX(screenshot.caption || '')}
            </figcaption>
          </figure>\n`;
}

function buildTable(table) {
  if (!table.headers || !table.rows) return '';
  const headers = table.headers
    .map((h, i) => {
      const cls = i === 0 ? 'rounded-tl-lg' : i === table.headers.length - 1 ? 'rounded-tr-lg' : '';
      return `                  <th className="p-3 text-left ${cls}">${escJSX(h)}</th>`;
    })
    .join('\n');
  const rows = table.rows
    .map(
      (row, ri) =>
        `                <tr className={${ri} % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
${row.map((cell, ci) => `                  <td className="p-3 border-b border-gray-100${ci === 0 ? ' font-medium' : ci === row.length - 1 ? ' font-bold text-blue-800' : ''}">${escJSX(cell)}</td>`).join('\n')}
                </tr>`,
    )
    .join('\n');

  return `
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-800 text-white">
${headers}
                </tr>
              </thead>
              <tbody>
${rows}
              </tbody>
            </table>
          </div>\n`;
}

function buildCallout(callout) {
  return `
          <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl mb-8 flex gap-3">
            <Info className="text-blue-800 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-bold text-blue-800 mb-1">${escJSX(callout.title || 'Did you know?')}</p>
              <p className="text-blue-700 text-sm leading-relaxed">${escJSX(callout.text)}</p>
              ${callout.link ? `<Link to="${callout.link.to}" className="inline-flex items-center gap-1 mt-2 text-blue-800 font-bold text-sm hover:underline">${escJSX(callout.link.text)} <ArrowRight size={14} /></Link>` : ''}
            </div>
          </div>\n`;
}

function buildWarning(warning) {
  return `
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8 flex gap-3">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-bold text-amber-800 mb-1">${escJSX(warning.title || 'Important')}</p>
              <p className="text-amber-700 text-sm leading-relaxed">${escJSX(warning.text)}</p>
            </div>
          </div>\n`;
}

function buildExternalLinksBox(links) {
  const items = links
    .map(
      (link) =>
        `              <li><a href="${link.href}" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-800 hover:underline text-sm"><ExternalLink size={13} /> ${escJSX(link.text)}</a></li>`,
    )
    .join('\n');
  return `
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
            <p className="font-bold text-gray-700 text-sm mb-3">Useful resources:</p>
            <ul className="space-y-2">
${items}
            </ul>
          </div>\n`;
}

function buildFAQ(faqs) {
  if (!faqs || faqs.length === 0) return '';

  const items = faqs
    .map(
      (faq) => `          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <p className="font-bold text-gray-900 mb-2">${escJSX(faq.q)}</p>
            <p className="text-gray-600 leading-relaxed">${escJSX(faq.a)}</p>
          </div>`,
    )
    .join('\n');

  return `        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
${items}
          </div>
        </section>`;
}

function buildRelatedArticles(articles) {
  if (!articles || articles.length === 0) return '';

  const cards = articles
    .slice(0, 3)
    .map(
      (a) => `            <Link
              to="/blog/${a.slug}"
              className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-${a.color || 'blue'}-600">${escJSX(a.category)}</span>
              <p className="font-bold text-gray-900 mt-1 text-sm leading-snug">${escJSX(a.title)}</p>
            </Link>`,
    )
    .join('\n');

  return `        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-10 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
${cards}
          </div>
        </div>`;
}

function buildInfographicComponents(infographics) {
  if (!infographics || infographics.length === 0) return '';

  return infographics
    .map((inf, i) => {
      const name = `Infographic${i + 1}`;
      switch (inf.type) {
        case 'bar-chart':
          return buildBarChartSVG(name, inf);
        case 'process-flow':
          return buildProcessFlowSVG(name, inf);
        case 'comparison':
          return buildComparisonSVG(name, inf);
        case 'pie-chart':
          return buildPieChartSVG(name, inf);
        default:
          return buildGenericInfoCard(name, inf);
      }
    })
    .join('\n\n');
}

function buildInfographicEmbed(inf, idx) {
  const name = `Infographic${idx + 1}`;
  return `
          {/* Infographic: ${escJSX(inf.title || inf.type)} */}
          <div className="mb-8">
            <${name} />
          </div>\n`;
}

// ── SVG Infographic builders ─────────────────────────────────────────────────

function buildBarChartSVG(name, inf) {
  const data = inf.data || [];
  if (data.length === 0) return buildGenericInfoCard(name, inf);

  const maxVal = Math.max(...data.map((d) => Number(d.value) || 0)) || 1;
  const barWidth = Math.floor(560 / data.length) - 10;
  const chartHeight = 200;

  const bars = data
    .map((d, i) => {
      const barH = Math.round((Number(d.value) / maxVal) * chartHeight);
      const x = 40 + i * (barWidth + 10);
      const y = chartHeight - barH + 30;
      return `  <rect x="${x}" y="${y}" width="${barWidth}" height="${barH}" rx="4" fill="#1d4ed8" opacity="${0.6 + (i / data.length) * 0.4}" />
  <text x="${x + barWidth / 2}" y="${y - 6}" textAnchor="middle" fontSize="11" fill="#1e3a8a" fontWeight="600">${escJSX(String(d.value))}</text>
  <text x="${x + barWidth / 2}" y="${chartHeight + 50}" textAnchor="middle" fontSize="10" fill="#6b7280">${escJSX(String(d.label).slice(0, 14))}</text>`;
    })
    .join('\n');

  return `function ${name}() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-4 text-center">${escJSX(inf.title || 'Data Overview')}</h3>
      <svg viewBox="0 0 620 280" className="w-full">
        <line x1="40" y1="230" x2="580" y2="230" stroke="#e5e7eb" strokeWidth="1" />
${bars}
      </svg>
      ${inf.source ? `<p className="text-xs text-gray-400 text-center mt-2">Source: ${escJSX(inf.source)}</p>` : ''}
    </div>
  );
}`;
}

function buildProcessFlowSVG(name, inf) {
  const steps = inf.steps || inf.data || [];
  if (steps.length === 0) return buildGenericInfoCard(name, inf);

  const stepBoxes = steps
    .map((step, i) => {
      const x = 20 + i * (140 + 20);
      const label = typeof step === 'string' ? step : step.label || step.text || '';
      const arrow =
        i < steps.length - 1
          ? `  <polygon points="${x + 150},45 ${x + 160},55 ${x + 150},65" fill="#3b82f6" />`
          : '';
      return `  <rect x="${x}" y="20" width="140" height="70" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
  <text x="${x + 70}" y="${i === 0 ? 40 : 38}" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">${i + 1}.</text>
  <foreignObject x="${x + 8}" y="38" width="124" height="50">
    <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '10px', color: '#374151', textAlign: 'center', lineHeight: '1.3'}}>${escJSX(label.slice(0, 40))}</div>
  </foreignObject>
${arrow}`;
    })
    .join('\n');

  const svgWidth = steps.length * 160;

  return `function ${name}() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm overflow-x-auto">
      <h3 className="font-bold text-gray-900 mb-4 text-center">${escJSX(inf.title || 'Process Overview')}</h3>
      <svg viewBox="0 0 ${svgWidth} 110" className="w-full min-w-96">
${stepBoxes}
      </svg>
    </div>
  );
}`;
}

function buildComparisonSVG(name, inf) {
  const items = inf.data || inf.items || [];
  if (items.length < 2) return buildGenericInfoCard(name, inf);

  const rows = items
    .map(
      (item, i) => `
          <div className="grid grid-cols-2 gap-4 py-3 border-b border-gray-100 last:border-0">
            <div className="flex items-start gap-2">
              <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
              <div>
                <p className="font-semibold text-sm text-gray-900">${escJSX(String(item.left || item.option1 || ''))}</p>
                ${item.leftDetail ? `<p className="text-xs text-gray-500">${escJSX(item.leftDetail)}</p>` : ''}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
              <div>
                <p className="font-semibold text-sm text-gray-900">${escJSX(String(item.right || item.option2 || ''))}</p>
                ${item.rightDetail ? `<p className="text-xs text-gray-500">${escJSX(item.rightDetail)}</p>` : ''}
              </div>
            </div>
          </div>`,
    )
    .join('');

  const [leftLabel, rightLabel] = (inf.labels || ['Option A', 'Option B']);

  return `function ${name}() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-2">
      <h3 className="font-bold text-gray-900 mb-4 text-center">${escJSX(inf.title || 'Comparison')}</h3>
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div className="text-center font-bold text-sm text-green-700 bg-green-50 rounded-lg py-2">${escJSX(leftLabel)}</div>
        <div className="text-center font-bold text-sm text-blue-700 bg-blue-50 rounded-lg py-2">${escJSX(rightLabel)}</div>
      </div>
${rows}
    </div>
  );
}`;
}

function buildPieChartSVG(name, inf) {
  const data = inf.data || [];
  if (data.length === 0) return buildGenericInfoCard(name, inf);

  const total = data.reduce((s, d) => s + (Number(d.value) || 0), 0) || 1;
  const colours = ['#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'];
  let cumAngle = 0;

  const slices = data
    .map((d, i) => {
      const fraction = Number(d.value) / total;
      const startAngle = cumAngle;
      cumAngle += fraction * 2 * Math.PI;
      const endAngle = cumAngle;
      const x1 = 100 + 80 * Math.cos(startAngle - Math.PI / 2);
      const y1 = 100 + 80 * Math.sin(startAngle - Math.PI / 2);
      const x2 = 100 + 80 * Math.cos(endAngle - Math.PI / 2);
      const y2 = 100 + 80 * Math.sin(endAngle - Math.PI / 2);
      const large = fraction > 0.5 ? 1 : 0;
      const path = `M 100 100 L ${x1.toFixed(1)} ${y1.toFixed(1)} A 80 80 0 ${large} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
      return `  <path d="${path}" fill="${colours[i % colours.length]}" opacity="0.9" />`;
    })
    .join('\n');

  const legend = data
    .map(
      (d, i) => `          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{background: '${colours[i % colours.length]}'}} />
            <span className="text-gray-700">${escJSX(String(d.label))}</span>
            <span className="text-gray-500 ml-auto">${Math.round((Number(d.value) / total) * 100)}%</span>
          </div>`,
    )
    .join('\n');

  return `function ${name}() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-4 text-center">${escJSX(inf.title || 'Breakdown')}</h3>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <svg viewBox="0 0 200 200" className="w-40 h-40 flex-shrink-0">
${slices}
        </svg>
        <div className="space-y-2 flex-grow">
${legend}
        </div>
      </div>
      ${inf.source ? `<p className="text-xs text-gray-400 text-center mt-3">Source: ${escJSX(inf.source)}</p>` : ''}
    </div>
  );
}`;
}

function buildGenericInfoCard(name, inf) {
  const points = inf.points || inf.data || [];
  const pointsJSX =
    points.length > 0
      ? `<ul className="space-y-2 mt-3">
${points.map((p) => `            <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-blue-600 font-bold mt-0.5">→</span>${escJSX(typeof p === 'string' ? p : p.label || String(p))}</li>`).join('\n')}
          </ul>`
      : '';

  return `function ${name}() {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
      <h3 className="font-bold text-blue-900 mb-2">${escJSX(inf.title || 'Key Facts')}</h3>
      ${inf.description ? `<p className="text-blue-800 text-sm leading-relaxed">${escJSX(inf.description)}</p>` : ''}
      ${pointsJSX}
    </div>
  );
}`;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function toAnchor(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function splitParagraphs(text) {
  return (text || '')
    .split(/\n\n+/)
    .map((p) => p.replace(/\n/g, ' ').trim())
    .filter(Boolean);
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

/** Escape text for safe embedding inside JSX string literals. */
function escJSX(str) {
  return (str || '')
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;');
}

/** Escape for HTML attribute values. */
function escAttr(str) {
  return (str || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
