import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Phone, ExternalLink, ChevronRight, Info, Play } from 'lucide-react';

function RadiatorColdSpotDiagram() {
  return (
    <div className="my-10">
      <p className="font-bold text-gray-900 mb-4 text-center text-lg">Where Is Your Radiator Cold?</p>
      <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto block" aria-label="Radiator cold spot diagram">
        {/* Radiator outline */}
        <rect x="60" y="30" width="280" height="260" rx="10" ry="10" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" />

        {/* Top zone — air (cold at top) */}
        <rect x="60" y="30" width="280" height="80" rx="10" ry="10" fill="#bfdbfe" opacity="0.85" />
        <rect x="60" y="90" width="280" height="20" fill="#bfdbfe" opacity="0.85" />

        {/* Middle zone — warm */}
        <rect x="60" y="110" width="280" height="100" fill="#fef3c7" opacity="0.85" />

        {/* Bottom zone — sludge (cold at bottom) */}
        <rect x="60" y="210" width="280" height="70" fill="#d1fae5" opacity="0.85" />
        <rect x="60" y="270" width="280" height="20" rx="0" ry="0" fill="#d1fae5" opacity="0.85" />
        {/* Round bottom corners */}
        <rect x="60" y="278" width="280" height="12" rx="10" ry="10" fill="#d1fae5" opacity="0.85" />

        {/* Radiator fins */}
        {[100, 140, 180, 220, 260, 300].map((x) => (
          <line key={x} x1={x} y1="30" x2={x} y2="290" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4,3" />
        ))}

        {/* Top label */}
        <text x="200" y="62" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Cold at TOP</text>
        <text x="200" y="80" textAnchor="middle" fontSize="11" fill="#1d4ed8">= Trapped Air → Bleed It</text>

        {/* Middle label */}
        <text x="200" y="158" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">Warm in Middle</text>
        <text x="200" y="175" textAnchor="middle" fontSize="11" fill="#b45309">= Hot water flowing normally</text>

        {/* Bottom label */}
        <text x="200" y="232" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">Cold at BOTTOM</text>
        <text x="200" y="250" textAnchor="middle" fontSize="11" fill="#047857">= Sludge Build-up → Power Flush</text>

        {/* Valve left */}
        <rect x="30" y="155" width="30" height="28" rx="4" fill="#6b7280" />
        <text x="45" y="148" textAnchor="middle" fontSize="9" fill="#374151">TRV</text>

        {/* Valve right */}
        <rect x="340" y="155" width="30" height="28" rx="4" fill="#6b7280" />
        <text x="355" y="148" textAnchor="middle" fontSize="9" fill="#374151">Lock</text>

        {/* Completely cold callout */}
        <rect x="80" y="300" width="240" height="28" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
        <text x="200" y="319" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b91c1c">Completely Cold = Valve or Boiler Issue</text>
      </svg>
      <p className="text-sm text-gray-500 text-center mt-3">Diagram: common radiator cold spot patterns and their causes</p>
    </div>
  );
}

