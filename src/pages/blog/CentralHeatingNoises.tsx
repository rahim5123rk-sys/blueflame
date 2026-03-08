import { Link } from 'react-router-dom';
import { AlertTriangle, Phone, ExternalLink, ChevronRight, Info, Play } from 'lucide-react';

function BoilerNoiseDiagram() {
  return (
    <div className="my-10">
      <p className="font-bold text-gray-900 mb-4 text-center text-lg">Where the Noise Is Coming From Matters</p>
      <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto block" aria-label="Central heating noise source diagram">
        {/* Boiler body */}
        <rect x="150" y="60" width="120" height="140" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
        <text x="210" y="95" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">BOILER</text>
        {/* Heat exchanger */}
        <rect x="165" y="105" width="90" height="45" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="210" y="125" textAnchor="middle" fontSize="9" fill="#92400e">Heat Exchanger</text>
        <text x="210" y="138" textAnchor="middle" fontSize="8" fill="#b45309">→ Kettling here</text>
        {/* Pump */}
        <ellipse cx="210" cy="170" rx="22" ry="16" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
        <text x="210" y="174" textAnchor="middle" fontSize="9" fill="#4338ca">PUMP</text>
        {/* Pump label */}
        <text x="250" y="166" fontSize="9" fill="#6b7280">← Humming/</text>
        <text x="250" y="178" fontSize="9" fill="#6b7280">vibrating</text>

        {/* Flue pipe up */}
        <rect x="195" y="20" width="30" height="40" rx="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
        <text x="210" y="45" textAnchor="middle" fontSize="8" fill="#374151">FLUE</text>
        <text x="262" y="35" fontSize="9" fill="#6b7280">← Blocked</text>
        <text x="262" y="47" fontSize="9" fill="#6b7280">flue noise</text>

        {/* Pipes */}
        {/* Flow pipe right */}
        <rect x="270" y="100" width="100" height="24" rx="6" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
        <text x="320" y="116" textAnchor="middle" fontSize="9" fill="#374151">FLOW PIPE</text>
        {/* Return pipe right */}
        <rect x="270" y="155" width="100" height="24" rx="6" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
        <text x="320" y="171" textAnchor="middle" fontSize="9" fill="#374151">RETURN PIPE</text>

        {/* Radiator right */}
        <rect x="370" y="80" width="40" height="120" rx="5" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1.5" />
        <text x="390" y="145" textAnchor="middle" fontSize="8" fill="#374151" style={{ writingMode: 'vertical-rl' }}>RAD</text>

        {/* Pipe bang annotation */}
        <text x="270" y="95" fontSize="9" fill="#dc2626">↑ Banging/</text>
        <text x="270" y="83" fontSize="9" fill="#dc2626">ticking here</text>

        {/* Radiator gurgling */}
        <text x="365" y="70" fontSize="9" fill="#2563eb" textAnchor="end">Gurgling →</text>
        <text x="365" y="60" fontSize="9" fill="#2563eb" textAnchor="end">(trapped air)</text>

        {/* Urgency legend */}
        <rect x="20" y="230" width="380" height="60" rx="8" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
        <text x="30" y="248" fontSize="10" fontWeight="bold" fill="#374151">Urgency guide:</text>
        <rect x="30" y="255" width="10" height="10" rx="2" fill="#16a34a" />
        <text x="45" y="264" fontSize="9" fill="#374151">Low — DIY fix usually fine</text>
        <rect x="140" y="255" width="10" height="10" rx="2" fill="#d97706" />
        <text x="155" y="264" fontSize="9" fill="#374151">Medium — book an engineer</text>
        <rect x="280" y="255" width="10" height="10" rx="2" fill="#dc2626" />
        <text x="295" y="264" fontSize="9" fill="#374151">High — call today</text>
      </svg>
      <p className="text-sm text-gray-500 text-center mt-3">The location of the noise is the first clue to the cause</p>
    </div>
  );
}

