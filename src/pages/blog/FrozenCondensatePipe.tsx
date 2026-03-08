import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Phone } from 'lucide-react';

export default function FrozenCondensatePipe() {
  return (
    <article className="bg-white animate-fadeIn">

      {/* HERO */}
      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
          <span className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Emergency Advice</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Frozen Condensate Pipe: How to Thaw It and Get Your Boiler Working Again
          </h1>
          <p className="text-blue-200 text-lg">
            By Blue Flame Gas Services &middot; March 2026 &middot; 5 min read
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14 prose prose-lg">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Your boiler has stopped working on the coldest day of the year. Before you panic, check for the UK's most common winter boiler breakdown: a <strong>frozen condensate pipe</strong>. Here's how to identify it, thaw it yourself, and prevent it happening again.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is a Condensate Pipe?</h2>
        <p className="text-gray-700 mb-4">
          All modern condensing boilers produce a small amount of acidic water (condensate) as a byproduct of the combustion process. This condensate drains away through a narrow plastic pipe — usually <strong>21.5mm white or grey overflow pipe</strong> — that runs from the boiler to an outside drain, soil pipe, or internal waste pipe.
        </p>
        <p className="text-gray-700 mb-6">
          When the temperature drops below freezing, the condensate inside this pipe can freeze solid, creating a blockage. The boiler detects it can't drain and shuts down with an error code.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Tell If Your Condensate Pipe Is Frozen</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Your boiler has stopped working or locked out during freezing weather',
            'You can see a white or grey plastic pipe running outside the house from the boiler location',
            'There\'s ice visible on or around the external pipe',
            'Your boiler is displaying a fault code (common codes: EA, E1, E5, or a flame/ignition error)',
            'You can hear a gurgling sound coming from the boiler before it shuts off',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Thaw a Frozen Condensate Pipe: Step by Step</h2>

        <div className="space-y-6 mb-10">
          {[
            { step: 1, title: 'Locate the frozen section', desc: 'Follow the condensate pipe from where it exits the building. The blockage is usually at the most exposed point — where the pipe exits the wall, at bends or dips, or where it enters the drain.' },
            { step: 2, title: 'Boil a kettle and let it cool slightly', desc: 'You want hot (not boiling) water — around 60–70°C is ideal. Boiling water can crack the plastic pipe due to thermal shock.' },
            { step: 3, title: 'Pour warm water slowly over the frozen section', desc: 'Hold the kettle spout directly over the pipe and pour slowly, working from the end nearest the drain upwards. You may need several kettles of water.' },
            { step: 4, title: 'Use a hot water bottle or heat pack', desc: 'For sections you can\'t easily pour water onto, wrap a hot water bottle or microwaveable heat pack around the pipe and leave it for 10–15 minutes.' },
            { step: 5, title: 'Reset the boiler', desc: 'Once you hear the ice clear (a gurgle or flow of water at the drain end), go back inside and press the reset button on your boiler. It should fire up within 30–60 seconds.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {step}
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-bold text-red-800 mb-1">Safety Warning</p>
              <p className="text-red-700"><strong>Never</strong> use a blowtorch, open flame, or heat gun on the condensate pipe. The pipe is plastic and will melt. Never pour boiling water directly from the kettle — let it cool for 2–3 minutes first to avoid cracking the pipe.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Prevent a Frozen Condensate Pipe</h2>
        <ul className="space-y-3 mb-8">
          {[
            { title: 'Insulate the pipe', desc: 'Wrap the external section with pipe lagging (foam insulation). This is the single most effective prevention — costs under £5 from any DIY shop.' },
            { title: 'Increase the pipe diameter', desc: 'If the pipe is 21.5mm, an engineer can upgrade the external section to 32mm, which is far less likely to freeze.' },
            { title: 'Reroute internally', desc: 'The best long-term solution is to reroute the condensate pipe so it drains internally into a soil pipe or kitchen waste pipe, avoiding external exposure entirely.' },
            { title: 'Set heating to a low temperature overnight', desc: 'Keeping your heating on a low setting (e.g., 15°C) during very cold nights keeps warm water flowing through the boiler and prevents the condensate from freezing.' },
            { title: 'Use a condensate pipe heater', desc: 'A trace heating cable wrapped around the pipe keeps it warm electrically. Costs £20–£40 and plugs into a standard socket.' },
          ].map((item, i) => (
            <li key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 mb-1">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </li>
          ))}
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl mb-10">
          <p className="font-bold text-blue-800 text-lg mb-1">Blue Flame Tip</p>
          <p className="text-blue-700">We insulate and check the condensate pipe as part of every <Link to="/blog/annual-boiler-service-worcester" className="text-blue-800 font-semibold underline">annual boiler service</Link>. If your pipe is in an exposed location, we can advise on the best long-term solution during your next service visit.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: 'Can a frozen condensate pipe damage my boiler?', a: 'No — the boiler shuts down safely to protect itself. Once the pipe is thawed and the boiler is reset, it will work normally. However, if it freezes repeatedly, the repeated lockouts can strain ignition components over time.' },
            { q: 'Why does my condensate pipe keep freezing every winter?', a: 'Usually because the external section is too long, too exposed, or not insulated. A short-term fix is lagging the pipe; a permanent fix is rerouting it internally or upgrading to a larger diameter.' },
            { q: 'My boiler is still not working after thawing the pipe — what now?', a: 'Make sure you\'ve pressed the reset button on the boiler. If it still won\'t fire, there may be a secondary fault — possibly caused by the lockout. Call us on 07480 561 846 and we can usually attend the same day.' },
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
            <Link to="/blog/boiler-losing-pressure" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Troubleshooting</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Why Does My Boiler Keep Losing Pressure?</p>
            </Link>
            <Link to="/blog/how-to-repressurise-a-boiler" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">DIY Heating Tips</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How to Repressurise a Boiler</p>
            </Link>
            <Link to="/blog/annual-boiler-service-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Boiler Servicing</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Annual Boiler Service: What's Included?</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Boiler Broken Down in the Cold?</h2>
          <p className="text-blue-200 mb-6">We offer same-day emergency callouts across Worcester and Worcestershire — including evenings and weekends.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07480561846" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> Emergency: 07480 561 846
            </a>
            <Link to="/contact" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors">
              Book Online
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
