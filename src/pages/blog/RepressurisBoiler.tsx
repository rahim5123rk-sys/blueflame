import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Phone, Gauge, ExternalLink, ChevronRight, Info, Play } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Switch off your boiler and let it cool',
    detail: 'Turn the boiler off and wait 10–15 minutes. Never repressurise a boiler while it is running or hot — the system needs to be depressurised before you open the filling loop.',
  },
  {
    step: 2,
    title: 'Find the pressure gauge',
    detail: 'The pressure gauge is usually on the front of the boiler — it looks like a clock face or a small digital display. The needle or reading should currently be below 1 bar if your boiler has lost pressure. Normal operating pressure is 1–1.5 bar.',
  },
  {
    step: 3,
    title: 'Locate the filling loop',
    detail: 'The filling loop is a silver or grey flexible braided hose, usually underneath the boiler, with one or two valves (taps or screws) at each end. Some boilers have an internal filling loop — check your boiler manual if you cannot find it.',
  },
  {
    step: 4,
    title: 'Connect the filling loop (if detachable)',
    detail: "Some filling loops need to be connected before use — you'll clip or screw each end onto the corresponding ports. Others are permanently connected and just need the valves opened.",
  },
  {
    step: 5,
    title: 'Slowly open both filling loop valves',
    detail: 'Open the valves (turn them inline with the hose — usually a quarter turn). You will hear water flowing into the system. Watch the pressure gauge continuously as you do this.',
  },
  {
    step: 6,
    title: 'Stop at 1.2–1.5 bar',
    detail: 'As the pressure rises, close both valves when the gauge reads around 1.2–1.5 bar. Do not exceed 1.5 bar — if you overfill, you will need to bleed a radiator to release the excess pressure. Never let it exceed 2 bar.',
  },
  {
    step: 7,
    title: 'Disconnect and restart the boiler',
    detail: 'If your filling loop is detachable, remove it. Turn the boiler back on. Check the pressure gauge again once the boiler has warmed up — pressure will rise slightly when hot, which is normal. 1.5–2 bar when hot is fine.',
  },
];

function PressureGaugeInfographic() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
      <p className="font-bold text-gray-900 mb-4 text-center">Boiler Pressure Zones at a Glance</p>
      <svg viewBox="0 0 320 180" className="w-full max-w-sm mx-auto block" aria-label="Boiler pressure gauge diagram">
        {/* Background semicircle zones */}
        {/* Too low: red left arc */}
        <path d="M 30 150 A 130 130 0 0 1 80 43" stroke="#ef4444" strokeWidth="28" fill="none" strokeLinecap="butt" />
        {/* Normal: green arc */}
        <path d="M 80 43 A 130 130 0 0 1 200 30" stroke="#22c55e" strokeWidth="28" fill="none" strokeLinecap="butt" />
        {/* Hot / high-normal: amber arc */}
        <path d="M 200 30 A 130 130 0 0 1 255 90" stroke="#f59e0b" strokeWidth="28" fill="none" strokeLinecap="butt" />
        {/* Too high: red right arc */}
        <path d="M 255 90 A 130 130 0 0 1 290 150" stroke="#ef4444" strokeWidth="28" fill="none" strokeLinecap="butt" />

        {/* Needle pointing to ~1.2 bar (normal zone) */}
        <line x1="160" y1="150" x2="105" y2="55" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round" />
        {/* Pivot */}
        <circle cx="160" cy="150" r="7" fill="#1e3a8a" />

        {/* Bar labels */}
        <text x="22" y="168" fontSize="10" fill="#6b7280" textAnchor="middle">0</text>
        <text x="68" y="38" fontSize="10" fill="#6b7280" textAnchor="middle">1</text>
        <text x="160" y="18" fontSize="10" fill="#6b7280" textAnchor="middle">1.5</text>
        <text x="254" y="38" fontSize="10" fill="#6b7280" textAnchor="middle">2</text>
        <text x="298" y="168" fontSize="10" fill="#6b7280" textAnchor="middle">3</text>
        <text x="160" y="108" fontSize="10" fill="#6b7280" textAnchor="middle">bar</text>
      </svg>
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs font-medium">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span> Too low (&lt;1 bar)</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span> Normal (1–1.5 bar cold)</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> Hot system (1.5–2 bar)</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span> Too high (&gt;2.5 bar)</span>
      </div>
    </div>
  );
}

