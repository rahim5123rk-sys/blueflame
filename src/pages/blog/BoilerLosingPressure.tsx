import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Phone } from 'lucide-react';

export default function BoilerLosingPressure() {
  return (
    <article className="bg-white animate-fadeIn">

      {/* HERO */}
      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
          <span className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Boiler Troubleshooting</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Why Does My Boiler Keep Losing Pressure? Causes & Fixes
          </h1>
          <p className="text-blue-200 text-lg">
            By Blue Flame Gas Services &middot; March 2026 &middot; 6 min read
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14 prose prose-lg">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          A boiler that keeps losing pressure is one of the most common heating problems in UK homes. If your pressure gauge keeps dropping below 1 bar, your heating may cut out and your hot water may stop working. Here's what causes it and what you can do about it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is Boiler Pressure?</h2>
        <p className="text-gray-700 mb-4">
          Boiler pressure refers to the pressure of the hot water circulating through your central heating system. It's shown on the <strong>pressure gauge</strong> on the front of your boiler — usually a small dial or digital display.
        </p>
        <ul className="space-y-2 mb-6 text-gray-700">
          <li><strong>Normal pressure:</strong> 1.0–1.5 bar (when the heating is off)</li>
          <li><strong>When heating is on:</strong> May rise to 1.5–2.0 bar (this is normal)</li>
          <li><strong>Too low:</strong> Below 1 bar — boiler may lock out</li>
          <li><strong>Too high:</strong> Above 2.5 bar — pressure relief valve may discharge</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6 Common Causes of Boiler Pressure Loss</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">1. A leak in the heating system</h3>
        <p className="text-gray-700 mb-4">
          This is the most common cause. Even a tiny drip from a radiator valve, pipe joint, or the boiler itself will cause the pressure to drop gradually. Check underneath radiators, around pipe connections, and beneath the boiler for damp patches or staining.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">2. A faulty pressure relief valve (PRV)</h3>
        <p className="text-gray-700 mb-4">
          The pressure relief valve is a safety device that releases water if the pressure gets too high. If it's faulty or stuck partially open, it will constantly drip — usually through a small copper pipe that exits through your external wall. Check outside for a pipe dripping water.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">3. A failed expansion vessel</h3>
        <p className="text-gray-700 mb-4">
          The expansion vessel absorbs the pressure increase when water heats up and expands. If its internal diaphragm has failed or it needs re-pressurising, the system pressure will fluctuate — rising too high when hot and dropping too low when cold.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">4. Radiators have been bled recently</h3>
        <p className="text-gray-700 mb-4">
          When you <Link to="/blog/how-to-bleed-a-radiator" className="text-blue-800 font-semibold hover:underline">bleed a radiator</Link>, you release trapped air — but also a small amount of water. This causes a slight pressure drop. Simply <Link to="/blog/how-to-repressurise-a-boiler" className="text-blue-800 font-semibold hover:underline">repressurise the boiler</Link> afterwards.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">5. A faulty automatic air vent (AAV)</h3>
        <p className="text-gray-700 mb-4">
          Most modern boilers have an automatic air vent inside that releases air build-up. If this component develops a fault, it can leak water slowly, causing gradual pressure loss that's hard to spot as the water evaporates.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">6. Corrosion or pinhole leaks in pipework</h3>
        <p className="text-gray-700 mb-4">
          In older heating systems, internal corrosion can cause tiny pinhole leaks in copper pipes — often hidden under floorboards or behind walls. These are difficult to find without a professional leak detection survey.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-bold text-amber-800 mb-1">When to Call an Engineer</p>
              <p className="text-amber-700">If your boiler loses pressure <strong>more than once a month</strong> after repressurising, there's an underlying issue that needs professional diagnosis. Repeatedly topping up the pressure without fixing the cause can damage the boiler and introduce oxygen into the system, accelerating corrosion.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Can I Fix Myself?</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Repressurise the boiler via the filling loop (see our step-by-step guide)',
            'Check visible pipes and radiator valves for obvious leaks',
            'Check outside for a dripping overflow/PRV pipe',
            'Check the pressure after bleeding radiators and top up if needed',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Needs an Engineer?</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Replacing a faulty pressure relief valve',
            'Re-charging or replacing the expansion vessel',
            'Leak detection for hidden pipe leaks',
            'Replacing a faulty automatic air vent',
            'Any work involving the gas supply or flue',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <AlertTriangle className="text-amber-500 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Much Does It Cost to Fix?</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left rounded-tl-lg">Repair</th>
                <th className="p-3 text-left rounded-tr-lg">Typical Cost (Worcester)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Repressurise boiler (DIY)', 'Free'],
                ['Replace pressure relief valve', '£80–£150'],
                ['Re-charge expansion vessel', '£80–£120'],
                ['Replace expansion vessel', '£150–£300'],
                ['Leak repair (accessible pipe)', '£80–£180'],
                ['Leak detection survey', '£100–£250'],
              ].map(([repair, cost], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-medium border-b border-gray-100">{repair}</td>
                  <td className="p-3 border-b border-gray-100 font-bold text-blue-800">{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: 'Is low boiler pressure dangerous?', a: 'No — low pressure isn\'t a safety risk. Your boiler will simply stop working (lock out) to protect itself. However, the cause of the pressure loss (e.g., a leak) should be investigated to prevent further damage.' },
            { q: 'Can I keep topping up the pressure?', a: 'As a temporary measure, yes. But regularly topping up means there\'s a leak or fault that needs fixing. Fresh mains water introduces oxygen that accelerates internal corrosion, potentially shortening the life of your system.' },
            { q: 'My pressure is fine when heating is off but too high when it\'s on — why?', a: 'This usually indicates a failed expansion vessel. The vessel can no longer absorb the pressure increase from heated water, so the pressure climbs too high. An engineer can test and re-charge or replace the vessel.' },
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
            <Link to="/blog/how-to-repressurise-a-boiler" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">DIY Heating Tips</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How to Repressurise a Boiler: Step-by-Step</p>
            </Link>
            <Link to="/blog/how-to-bleed-a-radiator" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-green-600 uppercase tracking-wide">DIY Heating Tips</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How to Bleed a Radiator: Step-by-Step Guide</p>
            </Link>
            <Link to="/blog/annual-boiler-service-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Servicing</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Annual Boiler Service: What's Included?</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Boiler Keeps Losing Pressure?</h2>
          <p className="text-blue-200 mb-6">Our Gas Safe engineers can diagnose and fix the problem — usually in a single visit. Serving Worcester and Worcestershire.</p>
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
