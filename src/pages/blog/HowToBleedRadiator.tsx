import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Phone } from 'lucide-react';

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

export default function HowToBleedRadiator() {
  return (
    <article className="bg-white animate-fadeIn">

      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">← Back to Blog</Link>
          <span className="inline-block bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">DIY Heating Tips</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            How to Bleed a Radiator: Step-by-Step Guide (No Plumber Needed)
          </h1>
          <p className="text-blue-200 text-lg">By Blue Flame Gas Services · March 2026 · 4 min read</p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">

        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          If your radiators are warm at the bottom but cold at the top, the fix is simple: bleed them. It takes 5 minutes per radiator, costs nothing (just a £1.50 bleed key), and can make a noticeable difference to your heating efficiency.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-blue-800">Why do radiators get airlocks?</p>
          <p className="text-blue-700 text-sm mt-1">Small amounts of air enter your heating system over time — through normal pump operation, small leaks, or when adding water. The air rises to the top of radiators and prevents hot water from filling the full height, creating cold spots.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Need</h2>
        <ul className="grid grid-cols-2 gap-3 mb-10">
          {['Radiator bleed key (~£1.50 from any DIY shop)', 'Old cloth or towel', 'Small bowl or cup', 'Dry hands'].map(item => (
            <li key={item} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm font-medium text-gray-700">
              <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Instructions</h2>
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
            <li>• Always turn the heating off and wait before bleeding — pressurised hot water causes serious scalds</li>
            <li>• Never fully remove the bleed valve — a quarter to half turn is all you need</li>
            <li>• If water sprays out forcefully, close the valve and call a plumber — your system pressure may be too high</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">When Bleeding Doesn't Fix It</h2>
        <p className="text-gray-700 mb-4">
          If you bleed the radiator and the cold spot returns within a few weeks, you likely have a more persistent problem. Persistent heating issues can also be an early sign that your boiler needs attention — see our guide on <Link to="/blog/signs-boiler-needs-replacing" className="text-blue-800 font-semibold hover:underline">7 warning signs your boiler needs replacing</Link>.
        </p>
        <ul className="space-y-3 mb-10">
          {[
            { issue: 'Persistent air ingress', fix: 'Could indicate a small leak in the system drawing in air. A Gas Safe engineer can identify and seal the source.' },
            { issue: 'Cold bottom, warm top', fix: 'This is the opposite of an airlock — it\'s usually sludge (black iron oxide) blocking the bottom of the radiator. A power flush is the solution.' },
            { issue: 'Radiator cold all over', fix: 'Check the lockshield and thermostatic valves at each end are both open. If they are and it\'s still cold, the valve may be stuck or faulty.' },
            { issue: 'Radiators bleed fine but heating still poor', fix: 'Your boiler pump may be failing, or the system may need a full power flush to remove sludge from the pipes.' },
          ].map((item) => (
            <li key={item.issue} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 text-sm mb-1">{item.issue}</p>
              <p className="text-gray-600 text-sm">{item.fix}</p>
            </li>
          ))}
        </ul>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-10 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/blog/signs-boiler-needs-replacing" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">7 Warning Signs Your Boiler Needs Replacing</p>
            </Link>
            <Link to="/blog/carbon-monoxide-safety" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wide">Gas Safety</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Carbon Monoxide: The Silent Killer Every Homeowner Must Know About</p>
            </Link>
            <Link to="/blog/boiler-cost-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Installation</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How Much Does a New Boiler Cost in Worcester? (2026)</p>
            </Link>
          </div>
        </div>

        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Still Having Heating Problems?</h2>
          <p className="text-blue-200 mb-6">If bleeding your radiators doesn't solve the issue, our Gas Safe engineers can diagnose and fix it. We cover Worcester and Worcestershire.</p>
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
