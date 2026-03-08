import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Phone, Gauge } from 'lucide-react';

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

        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-blue-800 flex items-center gap-2"><Gauge size={18} /> What pressure should my boiler be at?</p>
          <p className="text-blue-700 text-sm mt-1">
            Cold (boiler off): <strong>1–1.5 bar</strong>. Hot (boiler running): <strong>1.5–2 bar</strong>. Below 0.5 bar: boiler will likely lock out and display a fault code. Above 2.5 bar: the pressure relief valve will open and discharge water — call a professional.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Does Boiler Pressure Drop?</h2>
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

        <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Need</h2>
        <ul className="grid grid-cols-2 gap-3 mb-10">
          {['Access to the boiler filling loop', 'Your boiler manual (if unsure where the filling loop is)', 'A flat-head screwdriver (some valves need this)', 'Your eyes on the pressure gauge!'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm font-medium text-gray-700">
              <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step: How to Repressurise Your Boiler</h2>
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

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10">
          <p className="font-bold text-amber-800 flex items-center gap-2"><AlertTriangle size={18} /> Safety notes</p>
          <ul className="mt-2 space-y-1 text-amber-700 text-sm">
            <li>• Always switch the boiler off before opening the filling loop</li>
            <li>• Never go above 1.5 bar when filling cold — the pressure rises when the boiler heats up</li>
            <li>• If you cannot find the filling loop, or your boiler has no obvious valves, check the manual or call a professional</li>
            <li>• If the boiler frequently loses pressure (more than once a month), stop topping it up and call a Gas Safe engineer — there is an underlying problem</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Boiler Pressure Fault Codes</h2>
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

        <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Call a Professional</h2>
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
