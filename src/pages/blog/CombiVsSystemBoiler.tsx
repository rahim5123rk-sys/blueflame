import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Phone, ExternalLink, ChevronRight, Info, Play } from 'lucide-react';

function CombiVsSystemInfographic() {
  return (
    <div className="mb-10">
      <svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-2xl border border-gray-200 bg-gray-50">
        {/* Title */}
        <text x="320" y="26" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#1e3a5f">Combi Boiler vs System Boiler — At a Glance</text>

        {/* --- COMBI side --- */}
        <text x="160" y="52" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#1d4ed8">COMBI BOILER</text>
        {/* Boiler unit */}
        <rect x="110" y="60" width="100" height="70" rx="8" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2" />
        <text x="160" y="100" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#1e3a5f" fontWeight="bold">Boiler</text>
        <text x="160" y="116" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#3b82f6">(all-in-one)</text>
        {/* Flue arrow up */}
        <line x1="160" y1="60" x2="160" y2="40" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#arrow)" />
        {/* Hot water arrow */}
        <line x1="210" y1="95" x2="240" y2="95" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2" />
        <text x="248" y="99" fontFamily="sans-serif" fontSize="9" fill="#ef4444">Hot water</text>
        {/* Labels below */}
        <text x="160" y="150" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">No cylinder needed</text>
        <text x="160" y="162" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">Instant on-demand hot water</text>
        <text x="160" y="174" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#16a34a" fontWeight="bold">Best: 1–3 bed homes</text>

        {/* Divider */}
        <line x1="320" y1="40" x2="320" y2="190" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="6,3" />
        <text x="320" y="205" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#9ca3af">vs</text>

        {/* --- SYSTEM side --- */}
        <text x="480" y="52" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#7c3aed">SYSTEM BOILER</text>
        {/* Boiler unit */}
        <rect x="370" y="60" width="80" height="70" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
        <text x="410" y="100" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#4c1d95" fontWeight="bold">Boiler</text>
        {/* Cylinder */}
        <rect x="490" y="68" width="60" height="55" rx="6" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="2" />
        <text x="520" y="98" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#4c1d95" fontWeight="bold">Cylinder</text>
        {/* Pipe between boiler and cylinder */}
        <line x1="450" y1="90" x2="490" y2="90" stroke="#7c3aed" strokeWidth="2" />
        {/* Hot water from cylinder */}
        <line x1="550" y1="90" x2="578" y2="90" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2" />
        <text x="582" y="94" fontFamily="sans-serif" fontSize="9" fill="#ef4444">Hot</text>
        <text x="580" y="105" fontFamily="sans-serif" fontSize="9" fill="#ef4444">water</text>
        {/* Labels below */}
        <text x="480" y="150" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">Requires airing cupboard</text>
        <text x="480" y="162" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">Supplies multiple bathrooms</text>
        <text x="480" y="174" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#16a34a" fontWeight="bold">Best: 3–5 bed homes</text>

        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#1d4ed8" />
          </marker>
        </defs>
      </svg>
      <p className="text-xs text-gray-500 mt-2 text-center">Combi boilers heat water on demand; system boilers store pre-heated water in a cylinder for higher-demand properties.</p>
    </div>
  );
}