export default function RepressurisBoiler() {
  return (
    <article className="bg-white animate-fadeIn">

      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">← Back to Blog</Link>
          <span className="inline-block bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">DIY Heating Tips</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            How to Repressurise a Boiler: Step-by-Step Guide
          </h1>
          <p className="text-blue-200 text-lg">By Blue Flame Gas Services · March 2026 · 4 min read</p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">

        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          If your boiler display shows a low pressure warning, or the pressure gauge reads below 1 bar, your boiler has lost pressure. This is one of the most common boiler problems — and one of the few you can safely fix yourself in under 10 minutes.
        </p>

        {/* Table of Contents */}
        <nav className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Info size={18} className="text-blue-800" /> In This Article</p>
          <ol className="space-y-2">
            {[
              ['section-why-pressure-drops', 'Why Does Boiler Pressure Drop?'],
              ['section-what-youll-need', "What You'll Need"],
              ['section-how-to-repressurise', 'Step-by-Step: How to Repressurise Your Boiler'],
              ['section-safety-notes', 'Safety Notes'],
              ['section-fault-codes', 'Common Boiler Pressure Fault Codes'],
              ['section-when-to-call', 'When to Call a Professional'],
            ].map(([id, title]) => (
              <li key={id}><a href={`#${id}`} className="flex items-center gap-2 text-blue-800 hover:underline text-sm font-medium"><ChevronRight size={14} />{title}</a></li>
            ))}
          </ol>
        </nav>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-blue-800 flex items-center gap-2"><Gauge size={18} /> What pressure should my boiler be at?</p>
          <p className="text-blue-700 text-sm mt-1">
            Cold (boiler off): <strong>1–1.5 bar</strong>. Hot (boiler running): <strong>1.5–2 bar</strong>. Below 0.5 bar: boiler will likely lock out and display a fault code. Above 2.5 bar: the pressure relief valve will open and discharge water — call a professional.
          </p>
        </div>

        <h2 id="section-why-pressure-drops" className="text-2xl font-bold text-gray-900 mb-4">Why Does Boiler Pressure Drop?</h2>
        <ul className="space-y-3 mb-10">
          {[
            { cause: 'Bleeding radiators', detail: 'Releasing air from radiators also releases a small amount of water, which can drop the system pressure. Always check your boiler pressure after bleeding. See our guide on how to bleed a radiator.' },
            { cause: 'Small water leak in the system', detail: 'A dripping radiator valve, a weeping joint, or a small boiler internal leak can cause gradual pressure loss. If you need to repressurise more than once a month, a leak is likely.' },
            { cause: 'Faulty pressure relief valve', detail: 'If the pressure relief valve (PRV) is discharging water frequently, it may be faulty — or your system is regularly over-pressurising. This needs a Gas Safe engineer to investigate.' },
            { cause: 'Expansion vessel failure', detail: 'The expansion vessel absorbs pressure changes as water heats and cools. If it fails, pressure will fluctuate wildly. This requires a professional fix.' },
          ].map((item) => (
            <li key={item.cause} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 text-sm mb-1">{item.cause}</p>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </li>
          ))}
        </ul>

        <PressureGaugeInfographic />

        <h2 id="section-what-youll-need" className="text-2xl font-bold text-gray-900 mb-6">What You'll Need</h2>
        <ul className="grid grid-cols-2 gap-3 mb-10">
          {['Access to the boiler filling loop', 'Your boiler manual (if unsure where the filling loop is)', 'A flat-head screwdriver (some valves need this)', 'Your eyes on the pressure gauge!'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm font-medium text-gray-700">
              <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
              {item}
            </li>
          ))}
        </ul>

        {/* YouTube embed */}
        <div className="mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{paddingBottom: '56.25%'}}>
            <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/PLACEHOLDER_ID" title="How to repressurise a boiler step by step" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><Play size={14} className="text-blue-800" /> Watch a step-by-step walkthrough of repressurising a typical combi boiler</p>
        </div>

        <h2 id="section-how-to-repressurise" className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step: How to Repressurise Your Boiler</h2>
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

        <h2 id="section-safety-notes" className="text-2xl font-bold text-gray-900 mb-4">Safety Notes</h2>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10">
          <p className="font-bold text-amber-800 flex items-center gap-2"><AlertTriangle size={18} /> Safety notes</p>
          <ul className="mt-2 space-y-1 text-amber-700 text-sm">
            <li>• Always switch the boiler off before opening the filling loop</li>
            <li>• Never go above 1.5 bar when filling cold — the pressure rises when the boiler heats up</li>
            <li>• If you cannot find the filling loop, or your boiler has no obvious valves, check the manual or call a professional</li>
            <li>• If the boiler frequently loses pressure (more than once a month), stop topping it up and call a Gas Safe engineer — there is an underlying problem</li>
          </ul>
        </div>

        <h2 id="section-fault-codes" className="text-2xl font-bold text-gray-900 mb-4">Common Boiler Pressure Fault Codes</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left rounded-tl-lg">Brand</th>
                <th className="p-3 text-left">Low Pressure Code</th>
                <th className="p-3 text-left rounded-tr-lg">What it means</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Worcester Bosch', 'E9 / EA338', 'Low water pressure — repressurise to 1–1.5 bar'],
                ['Ideal', 'F1 / L1', 'Low pressure fault — fill to 1.5 bar'],
                ['Vaillant', 'F22', 'Low water pressure — repressurise system'],
                ['Baxi', 'E110', 'Low pressure — repressurise and reset'],
                ['Viessmann', 'EA', 'Insufficient water pressure'],
              ].map(([brand, code, meaning], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-medium border-b border-gray-100">{brand}</td>
                  <td className="p-3 border-b border-gray-100 font-mono text-blue-800 font-bold">{code}</td>
                  <td className="p-3 border-b border-gray-100 text-gray-600">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* External resources */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><ExternalLink size={16} className="text-blue-800" /> Useful Resources</p>
          <ul className="space-y-2">
            <li><a href="https://www.gassaferegister.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Gas Safe Register — find a registered engineer near you</a></li>
            <li><a href="https://www.worcester-bosch.co.uk/support" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Worcester Bosch boiler support & manuals</a></li>
            <li><a href="https://www.idealheating.com/support" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Ideal Heating boiler support & fault code guides</a></li>
          </ul>
        </div>

        <h2 id="section-when-to-call" className="text-2xl font-bold text-gray-900 mb-4">When to Call a Professional</h2>
        <p className="text-gray-700 mb-4">Topping up your boiler pressure is a normal maintenance task. But these situations require a Gas Safe engineer:</p>
        <ul className="space-y-3 mb-10">
          {[
            'Pressure drops repeatedly (more than once a month)',
            'You can see water leaking from the boiler or pipework',
            'The pressure gauge shoots up very quickly after you fill',
            'There is water discharging from the pressure relief valve (a copper pipe outside your property)',
            'You cannot find the filling loop or the boiler manual does not explain the process',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <AlertTriangle className="text-orange-500 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        {/* FAQs */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-12">
          {[
            {
              q: 'How often should I need to repressurise my boiler?',
              a: 'Ideally, never — or only once or twice a year at most. A small pressure drop after bleeding radiators is normal. If you need to top up more than once a month, there is an underlying problem such as a leak or a faulty expansion vessel.',
            },
            {
              q: 'Is it normal to repressurise my boiler once a year?',
              a: 'Yes, repressurising once a year — for example after the annual boiler service when radiators are bled — is perfectly normal. Seasonal pressure changes and minor system adjustments can cause a small drop. Anything more frequent than a few times a year warrants investigation.',
            },
            {
              q: 'What if my boiler won\'t hold pressure even after filling?',
              a: 'If the pressure drops back down within hours or days of topping it up, you almost certainly have a leak somewhere in the system. Common culprits are radiator valves, pipe joints, the pressure relief valve, or internal boiler components. Stop refilling and call a Gas Safe engineer to trace and repair the leak.',
            },
            {
              q: 'Can overfilling cause damage?',
              a: 'Yes. If you fill above 2.5–3 bar, the pressure relief valve will open automatically to protect the system — discharging water outside through a copper pipe. Repeatedly overfilling can wear out the PRV, meaning it starts leaking even at normal pressures. Always aim for 1.2–1.5 bar when cold.',
            },
            {
              q: 'My boiler pressure is fine but the boiler still won\'t fire — what\'s wrong?',
              a: 'Low pressure is just one of many possible fault causes. Other common reasons include a frozen condensate pipe (in winter), an ignition fault, a gas supply issue, or a failed component. Check your boiler\'s fault code and call a Gas Safe engineer if you cannot identify the cause.',
            },
            {
              q: 'Do I need a plumber or a Gas Safe engineer to repressurise my boiler?',
              a: 'Repressurising via the filling loop is a DIY task — no engineer is needed for a simple top-up. However, if you need to investigate the reason for repeated pressure loss, or if there is any gas-side work involved, you must use a registered Gas Safe engineer.',
            },
          ].map((faq, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-gray-900 mb-2 text-sm">{faq.q}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
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
            <Link to="/blog/annual-boiler-service-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Servicing</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Annual Boiler Service: What's Included & Why It Matters</p>
            </Link>
            <Link to="/blog/signs-boiler-needs-replacing" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">7 Warning Signs Your Boiler Needs Replacing</p>
            </Link>
          </div>
        </div>

        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Boiler Pressure Keeps Dropping?</h2>
          <p className="text-blue-200 mb-6">If you're topping up your boiler pressure regularly, there's a leak or fault in the system. Our Gas Safe engineers can diagnose and fix it — covering Worcester and Worcestershire.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">Book a Diagnosis</Link>
            <a href="tel:07480561846" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> 07480 561 846
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