export default function RadiatorNotHeating() {
  return (
    <article className="bg-white animate-fadeIn">

      {/* HERO */}
      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
          <span className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Radiator Advice</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Radiator Not Heating Up? Here's How to Fix It
          </h1>
          <p className="text-blue-200 text-lg">
            By Blue Flame Gas Services &middot; March 2026 &middot; 6 min read
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14 prose prose-lg">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          A radiator that won't heat up — or only heats partially — is frustrating, especially in winter. The good news is that most radiator problems have straightforward fixes. Here's a complete troubleshooting guide to help you diagnose and resolve the issue.
        </p>

        {/* TABLE OF CONTENTS */}
        <nav className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Info size={18} className="text-blue-800" /> In This Article</p>
          <ol className="space-y-2">
            {[
              ['section-diagnosis', 'Quick Diagnosis: Where Is the Cold Spot?'],
              ['section-fix-1', 'Fix 1: Bleed the Radiator'],
              ['section-fix-2', 'Fix 2: Check the Radiator Valves'],
              ['section-fix-3', 'Fix 3: Balance Your Radiators'],
              ['section-fix-4', 'Fix 4: Power Flush for Sludge'],
              ['section-fix-5', 'Fix 5: Check the Boiler Itself'],
              ['section-when-to-call', 'When to Call a Professional'],
              ['section-faqs', 'Frequently Asked Questions'],
            ].map(([id, title]) => (
              <li key={id}><a href={`#${id}`} className="flex items-center gap-2 text-blue-800 hover:underline text-sm font-medium"><ChevronRight size={14} />{title}</a></li>
            ))}
          </ol>
        </nav>

        <h2 id="section-diagnosis" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quick Diagnosis: Where Is the Cold Spot?</h2>
        <p className="text-gray-700 mb-4">
          The location of the cold area on your radiator tells you a lot about the cause:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left rounded-tl-lg">Symptom</th>
                <th className="p-3 text-left">Likely Cause</th>
                <th className="p-3 text-left rounded-tr-lg">Fix</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Cold at the top', 'Trapped air', 'Bleed the radiator'],
                ['Cold at the bottom', 'Sludge build-up', 'Power flush or radiator removal/flush'],
                ['Cold in the middle', 'Severe sludge/corrosion', 'Replace radiator or power flush'],
                ['Completely cold', 'Valve issue, airlock, or blockage', 'Check valves, bleed, or call engineer'],
                ['One radiator cold, rest fine', 'Balancing issue or stuck valve', 'Balance system or free valve'],
              ].map(([symptom, cause, fix], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-medium border-b border-gray-100">{symptom}</td>
                  <td className="p-3 border-b border-gray-100">{cause}</td>
                  <td className="p-3 border-b border-gray-100 font-bold text-blue-800">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SVG INFOGRAPHIC */}
        <RadiatorColdSpotDiagram />

        <h2 id="section-fix-1" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Fix 1: Bleed the Radiator (Cold at the Top)</h2>
        <p className="text-gray-700 mb-4">
          Air trapped in the top of a radiator prevents hot water from filling the entire panel. This is the most common radiator problem and the easiest to fix.
        </p>
        <p className="text-gray-700 mb-6">
          We've written a complete <Link to="/blog/how-to-bleed-a-radiator" className="text-blue-800 font-semibold hover:underline">step-by-step guide to bleeding a radiator</Link> — it takes under 5 minutes with a radiator key.
        </p>

        {/* YOUTUBE EMBED */}
        <div className="mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{paddingBottom: '56.25%'}}>
            <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/PLACEHOLDER_RADIATOR_ID" title="Radiator not heating up — troubleshooting guide" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><Play size={14} className="text-blue-800" /> How to diagnose and fix a radiator that won't heat up</p>
        </div>

        <h2 id="section-fix-2" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Fix 2: Check the Radiator Valves</h2>
        <p className="text-gray-700 mb-4">
          If a radiator is completely cold, the first thing to check is whether both valves are open:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            { label: 'Thermostatic radiator valve (TRV)', desc: 'The valve with numbered settings (usually on the left). Make sure it\'s not set to 0 or the frost symbol (*). Turn it to 3–5.' },
            { label: 'Lockshield valve', desc: 'The plain valve on the opposite side, usually covered by a plastic cap. This should be partially open (turned anticlockwise). It\'s used for balancing the system — don\'t fully open it without professional advice.' },
          ].map((item, i) => (
            <li key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 mb-1">{item.label}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Stuck TRV Pin</h3>
        <p className="text-gray-700 mb-6">
          A very common issue: the metal pin inside the TRV body gets stuck in the closed position, blocking water flow even when the valve head is turned up. You can sometimes free it by removing the TRV head and gently tapping or wiggling the pin with pliers. If it won't budge, the TRV body needs replacing.
        </p>

        <h2 id="section-fix-3" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Fix 3: Balance Your Radiators</h2>
        <p className="text-gray-700 mb-4">
          If radiators closest to the boiler are hot but those furthest away are lukewarm or cold, the system needs <strong>balancing</strong>. This involves partially closing the lockshield valves on the hottest radiators to redirect more flow to the cooler ones.
        </p>
        <p className="text-gray-700 mb-6">
          Balancing a system properly requires a digital thermometer to measure the temperature difference across each radiator. It's best done by a heating engineer.
        </p>

        <h2 id="section-fix-4" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Fix 4: Power Flush for Sludge (Cold at the Bottom)</h2>
        <p className="text-gray-700 mb-4">
          Radiators that are <strong>cold at the bottom but hot at the top</strong> are blocked with iron oxide sludge — a brown/black deposit that forms when water reacts with the metal inside radiators and pipes.
        </p>
        <p className="text-gray-700 mb-6">
          A <Link to="/blog/what-is-a-power-flush" className="text-blue-800 font-semibold hover:underline">professional power flush</Link> clears this sludge using high-flow water and chemical cleaners. It typically costs £250–£400 and takes 4–8 hours. After the flush, an inhibitor chemical is added to prevent future sludge build-up.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-bold text-amber-800 mb-1">Don't Ignore Sludge</p>
              <p className="text-amber-700">Sludge doesn't just affect radiator performance — it circulates through your boiler, reducing efficiency and causing premature failure. Most boiler warranty claims are rejected if there's evidence of sludge damage without an inhibitor or filter fitted.</p>
            </div>
          </div>
        </div>

        <h2 id="section-fix-5" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Fix 5: Check the Boiler Itself</h2>
        <p className="text-gray-700 mb-4">
          If <strong>all</strong> radiators are cold or lukewarm, the problem is likely with the boiler rather than individual radiators:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            'Check the boiler pressure gauge — if it\'s below 1 bar, repressurise it',
            'Check for error codes on the boiler display',
            'Make sure the heating timer/programmer is set correctly',
            'Check the room thermostat is calling for heat (set it above current room temperature)',
            'Reset the boiler if it has locked out (press the reset button once)',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        {/* EXTERNAL RESOURCES */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><ExternalLink size={16} className="text-blue-800" /> Useful Resources</p>
          <ul className="space-y-2">
            <li><a href="https://www.gassaferegister.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Gas Safe Register — find a registered engineer</a></li>
            <li><a href="https://energysavingtrust.org.uk/advice/heating/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Energy Saving Trust — heating system advice</a></li>
            <li><a href="/blog/boiler-losing-pressure" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Why does my boiler keep losing pressure?</a></li>
          </ul>
        </div>

        <h2 id="section-when-to-call" className="text-2xl font-bold text-gray-900 mt-10 mb-4">When to Call a Professional</h2>
        <ul className="space-y-3 mb-8">
          {[
            'You\'ve bled and checked valves but the radiator is still cold',
            'Multiple radiators are underperforming',
            'You can hear banging, gurgling, or kettling noises',
            'The boiler keeps locking out or showing error codes',
            'You suspect sludge build-up (cold at the bottom)',
            'Radiator valves are leaking or seized',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <AlertTriangle className="text-amber-500 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 id="section-faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: 'Why is one radiator cold when the rest are hot?', a: 'Usually a stuck TRV pin, a closed lockshield valve, or an airlock. Try bleeding the radiator first, then check both valves are open. If it\'s still cold, the TRV pin may need freeing or the system may need balancing.' },
            { q: 'Can I add inhibitor to my heating system myself?', a: 'Yes — you can add inhibitor through a radiator bleed valve using a special funnel or through the filling loop. However, it\'s best added after a flush, which is a professional job. We add inhibitor as standard with every service and flush.' },
            { q: 'Should I replace a radiator that\'s full of sludge?', a: 'If a single radiator is badly corroded or doesn\'t improve after flushing, replacement is often the best option (£80–£200 including fitting). If multiple radiators are affected, a full system power flush is more cost-effective than replacing them all.' },
            { q: 'Can I add a radiator to my existing heating system?', a: 'Yes, in most cases. A Gas Safe engineer can add a radiator by extending the existing pipework. The key considerations are whether your boiler has enough output capacity for the extra load, and whether the pipework can be easily routed. Most combi boiler systems can accommodate one or two additional radiators without issue.' },
            { q: 'Why is my radiator still cold after a power flush?', a: 'If a radiator remains cold after a power flush, it\'s usually because the radiator itself is severely corroded or scaled internally, or there\'s a persistent airlock or valve issue. In this case, the radiator may need to be removed, flushed individually, or replaced. Occasionally, a second pass with the power flush machine on that specific radiator is needed.' },
            { q: 'How much does it cost to replace a radiator?', a: 'A standard single or double-panel radiator costs £40–£150 for the unit itself. Including labour, a straight swap replacement typically costs £150–£350. Prices rise if new pipework is needed or the radiator is in a difficult location such as a bathroom or behind furniture. Designer or towel radiators cost more — typically £200–£600 fitted.' },
            { q: 'How often should I bleed my radiators?', a: 'Most heating engineers recommend checking radiators at the start of each heating season — typically October or November. If you notice any cold spots at the top during winter, bleed them straight away. Homes with older systems or no magnetic filter fitted may need bleeding more frequently.' },
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
              <span className="text-xs font-bold text-green-600 uppercase tracking-wide">DIY Heating Tips</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How to Bleed a Radiator: Step-by-Step Guide</p>
            </Link>
            <Link to="/blog/what-is-a-power-flush" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">What Is a Power Flush? Do You Need One?</p>
            </Link>
            <Link to="/blog/boiler-losing-pressure" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Troubleshooting</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Why Does My Boiler Keep Losing Pressure?</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Radiators Still Not Working?</h2>
          <p className="text-blue-200 mb-6">Our Gas Safe engineers diagnose and fix radiator problems across Worcester and Worcestershire — often in a single visit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">
              Book a Repair
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