export default function CentralHeatingNoises() {
  return (
    <article className="bg-white animate-fadeIn">

      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
          <span className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Boiler Troubleshooting</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Noisy Boiler or Radiators? What Those Sounds Mean
          </h1>
          <p className="text-blue-200 text-lg">
            By Blue Flame Gas Services &middot; March 2026 &middot; 7 min read
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Banging pipes, a gurgling boiler, or a radiator that sounds like a kettle — central heating noises are common and usually point to a specific, fixable problem. Here's what each noise means and what to do about it.
        </p>

        {/* TABLE OF CONTENTS */}
        <nav className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Info size={18} className="text-blue-800" /> In This Guide</p>
          <ol className="space-y-2">
            {[
              ['section-reference', 'Quick Reference: Common Heating Noises'],
              ['section-banging', 'Banging or Knocking Pipes'],
              ['section-gurgling', 'Gurgling Radiators'],
              ['section-kettling', 'Kettling (Boiler Sounds Like a Kettle)'],
              ['section-humming', 'Humming or Vibrating Boiler'],
              ['section-clicking', 'Repeated Clicking (Ignition Failure)'],
              ['section-dangerous', 'When Is a Noisy Boiler Dangerous?'],
              ['section-faqs', 'Frequently Asked Questions'],
            ].map(([id, title]) => (
              <li key={id}><a href={`#${id}`} className="flex items-center gap-2 text-blue-800 hover:underline text-sm font-medium"><ChevronRight size={14} />{title}</a></li>
            ))}
          </ol>
        </nav>

        <h2 id="section-reference" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Heating Noises: Quick Reference</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left rounded-tl-lg">Noise</th>
                <th className="p-3 text-left">Where</th>
                <th className="p-3 text-left">Likely Cause</th>
                <th className="p-3 text-left rounded-tr-lg">Urgency</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Banging / knocking', 'Pipes', 'Thermal expansion or water hammer', 'Low'],
                ['Gurgling', 'Radiators', 'Trapped air', 'Low (DIY fix)'],
                ['Kettling (like a kettle)', 'Boiler', 'Limescale or sludge build-up', 'Medium'],
                ['Humming / vibrating', 'Boiler', 'Pump speed too high or failing pump', 'Medium'],
                ['Clicking (repeated)', 'Boiler', 'Ignition failure / faulty electrode', 'High'],
                ['Whistling', 'Boiler / pipes', 'Restricted water flow or air', 'Medium'],
                ['Dripping', 'Boiler / pipes', 'Leak from valve, joint, or PRV', 'High'],
              ].map(([noise, where, cause, urgency], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-medium border-b border-gray-100">{noise}</td>
                  <td className="p-3 border-b border-gray-100">{where}</td>
                  <td className="p-3 border-b border-gray-100">{cause}</td>
                  <td className={`p-3 border-b border-gray-100 font-bold ${urgency === 'High' ? 'text-red-600' : urgency === 'Medium' ? 'text-amber-600' : 'text-green-600'}`}>{urgency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <BoilerNoiseDiagram />

        <h2 id="section-banging" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Banging or Knocking Pipes</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">What it sounds like</h3>
        <p className="text-gray-700 mb-4">
          A loud bang, clunk, or tapping noise — often when the heating first comes on or turns off. Sometimes rhythmic, sometimes random. Often heard from beneath floorboards or inside walls.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Causes</h3>
        <ul className="space-y-2 mb-4 text-gray-700">
          <li><strong>Thermal expansion:</strong> Copper pipes expand when they heat up and contract when they cool. If a pipe is running through a tight notch in a joist or is clipped too tightly, it will bang as it moves. This is very common in older homes where pipes were laid under floorboards.</li>
          <li><strong>Water hammer:</strong> A sharp bang when a valve closes suddenly — can affect shared pipework with washing machines or dishwashers. Installing water hammer arrestors on appliance inlets usually fixes this.</li>
          <li><strong>Kettling noise from pipes:</strong> If the banging is accompanied by rumbling, it may be localised limescale causing steam pockets in the pipework rather than the boiler itself.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Fix</h3>
        <p className="text-gray-700 mb-6">
          Thermal expansion is generally harmless but annoying. A plumber can add pipe clips with rubber inserts or slightly widen the notches in joists to allow pipe movement. If the noise is new or getting worse, investigate in case a pipe support has worked loose.
        </p>

        {/* YouTube embed */}
        <div className="mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/PLACEHOLDER_NOISES_ID"
              title="Noisy boiler and radiators — what the sounds mean"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><Play size={14} className="text-blue-800" /> Video: diagnosing boiler and radiator noises — engineer explains each sound</p>
        </div>

        <h2 id="section-gurgling" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Gurgling Radiators</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">What it sounds like</h3>
        <p className="text-gray-700 mb-4">
          A bubbling or trickling water sound from inside one or more radiators — similar to a fish tank. Often most noticeable when the heating first comes on.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Cause</h3>
        <p className="text-gray-700 mb-4">
          Trapped air inside the radiator. Air gets into the system through small leaks, dissolved gases in the water, or after the system has been drained for maintenance or repairs.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Fix</h3>
        <p className="text-gray-700 mb-6">
          <Link to="/blog/how-to-bleed-a-radiator" className="text-blue-800 font-semibold hover:underline">Bleed the radiator</Link> — this is a 5-minute DIY job requiring only a £1.50 radiator key. If the problem keeps recurring within a few weeks, the system may have a small leak that's allowing air in, which needs professional investigation.
        </p>

        <h2 id="section-kettling" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Kettling (Boiler Sounds Like a Kettle)</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">What it sounds like</h3>
        <p className="text-gray-700 mb-4">
          A rumbling, popping, or whistling noise from inside the boiler — like a kettle coming to the boil. It tends to get louder as the boiler reaches operating temperature and may vary with demand.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Causes</h3>
        <ul className="space-y-2 mb-4 text-gray-700">
          <li><strong>Limescale:</strong> In hard water areas (which includes parts of Worcestershire and the surrounding region), limescale builds up on the heat exchanger, restricting water flow and causing localised boiling pockets.</li>
          <li><strong>Sludge:</strong> Iron oxide deposits can also restrict flow through the heat exchanger, causing the same overheating effect. Both limescale and sludge are often present together.</li>
          <li><strong>Low water flow:</strong> A partially closed valve or blocked filter can reduce water flow to the boiler, causing it to overheat the water that is present.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Fix</h3>
        <p className="text-gray-700 mb-6">
          A <Link to="/blog/what-is-a-power-flush" className="text-blue-800 font-semibold hover:underline">power flush</Link> can clear sludge. If limescale is the primary cause, a chemical descale of the heat exchanger is needed — sometimes followed by heat exchanger replacement in severe cases. An Adey MagnaClean filter should be fitted to prevent future build-up.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-amber-800 mb-1">Don't ignore kettling</p>
          <p className="text-amber-700 text-sm">Kettling means the boiler heat exchanger is overheating. Left untreated, this accelerates wear on the heat exchanger and can cause it to fail prematurely — a replacement typically costs £300–£600 on top of labour. Early intervention through a power flush or descale is much cheaper.</p>
        </div>

        <h2 id="section-humming" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Humming or Vibrating Boiler</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Causes</h3>
        <ul className="space-y-2 mb-4 text-gray-700">
          <li><strong>Pump speed too high:</strong> The central heating pump circulates water around the system. If it's set too fast for the system's needs, it can cause vibration and humming — particularly if there's a restriction in the pipework creating turbulence.</li>
          <li><strong>Failing pump:</strong> A pump with worn bearings or a seized impeller will hum, buzz, or vibrate loudly. The noise is usually constant when the heating is on rather than varying with demand.</li>
          <li><strong>Loose component:</strong> Sometimes a panel, bracket, flue terminal, or pipe inside the boiler casing has vibrated loose over time.</li>
          <li><strong>Burner vibration:</strong> A dirty or misaligned burner can cause a low hum or vibration during firing. This should be checked at an annual service.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Fix</h3>
        <p className="text-gray-700 mb-6">
          An engineer can adjust the pump speed (modern boilers often have variable-speed pumps set during commissioning), tighten loose components, or replace the pump if it's failing. Pump replacement typically costs <strong>£150–£350</strong> including parts and labour, depending on the boiler model.
        </p>

        <h2 id="section-clicking" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Repeated Clicking (Ignition Failure)</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">What it sounds like</h3>
        <p className="text-gray-700 mb-4">
          A rapid clicking or ticking followed by the boiler shutting down. You may see the boiler attempt to ignite several times before locking out with an error code on the display.
        </p>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-bold text-red-800 mb-1">Call an Engineer Promptly</p>
              <p className="text-red-700">Ignition problems should always be investigated by a Gas Safe engineer. Do not repeatedly try to reset a boiler that fails to ignite — it can indicate a gas supply issue, faulty gas valve, blocked flue, or failed ignition electrode. Repeated resets without a fix can mask a developing safety issue.</p>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Common causes of repeated clicking include: a faulty ignition electrode or lead, a failed PCB, a dirty or worn burner, insufficient gas pressure, or a blocked condensate pipe (see our <Link to="/blog/frozen-condensate-pipe" className="text-blue-800 font-semibold hover:underline">frozen condensate pipe guide</Link>).
        </p>

        <h2 id="section-dangerous" className="text-2xl font-bold text-gray-900 mt-10 mb-4">When Is a Noisy Boiler Dangerous?</h2>
        <p className="text-gray-700 mb-4">
          Most heating noises are annoying rather than dangerous. However, you should <strong>call an engineer immediately</strong> — or call the National Gas Emergency line on 0800 111 999 — if:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            'You can smell gas at any time — evacuate and call 0800 111 999 immediately, do not use light switches',
            'The boiler is repeatedly failing to ignite (clicking without lighting)',
            'You notice water dripping from the boiler or pipes — a leak under pressure can damage your home and electrics',
            'The boiler is making loud banging noises from inside the casing itself (not the pipes)',
            'Your carbon monoxide detector has sounded or the alarm is lit — evacuate and call 0800 111 999',
            'You or family members feel nauseous, dizzy, or have a headache when the heating is on',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mb-8">
          For more on carbon monoxide safety, see our detailed guide: <Link to="/blog/carbon-monoxide-safety" className="text-blue-800 font-semibold hover:underline">Carbon Monoxide: The Silent Killer Every Homeowner Must Know About</Link>.
        </p>

        {/* External Resources */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><ExternalLink size={16} className="text-blue-800" /> Useful Resources</p>
          <ul className="space-y-2">
            <li><a href="https://www.gassaferegister.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Gas Safe Register — find a registered engineer near you</a></li>
            <li><a href="https://www.hse.gov.uk/gas/domestic/carbonmonoxide.htm" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> HSE — carbon monoxide safety guidance</a></li>
            <li><Link to="/blog/what-is-a-power-flush" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> What is a power flush and when do you need one?</Link></li>
          </ul>
        </div>

        <h2 id="section-faqs" className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: 'Is it normal for a boiler to make some noise?', a: 'Yes — a quiet hum or the sound of the burner igniting is perfectly normal. You should only be concerned if the noise is new, getting louder over time, or accompanied by error codes, a drop in performance, or a smell of gas or burning.' },
            { q: 'Why do my radiators make noise at night?', a: 'If your heating switches off at night, the pipes and radiators cool and contract, which can cause ticking or creaking noises. This is thermal contraction — essentially the same expansion noise in reverse — and is completely harmless.' },
            { q: 'Can a noisy boiler increase my gas bills?', a: 'Yes — kettling and sludge build-up reduce efficiency, meaning your boiler burns more gas to produce the same amount of heat. The Energy Saving Trust estimates a severely contaminated system can be 10–15% less efficient than a clean one. A power flush can restore this lost efficiency.' },
            { q: 'My boiler makes a loud bang when it fires up — is this dangerous?', a: 'A single "whoomph" or mild thud when the boiler ignites can be normal (particularly on older models) and is usually caused by a slight delay in gas ignition. However, if the bang is very loud, getting worse, or accompanied by a smell of gas, call a Gas Safe engineer — it could indicate a delayed ignition problem that needs attention.' },
            { q: 'Why does my combi boiler make a noise when I run hot water but not heating?', a: 'Combi boilers switch into hot water mode when you open a tap, which involves a diverter valve changing position and the flow rate increasing. A clicking sound when switching modes is normal. A loud clunking or grinding noise could indicate a worn diverter valve — a common repair on combi boilers that typically costs £100–£200 to fix.' },
            { q: 'How much does it cost to fix a noisy boiler?', a: 'It depends on the cause. Bleeding radiators (gurgling) is free. Power flush for kettling costs £300–£500. Pump replacement costs £150–£350. Heat exchanger replacement (severe kettling) costs £300–£600+. Ignition electrode replacement typically costs £80–£150. An annual service (£70–£100) often catches developing issues before they cause noisy symptoms.' },
            { q: 'Can I use my boiler while it\'s making a strange noise?', a: 'For low-urgency noises (gurgling radiators, mild pipe ticking), it\'s generally safe to keep using the heating while you arrange a fix. For medium-urgency noises (kettling, humming), book an engineer soon but the boiler is not immediately dangerous. For high-urgency noises (repeated clicking, dripping, gas smell), stop using the boiler and call an engineer or the gas emergency line immediately.' },
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
            <Link to="/blog/what-is-a-power-flush" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">What Is a Power Flush? Do You Need One?</p>
            </Link>
            <Link to="/blog/boiler-losing-pressure" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Troubleshooting</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Why Does My Boiler Keep Losing Pressure?</p>
            </Link>
            <Link to="/blog/carbon-monoxide-safety" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wide">Gas Safety</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Carbon Monoxide: The Silent Killer Every Homeowner Must Know</p>
            </Link>
          </div>
        </div>

        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Concerned About a Noisy Boiler?</h2>
          <p className="text-blue-200 mb-6">Our Gas Safe engineers can diagnose and fix the problem — often in a single visit. We cover Worcester and all of Worcestershire.</p>
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
