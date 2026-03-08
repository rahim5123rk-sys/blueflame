import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Phone, ExternalLink, ChevronRight, Info, Play } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Turn your heating on and let it fully warm up',
    detail: 'Run the heating for at least 15 minutes so all radiators reach their normal operating temperature. This lets the trapped air rise to the top of each radiator where you\'ll be able to release it.',
  },
  {
    step: 2,
    title: 'Identify which radiators need bleeding',
    detail: 'Feel along the top of each radiator carefully (they may be hot). If the top is noticeably cooler than the bottom, or the radiator has a cold patch in the middle or top while the bottom is warm, it contains trapped air and needs bleeding.',
  },
  {
    step: 3,
    title: 'Turn the heating OFF and wait 20 minutes',
    detail: 'Never bleed a radiator while the heating is on — the hot pressurised water can spray out and scald you. Switch the boiler off and wait for 15–20 minutes for the system to depressurise slightly.',
  },
  {
    step: 4,
    title: 'Locate the bleed valve',
    detail: 'Look at the top of the radiator on one of the sides. You\'ll see a small square or hexagonal valve — this is the bleed valve. It won\'t look like a tap; it\'s usually a simple metal fitting with a square socket in the centre.',
  },
  {
    step: 5,
    title: 'Prepare your materials',
    detail: 'You need: a radiator bleed key (available from any DIY or hardware shop for under £2), a cloth or old towel, and a small bowl or cup to catch drips. Hold the cloth under the bleed valve to protect your wall and floor.',
  },
  {
    step: 6,
    title: 'Open the bleed valve (slowly!)',
    detail: 'Insert the bleed key into the square socket and turn it anti-clockwise — just a quarter to half a turn. You should hear a hissing sound as air escapes. Do NOT fully remove the valve. Hold your cloth beneath it to catch any water.',
  },
  {
    step: 7,
    title: 'Wait for water to flow steadily',
    detail: 'The hissing will stop and a steady trickle of water will start to flow. When you get a continuous stream of water with no more spluttering or air bubbles, the air is out. Close the valve clockwise — firmly but don\'t overtighten.',
  },
  {
    step: 8,
    title: 'Check your boiler pressure',
    detail: 'After bleeding radiators, check the pressure gauge on your boiler. Bleeding releases water, which can drop the pressure below the normal range (usually 1–1.5 bar). If the pressure has dropped below 1 bar, you\'ll need to repressurise the system by opening the filling loop briefly — refer to your boiler manual for exact instructions.',
  },
  {
    step: 9,
    title: 'Turn the heating back on and check',
    detail: 'Switch the heating back on and let the system warm up again. Check the radiators you bled — they should now be uniformly warm from top to bottom. Job done.',
  },
];

