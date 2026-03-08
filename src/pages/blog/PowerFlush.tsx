import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Phone } from 'lucide-react';

export default function PowerFlush() {
  return (
    <article className="bg-white animate-fadeIn">

      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">← Back to Blog</Link>
          <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Boiler Advice</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            What is a Power Flush? Do You Need One? (Worcester Homeowners' Guide)
          </h1>
          <p className="text-blue-200 text-lg">By Blue Flame Gas Services · March 2026 · 5 min read</p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          If your radiators are cold at the bottom, your boiler is noisy, or your heating takes ages to warm up, the culprit is often sludge — black iron oxide that accumulates in your heating system over time. A power flush cleans it out. Here's everything you need to know.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is a Power Flush?</h2>
        <p className="text-gray-700 mb-4">
          A power flush is a deep clean of your central heating system. A specialist machine pumps high-velocity water and chemical cleanser through your boiler, radiators, and pipework to dislodge and flush out years of built-up magnetite sludge, limescale, and rust.
        </p>
        <p className="text-gray-700 mb-8">
          The process typically takes 4–8 hours and is carried out by a Gas Safe or Corgi-registered engineer. At the end, a fresh inhibitor is added to the system to prevent sludge from reforming, and a magnetic filter (like the Adey MagnaClean) is fitted to catch any remaining particles.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Signs You Need a Power Flush</h2>
        <div className="space-y-3 mb-10">
          {[
            { sign: 'Radiators cold at the bottom, warm at the top', detail: 'This is the classic sludge symptom. Unlike trapped air (which causes cold at the top and is fixed by bleeding), cold at the bottom means sludge is blocking the flow of hot water through the radiator.' },
            { sign: 'Some radiators don\'t heat up at all', detail: 'Heavy sludge deposits can completely block a radiator. If bleeding and checking the valves doesn\'t fix it, sludge is the likely cause.' },
            { sign: 'Boiler noise — banging, kettling, or rumbling', detail: '"Kettling" is a loud rumbling noise caused by limescale or sludge on the boiler\'s heat exchanger. The boiler overheats localised water pockets, creating the noise. A power flush, combined with a descale, resolves this.' },
            { sign: 'System takes a long time to heat up', detail: 'If you turn the heating on and it takes much longer than it used to before rooms warm up, sludge is reducing the efficiency of your whole system.' },
            { sign: 'Boiler keeps cutting out', detail: 'Sludge on the heat exchanger causes the boiler to overheat and trigger its safety cut-out. This can be misdiagnosed as a boiler fault — a power flush should always be considered first.' },
            { sign: 'Discoloured water when bleeding radiators', detail: 'When you bleed a radiator, the water that comes out should be clear or slightly rusty. Black, tar-like water is a clear sign of heavy sludge contamination.' },
          ].map((item) => (
            <div key={item.sign} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                <AlertTriangle className="text-orange-500 flex-shrink-0" size={16} />
                {item.sign}
              </p>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Much Does a Power Flush Cost?</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left rounded-tl-lg">Property size</th>
                <th className="p-3 text-left">Radiators</th>
                <th className="p-3 text-left rounded-tr-lg">Typical cost (Worcester)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1–2 bedroom flat', '4–6', '£300–£400'],
                ['3 bedroom house', '7–10', '£400–£500'],
                ['4 bedroom house', '10–14', '£500–£650'],
                ['5+ bedroom house', '14+', '£650+'],
              ].map(([size, rads, cost], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-medium border-b border-gray-100">{size}</td>
                  <td className="p-3 border-b border-gray-100">{rads}</td>
                  <td className="p-3 border-b border-gray-100 font-bold text-blue-800">{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm italic mb-8">Prices include chemicals, inhibitor dosing, and magnetic filter fitting. VAT applicable. Prices correct for Worcester and Worcestershire, March 2026.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Power Flush vs Chemical Flush: What's the Difference?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
            <h3 className="font-bold text-blue-800 mb-3">Power Flush</h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              {[
                'Uses a machine to force water through at high velocity',
                'Physically dislodges and removes sludge',
                'Best for heavily contaminated systems',
                'Takes 4–8 hours',
                'More thorough, longer-lasting results',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> {p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">Chemical Flush</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                'Cleanser added to system and circulated by the existing pump',
                'Gentler — won\'t dislodge heavy sludge deposits',
                'Better for lightly contaminated or newer systems',
                'Can be done during a boiler service',
                'Cheaper, but less effective for serious sludge',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" /> {p}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Do I Need a Power Flush Before a New Boiler?</h2>
        <p className="text-gray-700 mb-4">
          Most boiler manufacturers — including Worcester Bosch and Ideal — recommend or require a system flush before installation of a new boiler. Here's why:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            'Sludge from the old system will immediately contaminate the new boiler',
            'A blocked heat exchanger on a brand-new boiler can void the warranty',
            'The new boiler will be less efficient from day one if the system isn\'t clean',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mb-8">
          During our{' '}
          <Link to="/blog/boiler-cost-worcester" className="text-blue-800 font-semibold hover:underline">boiler installation process</Link>,
          we assess the system condition. If sludge is present, we'll carry out a full flush before fitting the new boiler — and fit an Adey MagnaClean magnetic filter to keep the system clean going forward.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Can a Power Flush Damage Old Radiators?</h2>
        <p className="text-gray-700 mb-4">
          This is a legitimate concern. In very old systems with heavily corroded radiators or pipework, the high-pressure flushing action can cause small leaks to open up at joints or on radiator surfaces that were previously sealed by sludge deposits.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-amber-800 mb-1">Our honest advice</p>
          <p className="text-amber-700 text-sm">We will always inspect your system before quoting for a power flush and advise if the risk of disturbing old joints is high. In some cases — particularly with very old microbore pipework — a chemical flush and radiator replacement is a safer approach than a full power flush.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Happens After a Power Flush?</h2>
        <ul className="space-y-3 mb-10">
          {[
            { item: 'Inhibitor dosed', detail: 'A corrosion inhibitor is added to the system to slow the re-formation of magnetite sludge. This should be topped up during each annual boiler service.' },
            { item: 'Magnetic filter fitted', detail: 'An Adey MagnaClean or similar magnetic filter is installed on the return pipe. It captures iron particles before they can accumulate in the boiler.' },
            { item: 'System tested', detail: 'All radiators are balanced and the boiler is run through a full heating cycle to confirm even heat distribution and correct pressure.' },
          ].map((item) => (
            <li key={item.item} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              <div>
                <span className="font-bold">{item.item}: </span>
                {item.detail}
              </div>
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
            <Link to="/blog/boiler-cost-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Installation</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How Much Does a New Boiler Cost in Worcester? (2026)</p>
            </Link>
            <Link to="/blog/signs-boiler-needs-replacing" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">7 Warning Signs Your Boiler Needs Replacing</p>
            </Link>
          </div>
        </div>

        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Think You Need a Power Flush?</h2>
          <p className="text-blue-200 mb-6">We assess your system, advise honestly, and carry out power flushes across Worcester and Worcestershire. No hard sell — just an honest diagnosis.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">Get a Quote</Link>
            <a href="tel:07480561846" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> 07480 561 846
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
