import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Phone, ExternalLink, ChevronRight, Info, Play } from 'lucide-react';

function SludgeDiagram() {
  return (
    <div className="my-10">
      <p className="font-bold text-gray-900 mb-4 text-center text-lg">How Sludge Affects Your Heating System</p>
      <svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto block" aria-label="Sludge build-up diagram">
        {/* Pipe left */}
        <rect x="20" y="110" width="80" height="40" rx="6" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
        {/* Sludge in pipe */}
        <rect x="20" y="128" width="80" height="22" rx="0" fill="#292524" opacity="0.7" />
        <text x="60" y="145" textAnchor="middle" fontSize="9" fill="#fafaf9">SLUDGE</text>

        {/* Boiler box */}
        <rect x="120" y="60" width="100" height="140" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
        <text x="170" y="95" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">BOILER</text>
        {/* Heat exchanger inside */}
        <rect x="135" y="105" width="70" height="55" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="170" y="130" textAnchor="middle" fontSize="9" fill="#92400e">Heat</text>
        <text x="170" y="143" textAnchor="middle" fontSize="9" fill="#92400e">Exchanger</text>
        {/* Sludge on heat exchanger */}
        <rect x="135" y="150" width="70" height="10" rx="2" fill="#292524" opacity="0.8" />
        <text x="170" y="159" textAnchor="middle" fontSize="8" fill="#fafaf9">sludge layer</text>

        {/* Pipe right */}
        <rect x="240" y="110" width="80" height="40" rx="6" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
        <rect x="240" y="128" width="80" height="22" fill="#292524" opacity="0.7" />
        <text x="280" y="145" textAnchor="middle" fontSize="9" fill="#fafaf9">SLUDGE</text>

        {/* Radiator */}
        <rect x="340" y="70" width="60" height="140" rx="6" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1.5" />
        {/* Cold bottom (sludge) */}
        <rect x="340" y="160" width="60" height="50" rx="0" fill="#292524" opacity="0.6" />
        <rect x="340" y="196" width="60" height="14" rx="6" fill="#292524" opacity="0.6" />
        {/* Warm top */}
        <rect x="340" y="70" width="60" height="90" rx="6" fill="#fed7aa" opacity="0.8" />
        <text x="370" y="115" textAnchor="middle" fontSize="9" fill="#c2410c">HOT</text>
        <text x="370" y="185" textAnchor="middle" fontSize="9" fill="#fafaf9">COLD</text>
        <text x="370" y="197" textAnchor="middle" fontSize="8" fill="#fafaf9">(sludge)</text>

        {/* Labels */}
        <text x="60" y="170" textAnchor="middle" fontSize="10" fill="#6b7280">Return pipe</text>
        <text x="280" y="170" textAnchor="middle" fontSize="10" fill="#6b7280">Flow pipe</text>

        {/* Impact boxes */}
        <rect x="20" y="200" width="180" height="50" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
        <text x="110" y="220" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b91c1c">Effects of sludge:</text>
        <text x="110" y="234" textAnchor="middle" fontSize="9" fill="#dc2626">↑ Gas bills · Cold radiator bottoms</text>
        <text x="110" y="246" textAnchor="middle" fontSize="9" fill="#dc2626">Boiler noise · Premature boiler failure</text>

        <rect x="220" y="200" width="180" height="50" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
        <text x="310" y="220" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">After power flush:</text>
        <text x="310" y="234" textAnchor="middle" fontSize="9" fill="#16a34a">↓ Gas bills · Even heat throughout</text>
        <text x="310" y="246" textAnchor="middle" fontSize="9" fill="#16a34a">Quieter boiler · Extended boiler life</text>
      </svg>
      <p className="text-sm text-gray-500 text-center mt-3">Sludge restricts water flow through the boiler heat exchanger and settles in radiator bottoms</p>
    </div>
  );
}