export default function CombiVsSystemBoiler() {
  return (
    <article className="bg-white animate-fadeIn">

      {/* HERO */}
      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
          <span className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Boiler Advice</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Combi Boiler vs System Boiler: Which Is Right for Your Home?
          </h1>
          <p className="text-blue-200 text-lg">
            By Blue Flame Gas Services &middot; March 2026 &middot; 7 min read
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14 prose prose-lg">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Choosing between a <strong>combi boiler</strong> and a <strong>system boiler</strong> is one of the biggest decisions you'll make when replacing your heating system. The right choice depends on your home's size, hot water demands, and available space. Here's a straightforward comparison to help you decide.
        </p>

        <nav className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Info size={18} className="text-blue-800" /> In This Article</p>
          <ol className="space-y-2">
            {[
              ['section-what-is-combi', 'What Is a Combi Boiler?'],
              ['section-what-is-system', 'What Is a System Boiler?'],
              ['section-comparison', 'Head-to-Head Comparison'],
              ['section-combi-pros', 'Advantages of a Combi Boiler'],
              ['section-combi-cons', 'Disadvantages of a Combi Boiler'],
              ['section-system-pros', 'Advantages of a System Boiler'],
              ['section-system-cons', 'Disadvantages of a System Boiler'],
              ['section-switching', 'Can I Switch from a System Boiler to a Combi?'],
              ['section-sizing', 'What Size Boiler Do I Need?'],
              ['section-resources', 'Useful External Resources'],
              ['section-faq', 'Frequently Asked Questions'],
            ].map(([id, title]) => (
              <li key={id}><a href={`#${id}`} className="flex items-center gap-2 text-blue-800 hover:underline text-sm font-medium"><ChevronRight size={14} />{title}</a></li>
            ))}
          </ol>
        </nav>

        <h2 id="section-what-is-combi" className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is a Combi Boiler?</h2>
        <p className="text-gray-700 mb-4">
          A combination (combi) boiler provides both central heating and instant hot water from one compact unit. There's no separate hot water cylinder or cold water storage tank — water is heated directly from the mains when you turn on a tap.
        </p>
        <p className="text-gray-700 mb-6">
          Combi boilers are the most popular choice in UK homes, installed in around <strong>70% of new boiler replacements</strong>.
        </p>

        <h2 id="section-what-is-system" className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is a System Boiler?</h2>
        <p className="text-gray-700 mb-4">
          A system boiler works with a separate hot water cylinder (usually in an airing cupboard) to store pre-heated water. The boiler heats water and sends it to the cylinder, which then supplies your taps and showers.
        </p>
        <p className="text-gray-700 mb-6">
          System boilers are ideal for homes with <strong>higher hot water demand</strong> — typically properties with two or more bathrooms.
        </p>

        <CombiVsSystemInfographic />

        <div className="mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{paddingBottom: '56.25%'}}>
            <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/PLACEHOLDER_COMBI_VS_SYSTEM" title="Combi vs System Boiler Explained" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><Play size={14} className="text-blue-800" /> Combi vs system boiler — which is right for your home? A quick visual guide</p>
        </div>

        <h2 id="section-comparison" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Head-to-Head Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left rounded-tl-lg">Feature</th>
                <th className="p-3 text-left">Combi Boiler</th>
                <th className="p-3 text-left rounded-tr-lg">System Boiler</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Best for', '1–3 bed homes', '3–5 bed homes'],
                ['Hot water supply', 'Instant, on demand', 'Stored in cylinder'],
                ['Multiple taps at once', 'Flow rate drops', 'Strong flow maintained'],
                ['Space needed', 'Minimal (no cylinder)', 'Needs airing cupboard'],
                ['Installation cost', '£1,400–£3,200', '£1,600–£3,500+'],
                ['Energy efficiency', '92–94% ErP A-rated', '90–93% ErP A-rated'],
                ['Water pressure', 'Depends on mains', 'Consistent from cylinder'],
              ].map(([feature, combi, system], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-medium border-b border-gray-100">{feature}</td>
                  <td className="p-3 border-b border-gray-100">{combi}</td>
                  <td className="p-3 border-b border-gray-100">{system}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="section-combi-pros" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Advantages of a Combi Boiler</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Compact — no hot water cylinder or tank needed',
            'Instant hot water on demand — no waiting for a cylinder to heat up',
            'Cheaper to install — fewer components',
            'Lower energy bills — only heats water when you need it',
            'Easy to maintain and service',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 id="section-combi-cons" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Disadvantages of a Combi Boiler</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Hot water flow reduces when multiple taps are open simultaneously',
            'Not ideal for homes with more than two bathrooms',
            'Performance depends on mains water pressure',
            'Cannot work with some power showers (which need a pump)',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <XCircle className="text-red-500 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 id="section-system-pros" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Advantages of a System Boiler</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Can supply multiple bathrooms at once with strong flow',
            'Compatible with power showers and high-flow shower heads',
            'Consistent hot water pressure regardless of mains supply',
            'Better for larger families with higher water usage',
            'Can work with solar thermal panels for renewable heating',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 id="section-system-cons" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Disadvantages of a System Boiler</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Requires space for a hot water cylinder (airing cupboard)',
            'Higher installation cost due to extra components',
            'Hot water can run out — you may need to wait for the cylinder to reheat',
            'Cylinder loses heat over time (standing heat loss), increasing energy use',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <XCircle className="text-red-500 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl mb-10">
          <p className="font-bold text-blue-800 text-lg mb-1">Blue Flame's Recommendation</p>
          <p className="text-blue-700">For most 2–4 bedroom homes in Worcester with one or two bathrooms, a <strong>combi boiler</strong> is usually the best choice. For larger properties with three or more bathrooms, or families who need hot water from multiple outlets simultaneously, a <strong>system boiler</strong> is worth the extra investment.</p>
        </div>

        <h2 id="section-switching" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Can I Switch from a System Boiler to a Combi?</h2>
        <p className="text-gray-700 mb-4">
          Yes — this is one of the most common conversion jobs we carry out. Switching from a system boiler (or an old conventional boiler with tanks in the loft) to a combi frees up cupboard space and simplifies your heating system.
        </p>
        <p className="text-gray-700 mb-4">
          The conversion typically involves removing the hot water cylinder and loft tanks, capping pipework, and installing the new combi. Budget an additional <strong>£300–£600</strong> on top of the standard installation cost for the conversion work.
        </p>

        <h2 id="section-sizing" className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Size Boiler Do I Need?</h2>
        <p className="text-gray-700 mb-4">
          Boiler output is measured in kilowatts (kW). Here's a rough guide:
        </p>
        <ul className="space-y-2 mb-8 text-gray-700">
          <li><strong>1–2 bed flat or house:</strong> 24–27kW combi</li>
          <li><strong>3–4 bed semi or detached:</strong> 28–34kW combi or 12–18kW system</li>
          <li><strong>4–5 bed with 3+ bathrooms:</strong> 35–40kW combi or 18–25kW system</li>
        </ul>
        <p className="text-gray-700 mb-8">
          Our engineers will carry out a full heat-loss calculation during the survey to recommend the correct size — oversizing wastes money and undersizing means poor performance.
        </p>

        <div id="section-resources" className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><ExternalLink size={16} className="text-blue-800" /> Useful Resources</p>
          <ul className="space-y-2">
            <li><a href="https://energysavingtrust.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Energy Saving Trust — Guide to boiler types and efficiency</a></li>
            <li><a href="https://www.which.co.uk/reviews/boilers/article/types-of-boiler" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Which? — Combi, system and conventional boiler types explained</a></li>
          </ul>
        </div>

        <h2 id="section-faq" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: 'Is a combi boiler cheaper to run than a system boiler?', a: 'Generally yes. A combi only heats water when you need it, avoiding the standing heat losses from a hot water cylinder. Typical savings are £50–£100 per year on gas bills compared to a system boiler of similar efficiency.' },
            { q: 'Can a combi boiler fill a bath quickly enough?', a: 'Yes — a modern 28kW+ combi boiler can fill a standard bath in 8–12 minutes. However, if you have a very large bath or want to run a bath while using another tap, a system boiler may be better.' },
            { q: 'How long do combi and system boilers last?', a: 'Both types typically last 12–15 years with annual servicing. The cylinder on a system boiler may last 20+ years as it has no moving parts.' },
            { q: 'What is a heat-only (conventional) boiler?', a: 'A heat-only boiler (also called a regular or conventional boiler) is the oldest type, requiring both a hot water cylinder and cold water storage tanks in the loft. It\'s best suited to older homes with existing pipework designed for this system, or properties with very high hot water demand. They are rarely installed new today but can be upgraded to a system or combi boiler.' },
            { q: 'Can I switch from a system boiler to a combi?', a: 'Yes — converting from a system boiler to a combi is one of the most common jobs we carry out in Worcester. It involves removing the hot water cylinder, capping any loft tanks, and installing the new combi unit. Expect to add £300–£600 to the standard installation price for the conversion work. The result is a simpler, more compact heating system and freed-up airing cupboard space.' },
            { q: 'Which boiler type is more energy efficient?', a: 'Modern combi and system boilers both achieve A-rated efficiency (90–94% ErP). In practice, a combi tends to be slightly more efficient day-to-day because it eliminates standing heat losses from the cylinder. However, if your system boiler cylinder is well-insulated and you use hot water heavily throughout the day, the difference is small. The brand, age, and regular servicing of any boiler makes a bigger difference to running costs than the type.' },
            { q: 'What boiler is best for a 4-bedroom house?', a: 'For a typical 4-bedroom home with two bathrooms, a 32–35kW combi boiler will usually cope well. If the property has three or more bathrooms, or the family has high simultaneous hot water demand (e.g., multiple showers running at the same time), a system boiler with a 250–300 litre cylinder is a better fit. Our engineers will assess your home\'s specific heat loss and water usage during a free survey before making a recommendation.' },
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
            <Link to="/blog/boiler-cost-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Installation</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How Much Does a New Boiler Cost in Worcester?</p>
            </Link>
            <Link to="/blog/worcester-bosch-vs-ideal-boilers" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Comparison</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Worcester Bosch vs Ideal: Which Is Best?</p>
            </Link>
            <Link to="/blog/signs-boiler-needs-replacing" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">7 Warning Signs Your Boiler Needs Replacing</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Not Sure Which Boiler Type You Need?</h2>
          <p className="text-blue-200 mb-6">Our Gas Safe engineers will survey your property and recommend the best boiler for your home — free of charge.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">
              Book a Free Survey
            </Link>
            <a href="tel:07480561846" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> 07480 561 846
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