function BleedingDiagram() {
  return (
    <div className="my-10">
      <p className="font-bold text-gray-900 mb-4 text-center text-lg">How Air Gets Trapped — and How Bleeding Fixes It</p>
      <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto block" aria-label="Radiator bleeding diagram">
        {/* Radiator with air at top */}
        <rect x="30" y="40" width="160" height="200" rx="8" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" />
        {/* Air pocket - blue */}
        <rect x="30" y="40" width="160" height="70" rx="8" fill="#bfdbfe" opacity="0.9" />
        <rect x="30" y="90" width="160" height="20" fill="#bfdbfe" opacity="0.9" />
        {/* Hot water - orange */}
        <rect x="30" y="110" width="160" height="130" fill="#fed7aa" opacity="0.9" />
        <rect x="30" y="228" width="160" height="12" rx="8" fill="#fed7aa" opacity="0.9" />
        {/* Fins */}
        {[70, 100, 130, 160].map((x) => (
          <line key={x} x1={x} y1="40" x2={x} y2="240" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4,3" />
        ))}
        {/* Air label */}
        <text x="110" y="70" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">AIR</text>
        <text x="110" y="85" textAnchor="middle" fontSize="10" fill="#1d4ed8">Cold zone</text>
        {/* Water label */}
        <text x="110" y="175" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c2410c">HOT WATER</text>
        <text x="110" y="190" textAnchor="middle" fontSize="10" fill="#ea580c">Warm zone</text>
        {/* Bleed valve */}
        <rect x="175" y="48" width="18" height="14" rx="3" fill="#4b5563" />
        <text x="196" y="42" fontSize="9" fill="#374151">Bleed valve</text>
        {/* Label - Before */}
        <text x="110" y="270" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">BEFORE bleeding</text>

        {/* Arrow */}
        <text x="215" y="145" fontSize="22" fill="#16a34a">→</text>

        {/* Radiator fully hot */}
        <rect x="240" y="40" width="160" height="200" rx="8" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" />
        {/* All hot water */}
        <rect x="240" y="40" width="160" height="200" rx="8" fill="#fed7aa" opacity="0.9" />
        {/* Fins */}
        {[280, 310, 340, 370].map((x) => (
          <line key={x} x1={x} y1="40" x2={x} y2="240" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,3" />
        ))}
        {/* Hot label */}
        <text x="320" y="135" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c2410c">UNIFORMLY</text>
        <text x="320" y="152" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c2410c">HOT</text>
        <text x="320" y="170" textAnchor="middle" fontSize="10" fill="#ea580c">Air released</text>
        {/* Bleed valve */}
        <rect x="385" y="48" width="18" height="14" rx="3" fill="#4b5563" />
        {/* Air escape */}
        <text x="402" y="30" fontSize="18" fill="#6b7280">↑</text>
        <text x="398" y="20" fontSize="9" fill="#6b7280">air</text>
        {/* Label - After */}
        <text x="320" y="270" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16a34a">AFTER bleeding</text>
      </svg>
      <p className="text-sm text-gray-500 text-center mt-3">Trapped air prevents hot water reaching the top of the radiator — bleeding releases it</p>
    </div>
  );
}

