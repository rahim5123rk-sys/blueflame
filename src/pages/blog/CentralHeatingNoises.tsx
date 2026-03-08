import { Link } from 'react-router-dom';
import { AlertTriangle, Phone } from 'lucide-react';

export default function CentralHeatingNoises() {
  return (
    <article className="bg-white animate-fadeIn">

      {/* HERO */}
      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
          <span className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Boiler Troubleshooting</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Noisy Boiler or Radiators? What Those Sounds Mean
          </h1>
          <p className="text-blue-200 text-lg">
            By Blue Flame Gas Services &middot; March 2026 &middot; 6 min read
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14 prose prose-lg">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Banging pipes, a gurgling boiler, or a radiator that sounds like a kettle — central heating noises are common and usually point to a specific, fixable problem. Here's what each noise means and what to do about it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Heating Noises: Quick Reference</h2>
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

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Banging or Knocking Pipes</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">What it sounds like</h3>
        <p className="text-gray-700 mb-4">
          A loud bang, clunk, or tapping noise — often when the heating first comes on or turns off. Sometimes rhythmic, sometimes random.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Causes</h3>
        <ul className="space-y-2 mb-4 text-gray-700">
          <li><strong>Thermal expansion:</strong> Copper pipes expand when they heat up and contract when they cool. If a pipe is running through a tight notch in a joist or is clipped too tightly, it will bang as it moves.</li>
          <li><strong>Water hammer:</strong> A sharp bang when a valve closes suddenly (e.g., from a washing machine or dishwasher valve). Not usually a heating issue but can affect shared pipework.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Fix</h3>
        <p className="text-gray-700 mb-6">
          Thermal expansion is generally harmless but annoying. A plumber can add pipe clips with rubber inserts or slightly widen the notches in joists to allow movement. If the noise is new, it's worth investigating in case a pipe support has worked loose.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Gurgling Radiators</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">What it sounds like</h3>
        <p className="text-gray-700 mb-4">
          A bubbling or trickling water sound from inside one or more radiators — similar to a fish tank.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Cause</h3>
        <p className="text-gray-700 mb-4">
          Trapped air inside the radiator. Air gets into the system through small leaks, dissolved gases in the water, or after the system has been drained for maintenance.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Fix</h3>
        <p className="text-gray-700 mb-6">
          <Link to="/blog/how-to-bleed-a-radiator" className="text-blue-800 font-semibold hover:underline">Bleed the radiator</Link> — this is a 5-minute DIY job. If the problem keeps recurring, the system may have a small leak that's allowing air in, which needs professional investigation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Kettling (Boiler Sounds Like a Kettle)</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">What it sounds like</h3>
        <p className="text-gray-700 mb-4">
          A rumbling, popping, or whistling noise from inside the boiler — like a kettle coming to the boil. It may get louder over time.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Causes</h3>
        <ul className="space-y-2 mb-4 text-gray-700">
          <li><strong>Limescale:</strong> In hard water areas (like parts of Worcestershire), limescale builds up on the heat exchanger, restricting water flow and causing localised boiling.</li>
          <li><strong>Sludge:</strong> Iron oxide deposits can also restrict flow through the heat exchanger, causing the same overheating effect.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Fix</h3>
        <p className="text-gray-700 mb-6">
          A <Link to="/blog/what-is-a-power-flush" className="text-blue-800 font-semibold hover:underline">power flush</Link> can clear sludge. If limescale is the cause, a chemical descale of the heat exchanger is needed. In severe cases, the heat exchanger may need replacing. An Adey MagnaClean filter (or similar) should be fitted to prevent future build-up.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Humming or Vibrating Boiler</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Causes</h3>
        <ul className="space-y-2 mb-4 text-gray-700">
          <li><strong>Pump speed too high:</strong> The central heating pump circulates water around the system. If it's set too fast for the system's needs, it can cause vibration and humming.</li>
          <li><strong>Failing pump:</strong> A pump with worn bearings or a seized impeller will hum, buzz, or vibrate loudly.</li>
          <li><strong>Loose component:</strong> Sometimes a panel, bracket, or pipe inside the boiler casing has vibrated loose.</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Fix</h3>
        <p className="text-gray-700 mb-6">
          An engineer can adjust the pump speed, tighten loose components, or replace the pump if it's failing. Pump replacement typically costs <strong>£150–£300</strong> including parts and labour.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Repeated Clicking (Ignition Failure)</h2>
        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">What it sounds like</h3>
        <p className="text-gray-700 mb-4">
          A rapid clicking or ticking followed by the boiler shutting down. You may see the boiler attempt to ignite several times before locking out with an error code.
        </p>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-bold text-red-800 mb-1">Call an Engineer</p>
              <p className="text-red-700">Ignition problems should <strong>always</strong> be investigated by a Gas Safe engineer. Do not repeatedly try to reset a boiler that fails to ignite — it could indicate a gas supply issue, faulty gas valve, or blocked flue.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">When Is a Noisy Boiler Dangerous?</h2>
        <p className="text-gray-700 mb-4">
          Most heating noises are annoying rather than dangerous. However, you should <strong>call an engineer immediately</strong> if:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            'You can smell gas — call the National Gas Emergency line on 0800 111 999',
            'The boiler is repeatedly failing to ignite (clicking without lighting)',
            'You notice water dripping from the boiler or a burning smell',
            'The boiler is making loud banging noises from inside the casing',
            'Your carbon monoxide detector has sounded',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: 'Is it normal for a boiler to make some noise?', a: 'Yes — a quiet hum or the sound of the burner igniting is perfectly normal. You should only be concerned if the noise is new, getting louder, or accompanied by error codes or a drop in performance.' },
            { q: 'Why do my radiators make noise at night?', a: 'If your heating switches off at night, the pipes and radiators cool and contract, which can cause ticking or creaking noises. This is thermal contraction and is completely harmless.' },
            { q: 'Can a noisy boiler increase my gas bills?', a: 'Yes — kettling and sludge build-up reduce efficiency, meaning your boiler burns more gas to produce the same amount of heat. A power flush can restore efficiency by 10–15% in severe cases.' },
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
              <p className="font-bold text-gray-900 mt-1 text-sm">Carbon Monoxide: The Silent Killer</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Concerned About a Noisy Boiler?</h2>
          <p className="text-blue-200 mb-6">Our Gas Safe engineers can diagnose and fix the problem. We cover Worcester and all of Worcestershire.</p>
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