export default function PowerFlush() {
  return (
    <article className="bg-white animate-fadeIn">

      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
          <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Boiler Advice</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            What is a Power Flush? Do You Need One? (Worcester Homeowners' Guide)
          </h1>
          <p className="text-blue-200 text-lg">By Blue Flame Gas Services &middot; March 2026 &middot; 6 min read</p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          If your radiators are cold at the bottom, your boiler is noisy, or your heating takes ages to warm up, the culprit is often sludge — black iron oxide that accumulates in your heating system over time. A power flush cleans it out. Here's everything you need to know.
        </p>

        {/* TABLE OF CONTENTS */}
        <nav className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Info size={18} className="text-blue-800" /> In This Guide</p>
          <ol className="space-y-2">
            {[
              ['section-what', 'What is a Power Flush?'],
              ['section-signs', 'Signs You Need a Power Flush'],
              ['section-cost', 'How Much Does a Power Flush Cost?'],
              ['section-vs', 'Power Flush vs Chemical Flush'],
              ['section-new-boiler', 'Do I Need One Before a New Boiler?'],
              ['section-damage', 'Can It Damage Old Radiators?'],
              ['section-after', 'What Happens After a Power Flush?'],
              ['section-faqs', 'Frequently Asked Questions'],
            ].map(([id, title]) => (
              <li key={id}><a href={`#${id}`} className="flex items-center gap-2 text-blue-800 hover:underline text-sm font-medium"><ChevronRight size={14} />{title}</a></li>
            ))}
          </ol>
        </nav>

        <h2 id="section-what" className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is a Power Flush?</h2>
        <p className="text-gray-700 mb-4">
          A power flush is a deep clean of your central heating system. A specialist machine pumps high-velocity water and chemical cleanser through your boiler, radiators, and pipework to dislodge and flush out years of built-up magnetite sludge, limescale, and rust.
        </p>
        <p className="text-gray-700 mb-4">
          The process typically takes 4–8 hours and is carried out by a Gas Safe engineer. At the end, a fresh inhibitor is added to the system to prevent sludge from reforming, and a magnetic filter (like the Adey MagnaClean) is fitted to catch any remaining particles.
        </p>
        <p className="text-gray-700 mb-6">
          Unlike simply bleeding your radiators (which removes trapped air), a power flush physically flushes out the contaminated water and replaces it with clean water and protective chemicals.
        </p>

        <SludgeDiagram />

        <h2 id="section-signs" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Signs You Need a Power Flush</h2>
        <div className="space-y-3 mb-10">
          {[
            { sign: 'Radiators cold at the bottom, warm at the top', detail: 'This is the classic sludge symptom. Unlike trapped air (which causes cold at the top and is fixed by bleeding), cold at the bottom means sludge is blocking the flow of hot water through the radiator.' },
            { sign: 'Some radiators don\'t heat up at all', detail: 'Heavy sludge deposits can completely block a radiator. If bleeding and checking the valves doesn\'t fix it, sludge is the likely cause.' },
            { sign: 'Boiler noise — banging, kettling, or rumbling', detail: '"Kettling" is a loud rumbling noise caused by limescale or sludge on the boiler\'s heat exchanger. The boiler overheats localised water pockets, creating the noise. A power flush, combined with a descale, resolves this.' },
            { sign: 'System takes a long time to heat up', detail: 'If you turn the heating on and it takes much longer than it used to before rooms warm up, sludge is reducing the efficiency of your whole system.' },
            { sign: 'Boiler keeps cutting out', detail: 'Sludge on the heat exchanger causes the boiler to overheat and trigger its safety cut-out. This can be misdiagnosed as a boiler fault — a power flush should always be considered first.' },
            { sign: 'Discoloured water when bleeding radiators', detail: 'When you bleed a radiator, the water that comes out should be clear or slightly rusty. Black, tar-like water is a clear sign of heavy sludge contamination.' },
            { sign: 'Increasing gas bills without a change in usage', detail: 'A sludge-contaminated system forces your boiler to work harder and longer to reach the desired temperature, burning more gas. UK heating accounts for around 55% of energy bills — a 10–15% efficiency loss adds up fast.' },
          ].map((item) => (
            <div key={item.sign} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                <AlertTriangle className="text-orange-500 flex-shrink-0" size={16} />
                {item.sign}
              </p>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* YouTube embed */}
        <div className="mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/PLACEHOLDER_POWERFLUSH_ID"
              title="What is a power flush and do you need one?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><Play size={14} className="text-blue-800" /> Video: power flush explained — before and after results</p>
        </div>

        <h2 id="section-cost" className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Much Does a Power Flush Cost?</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left rounded-tl-lg">Property size</th>
                <th className="p-3 text-left">Radiators</th>
                <th className="p-3 text-left rounded-tr-lg">Typical cost (Worcester)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1–2 bedroom flat', '4–6', '£300–£400'],
                ['3 bedroom house', '7–10', '£400–£500'],
                ['4 bedroom house', '10–14', '£500–£650'],
                ['5+ bedroom house', '14+', '£650+'],
              ].map(([size, rads, cost], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-medium border-b border-gray-100">{size}</td>
                  <td className="p-3 border-b border-gray-100">{rads}</td>
                  <td className="p-3 border-b border-gray-100 font-bold text-blue-800">{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm italic mb-4">Prices include chemicals, inhibitor dosing, and magnetic filter fitting. VAT applicable. Prices correct for Worcester and Worcestershire, March 2026.</p>
        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-blue-800 mb-1">Is it worth it?</p>
          <p className="text-blue-700 text-sm">A power flush on a 3-bedroom home costs roughly the same as 1–2 months of wasted gas from an inefficient system. Most customers see the cost recovered within 2–3 heating seasons through lower bills, plus the benefit of a longer-lasting boiler and no expensive breakdowns.</p>
        </div>

        <h2 id="section-vs" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Power Flush vs Chemical Flush: What's the Difference?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
            <h3 className="font-bold text-blue-800 mb-3">Power Flush</h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              {[
                'Uses a machine to force water through at high velocity',
                'Physically dislodges and removes sludge',
                'Best for heavily contaminated systems',
                'Takes 4–8 hours',
                'More thorough, longer-lasting results',
                'Recommended before new boiler installation',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> {p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">Chemical Flush</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                'Cleanser added to system and circulated by the existing pump',
                'Gentler — won\'t dislodge heavy sludge deposits',
                'Better for lightly contaminated or newer systems',
                'Can be done during a boiler service',
                'Cheaper, but less effective for serious sludge',
                'Good as annual maintenance once system is clean',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> {p}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 id="section-new-boiler" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Do I Need a Power Flush Before a New Boiler?</h2>
        <p className="text-gray-700 mb-4">
          Most boiler manufacturers — including Worcester Bosch and Ideal — recommend or require a system flush before installation of a new boiler. Here's why:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            'Sludge from the old system will immediately contaminate the new boiler',
            'A blocked heat exchanger on a brand-new boiler can void the warranty',
            'The new boiler will be less efficient from day one if the system isn\'t clean',
            'Worcester Bosch specifically states that a system flush is required to maintain the 10-year warranty on their Greenstar range',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mb-8">
          During our{' '}
          <Link to="/blog/boiler-cost-worcester" className="text-blue-800 font-semibold hover:underline">boiler installation process</Link>,
          we assess the system condition. If sludge is present, we'll carry out a full flush before fitting the new boiler — and fit an Adey MagnaClean magnetic filter to keep the system clean going forward.
        </p>

        <h2 id="section-damage" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Can a Power Flush Damage Old Radiators?</h2>
        <p className="text-gray-700 mb-4">
          This is a legitimate concern. In very old systems with heavily corroded radiators or pipework, the high-pressure flushing action can cause small leaks to open up at joints or on radiator surfaces that were previously sealed by sludge deposits.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-amber-800 mb-1">Our honest advice</p>
          <p className="text-amber-700 text-sm">We will always inspect your system before quoting for a power flush and advise if the risk of disturbing old joints is high. In some cases — particularly with very old microbore pipework or radiators over 20 years old — a chemical flush and selective radiator replacement is a safer approach than a full power flush. We'd rather tell you this upfront than have a problem mid-flush.</p>
        </div>

        <h2 id="section-after" className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Happens After a Power Flush?</h2>
        <ul className="space-y-3 mb-10">
          {[
            { item: 'Inhibitor dosed', detail: 'A corrosion inhibitor (typically Fernox F1 or Sentinel X100) is added to the system to slow the re-formation of magnetite sludge. This should be topped up during each annual boiler service.' },
            { item: 'Magnetic filter fitted', detail: 'An Adey MagnaClean or similar magnetic filter is installed on the return pipe. It captures iron particles before they can accumulate in the boiler. We check and clean it at every service.' },
            { item: 'System tested and balanced', detail: 'All radiators are balanced and the boiler is run through a full heating cycle to confirm even heat distribution and correct pressure. We provide a written report of the system condition before and after.' },
          ].map((item) => (
            <li key={item.item} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              <div>
                <span className="font-bold">{item.item}: </span>
                {item.detail}
              </div>
            </li>
          ))}
        </ul>

        {/* External Resources */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><ExternalLink size={16} className="text-blue-800" /> Useful Resources</p>
          <ul className="space-y-2">
            <li><a href="https://www.gassaferegister.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Gas Safe Register — find a registered heating engineer</a></li>
            <li><a href="https://www.adey.com/en/homeowners/magnacleanse" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Adey MagnaClean — the UK's leading magnetic filter</a></li>
            <li><Link to="/blog/central-heating-noises" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> What noisy pipes and radiators mean — and when to worry</Link></li>
          </ul>
        </div>

        <h2 id="section-faqs" className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: 'How long does a power flush take?', a: 'For a typical 3-bedroom home with 8–10 radiators, allow 5–7 hours. Larger homes with 12+ radiators can take a full day. We always carry out a pre-flush assessment so we can give you an accurate time estimate beforehand.' },
            { q: 'How often should I have a power flush?', a: 'A properly maintained system with an inhibitor and magnetic filter should only need a power flush once every 5–10 years. If you have the annual boiler service done (which includes inhibitor checks), the system should stay clean much longer. Without a filter and inhibitor, sludge can build up significantly within 3–5 years.' },
            { q: 'Can I do a power flush myself?', a: 'No — you need a specialist power flush machine (which costs thousands of pounds to buy or hire) and the knowledge to adjust the flow direction, add the correct chemicals, and manage the process safely. It\'s not a DIY job. Always use a Gas Safe registered engineer.' },
            { q: 'Will a power flush fix a noisy boiler?', a: 'If the noise is kettling caused by sludge or limescale on the heat exchanger, then yes — a power flush combined with a descale of the heat exchanger usually solves it. If the noise is from a failing pump or faulty components, that\'s a separate repair job.' },
            { q: 'What is magnetite sludge and where does it come from?', a: 'Magnetite (iron oxide, or Fe₃O₄) is a black, tar-like deposit that forms when water reacts with the steel inside radiators and mild steel pipework. It\'s an inevitable byproduct of any wet central heating system over time. Without inhibitor and a magnetic filter, it accumulates in the boiler heat exchanger and settles in radiator bottoms.' },
            { q: 'Does a power flush void my boiler warranty?', a: 'No — in fact, the opposite. Most manufacturers (including Worcester Bosch and Ideal) require a system flush as a condition of their extended warranty. Not having a clean system can void your warranty if sludge damage is found.' },
            { q: 'What\'s the difference between a power flush and a system flush when buying a new boiler?', a: 'They\'re essentially the same process. Some installers call it a "system flush" or "MagnaCleanse" when done as part of a new boiler installation. The key is that the old system water is flushed out and replaced before the new boiler is connected, preventing contamination.' },
          ].map((faq) => (
            <div key={faq.q} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-10 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/blog/how-to-bleed-a-radiator" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">DIY Heating Tips</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How to Bleed a Radiator: Step-by-Step Guide</p>
            </Link>
            <Link to="/blog/boiler-cost-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Installation</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How Much Does a New Boiler Cost in Worcester? (2026)</p>
            </Link>
            <Link to="/blog/central-heating-noises" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Troubleshooting</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Noisy Boiler or Radiators? What Those Sounds Mean</p>
            </Link>
          </div>
        </div>

        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Think You Need a Power Flush?</h2>
          <p className="text-blue-200 mb-6">We assess your system, advise honestly, and carry out power flushes across Worcester and Worcestershire. No hard sell — just an honest diagnosis.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">Get a Quote</Link>
            <a href="tel:07480561846" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> 07480 561 846
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