export default function HowToBleedRadiator() {
  return (
    <article className="bg-white animate-fadeIn">

      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
          <span className="inline-block bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">DIY Heating Tips</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            How to Bleed a Radiator: Step-by-Step Guide (No Plumber Needed)
          </h1>
          <p className="text-blue-200 text-lg">By Blue Flame Gas Services &middot; March 2026 &middot; 5 min read</p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">

        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          If your radiators are warm at the bottom but cold at the top, the fix is simple: bleed them. It takes 5 minutes per radiator, costs nothing (just a £1.50 bleed key), and can make a noticeable difference to your heating efficiency and bills.
        </p>

        {/* TABLE OF CONTENTS */}
        <nav className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Info size={18} className="text-blue-800" /> In This Guide</p>
          <ol className="space-y-2">
            {[
              ['section-why', 'Why Do Radiators Get Airlocks?'],
              ['section-when', 'How Do I Know If a Radiator Needs Bleeding?'],
              ['section-what', 'What You\'ll Need'],
              ['section-steps', 'Step-by-Step Instructions'],
              ['section-safety', 'Safety Notes'],
              ['section-when-not', 'When Bleeding Doesn\'t Fix It'],
              ['section-faqs', 'Frequently Asked Questions'],
            ].map(([id, title]) => (
              <li key={id}><a href={`#${id}`} className="flex items-center gap-2 text-blue-800 hover:underline text-sm font-medium"><ChevronRight size={14} />{title}</a></li>
            ))}
          </ol>
        </nav>

        <h2 id="section-why" className="text-2xl font-bold text-gray-900 mb-4">Why Do Radiators Get Airlocks?</h2>
        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mb-6">
          <p className="font-bold text-blue-800">The science in plain English</p>
          <p className="text-blue-700 text-sm mt-1">Small amounts of air enter your heating system over time — through normal pump operation, small leaks, dissolved gases being released from the water, or when the system is drained for maintenance. Because air is lighter than water, it rises to the top of radiators and sits there, preventing hot water from filling the full height of the panel. The result: a cold top half and warm bottom — and you're paying to heat a radiator that's only working at half capacity.</p>
        </div>

        <BleedingDiagram />

        <h2 id="section-when" className="text-2xl font-bold text-gray-900 mb-4">How Do I Know If a Radiator Needs Bleeding?</h2>
        <div className="space-y-3 mb-10">
          {[
            { sign: 'Cold at the top, warm at the bottom', detail: 'Classic trapped air symptom. The air sits above the water line, leaving the top panel cold.' },
            { sign: 'Gurgling or bubbling sounds', detail: 'Water moving past trapped air inside the radiator creates a gurgling sound — audible when the heating first comes on.' },
            { sign: 'Radiator takes longer to warm up than others', detail: 'Air slows the circulation of hot water through the panel, making it slower to reach temperature.' },
            { sign: 'Heating bills increasing without explanation', detail: 'If radiators aren\'t heating efficiently, your boiler runs longer to reach the target temperature — wasting gas.' },
          ].map((item) => (
            <div key={item.sign} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
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
              src="https://www.youtube.com/embed/QDdHqMqFxgI"
              title="How to bleed a radiator — step by step"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><Play size={14} className="text-blue-800" /> Video: how to bleed a radiator in under 5 minutes</p>
        </div>

        <h2 id="section-what" className="text-2xl font-bold text-gray-900 mb-6">What You'll Need</h2>
        <ul className="grid grid-cols-2 gap-3 mb-10">
          {['Radiator bleed key (~£1.50 from any DIY shop)', 'Old cloth or towel', 'Small bowl or cup', 'Dry hands'].map(item => (
            <li key={item} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm font-medium text-gray-700">
              <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
              {item}
            </li>
          ))}
        </ul>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-blue-800 mb-1">Tip: Start at the top of the house</p>
          <p className="text-blue-700 text-sm">Work from the top floor down, and start with the radiator furthest from the boiler. Air tends to accumulate at the highest and furthest points in the system first.</p>
        </div>

        <h2 id="section-steps" className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Instructions</h2>
        <div className="space-y-5 mb-12">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-5 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex-shrink-0 flex items-center justify-center font-extrabold text-lg">
                {s.step}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 id="section-safety" className="text-2xl font-bold text-gray-900 mb-4">Safety Notes</h2>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10">
          <p className="font-bold text-amber-800 flex items-center gap-2"><AlertTriangle size={18} /> Keep these in mind</p>
          <ul className="mt-2 space-y-1 text-amber-700 text-sm">
            <li>• Always turn the heating off and wait before bleeding — pressurised hot water causes serious scalds</li>
            <li>• Never fully remove the bleed valve — a quarter to half turn is all you need</li>
            <li>• If water sprays out forcefully, close the valve and call a plumber — your system pressure may be too high</li>
            <li>• Check the boiler pressure gauge after bleeding — it may have dropped and need topping up</li>
            <li>• If the water that comes out is black or very dark, you likely have a sludge problem — see our <Link to="/blog/what-is-a-power-flush" className="underline">power flush guide</Link></li>
          </ul>
        </div>

        <h2 id="section-when-not" className="text-2xl font-bold text-gray-900 mb-4">When Bleeding Doesn't Fix It</h2>
        <p className="text-gray-700 mb-4">
          If you bleed the radiator and the cold spot returns within a few weeks, or bleeding doesn't help at all, you likely have a more persistent problem. See our full guide on <Link to="/blog/radiator-not-heating-up" className="text-blue-800 font-semibold hover:underline">why radiators don't heat up</Link> for a complete diagnosis.
        </p>
        <ul className="space-y-3 mb-10">
          {[
            { issue: 'Persistent air ingress', fix: 'Could indicate a small leak in the system drawing in air. A Gas Safe engineer can identify and seal the source. Often accompanied by a gradual drop in boiler pressure.' },
            { issue: 'Cold bottom, warm top', fix: 'This is the opposite of an airlock — it\'s usually sludge (black iron oxide) blocking the bottom of the radiator. Bleeding won\'t fix it. A power flush or radiator replacement is needed.' },
            { issue: 'Radiator cold all over', fix: 'Check the lockshield and thermostatic valves at each end are both open. If they are and it\'s still cold, the valve may be stuck or faulty — a very common issue with TRV pins.' },
            { issue: 'Radiators bleed fine but heating still poor', fix: 'Your boiler pump may be failing, the system may need balancing, or heavy sludge build-up in the pipework is reducing flow throughout the whole system.' },
          ].map((item) => (
            <li key={item.issue} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 text-sm mb-1">{item.issue}</p>
              <p className="text-gray-600 text-sm">{item.fix}</p>
            </li>
          ))}
        </ul>

        {/* External Resources */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><ExternalLink size={16} className="text-blue-800" /> Useful Resources</p>
          <ul className="space-y-2">
            <li><a href="https://www.gassaferegister.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Gas Safe Register — verify your heating engineer</a></li>
            <li><a href="https://energysavingtrust.org.uk/advice/heating/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Energy Saving Trust — home heating advice</a></li>
            <li><Link to="/blog/how-to-repressurise-a-boiler" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> How to repressurise your boiler after bleeding</Link></li>
          </ul>
        </div>

        <h2 id="section-faqs" className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: 'How often should I bleed my radiators?', a: 'Most heating engineers recommend checking at the start of each heating season — typically October or November. If you notice cold spots at the top during winter, bleed them straight away. Homes with older systems or no magnetic filter tend to need bleeding more frequently.' },
            { q: 'Do I need a special key to bleed a radiator?', a: 'Most radiators use a standard square bleed valve that takes a radiator key — these cost around £1.50 from any hardware or DIY store. Some modern radiators have a slotted bleed valve that takes a flat-head screwdriver instead. Check yours before you start.' },
            { q: 'What if no air or water comes out when I open the bleed valve?', a: 'If nothing comes out, the bleed valve itself may be blocked with corrosion or limescale, or there\'s an airlock further in the system preventing flow. Try a quarter turn more. If still nothing, don\'t force it — call an engineer, as a seized valve can break if overtightened.' },
            { q: 'Can I bleed a radiator without turning the heating off?', a: 'Technically yes, but it\'s not safe. With the system running at full pressure and temperature, hot water can spray out forcefully when you open the valve, causing scalds. Always switch off and wait 15–20 minutes first.' },
            { q: 'My boiler pressure dropped after bleeding — is this normal?', a: 'Yes, completely normal. Every time you release water (even a small amount) from the system, the pressure drops slightly. If it falls below 1 bar, repressurise using the filling loop on your boiler. Our guide on <a href="/blog/how-to-repressurise-a-boiler" class="text-blue-800 font-semibold hover:underline">how to repressurise a boiler</a> walks you through it.' },
            { q: 'The water that came out was black — what does that mean?', a: 'Black water indicates magnetite sludge in your heating system. This is iron oxide formed when water reacts with the steel inside radiators and pipes. Bleeding will remove a little of it, but the underlying problem won\'t go away without a power flush and inhibitor dose. Left untreated, sludge accelerates boiler and radiator corrosion.' },
            { q: 'Will bleeding radiators reduce my energy bills?', a: 'Yes — a properly bled system heats more efficiently because hot water fills the full height of each radiator panel. The Energy Saving Trust estimates that good heating controls and maintenance can reduce bills by 8–12% per year. In a poorly-maintained system with multiple airlocked radiators, the difference can be even more noticeable.' },
          ].map((faq) => (
            <div key={faq.q} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
            </div>
          ))}
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-10 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/blog/radiator-not-heating-up" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Radiator Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Radiator Not Heating Up? Here's How to Fix It</p>
            </Link>
            <Link to="/blog/how-to-repressurise-a-boiler" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">DIY Heating Tips</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How to Repressurise a Boiler: Step-by-Step Guide</p>
            </Link>
            <Link to="/blog/what-is-a-power-flush" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">What Is a Power Flush? Do You Need One?</p>
            </Link>
          </div>
        </div>

        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Still Having Heating Problems?</h2>
          <p className="text-blue-200 mb-6">If bleeding your radiators doesn't solve the issue, our Gas Safe engineers can diagnose and fix it. We cover Worcester and all of Worcestershire.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">Book a Diagnosis</Link>
            <a href="tel:07480561846" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> 07480 561 846
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
