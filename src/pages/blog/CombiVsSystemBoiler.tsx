import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Phone } from 'lucide-react';

export default function CombiVsSystemBoiler() {
  return (
    <article className="bg-white animate-fadeIn">

      {/* HERO */}
      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
          <span className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Boiler Advice</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Combi Boiler vs System Boiler: Which Is Right for Your Home?
          </h1>
          <p className="text-blue-200 text-lg">
            By Blue Flame Gas Services &middot; March 2026 &middot; 7 min read
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14 prose prose-lg">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Choosing between a <strong>combi boiler</strong> and a <strong>system boiler</strong> is one of the biggest decisions you'll make when replacing your heating system. The right choice depends on your home's size, hot water demands, and available space. Here's a straightforward comparison to help you decide.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is a Combi Boiler?</h2>
        <p className="text-gray-700 mb-4">
          A combination (combi) boiler provides both central heating and instant hot water from one compact unit. There's no separate hot water cylinder or cold water storage tank — water is heated directly from the mains when you turn on a tap.
        </p>
        <p className="text-gray-700 mb-6">
          Combi boilers are the most popular choice in UK homes, installed in around <strong>70% of new boiler replacements</strong>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is a System Boiler?</h2>
        <p className="text-gray-700 mb-4">
          A system boiler works with a separate hot water cylinder (usually in an airing cupboard) to store pre-heated water. The boiler heats water and sends it to the cylinder, which then supplies your taps and showers.
        </p>
        <p className="text-gray-700 mb-6">
          System boilers are ideal for homes with <strong>higher hot water demand</strong> — typically properties with two or more bathrooms.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Head-to-Head Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left rounded-tl-lg">Feature</th>
                <th className="p-3 text-left">Combi Boiler</th>
                <th className="p-3 text-left rounded-tr-lg">System Boiler</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Best for', '1–3 bed homes', '3–5 bed homes'],
                ['Hot water supply', 'Instant, on demand', 'Stored in cylinder'],
                ['Multiple taps at once', 'Flow rate drops', 'Strong flow maintained'],
                ['Space needed', 'Minimal (no cylinder)', 'Needs airing cupboard'],
                ['Installation cost', '£1,400–£3,200', '£1,600–£3,500+'],
                ['Energy efficiency', '92–94% ErP A-rated', '90–93% ErP A-rated'],
                ['Water pressure', 'Depends on mains', 'Consistent from cylinder'],
              ].map(([feature, combi, system], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-medium border-b border-gray-100">{feature}</td>
                  <td className="p-3 border-b border-gray-100">{combi}</td>
                  <td className="p-3 border-b border-gray-100">{system}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Advantages of a Combi Boiler</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Compact — no hot water cylinder or tank needed',
            'Instant hot water on demand — no waiting for a cylinder to heat up',
            'Cheaper to install — fewer components',
            'Lower energy bills — only heats water when you need it',
            'Easy to maintain and service',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Disadvantages of a Combi Boiler</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Hot water flow reduces when multiple taps are open simultaneously',
            'Not ideal for homes with more than two bathrooms',
            'Performance depends on mains water pressure',
            'Cannot work with some power showers (which need a pump)',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <XCircle className="text-red-500 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Advantages of a System Boiler</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Can supply multiple bathrooms at once with strong flow',
            'Compatible with power showers and high-flow shower heads',
            'Consistent hot water pressure regardless of mains supply',
            'Better for larger families with higher water usage',
            'Can work with solar thermal panels for renewable heating',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Disadvantages of a System Boiler</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Requires space for a hot water cylinder (airing cupboard)',
            'Higher installation cost due to extra components',
            'Hot water can run out — you may need to wait for the cylinder to reheat',
            'Cylinder loses heat over time (standing heat loss), increasing energy use',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <XCircle className="text-red-500 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl mb-10">
          <p className="font-bold text-blue-800 text-lg mb-1">Blue Flame's Recommendation</p>
          <p className="text-blue-700">For most 2–4 bedroom homes in Worcester with one or two bathrooms, a <strong>combi boiler</strong> is usually the best choice. For larger properties with three or more bathrooms, or families who need hot water from multiple outlets simultaneously, a <strong>system boiler</strong> is worth the extra investment.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Can I Switch from a System Boiler to a Combi?</h2>
        <p className="text-gray-700 mb-4">
          Yes — this is one of the most common conversion jobs we carry out. Switching from a system boiler (or an old conventional boiler with tanks in the loft) to a combi frees up cupboard space and simplifies your heating system.
        </p>
        <p className="text-gray-700 mb-4">
          The conversion typically involves removing the hot water cylinder and loft tanks, capping pipework, and installing the new combi. Budget an additional <strong>£300–£600</strong> on top of the standard installation cost for the conversion work.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Size Boiler Do I Need?</h2>
        <p className="text-gray-700 mb-4">
          Boiler output is measured in kilowatts (kW). Here's a rough guide:
        </p>
        <ul className="space-y-2 mb-8 text-gray-700">
          <li><strong>1–2 bed flat or house:</strong> 24–27kW combi</li>
          <li><strong>3–4 bed semi or detached:</strong> 28–34kW combi or 12–18kW system</li>
          <li><strong>4–5 bed with 3+ bathrooms:</strong> 35–40kW combi or 18–25kW system</li>
        </ul>
        <p className="text-gray-700 mb-8">
          Our engineers will carry out a full heat-loss calculation during the survey to recommend the correct size — oversizing wastes money and undersizing means poor performance.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: 'Is a combi boiler cheaper to run than a system boiler?', a: 'Generally yes. A combi only heats water when you need it, avoiding the standing heat losses from a hot water cylinder. Typical savings are £50–£100 per year on gas bills compared to a system boiler of similar efficiency.' },
            { q: 'Can a combi boiler fill a bath quickly enough?', a: 'Yes — a modern 28kW+ combi boiler can fill a standard bath in 8–12 minutes. However, if you have a very large bath or want to run a bath while using another tap, a system boiler may be better.' },
            { q: 'How long do combi and system boilers last?', a: 'Both types typically last 12–15 years with annual servicing. The cylinder on a system boiler may last 20+ years as it has no moving parts.' },
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
            <Link to="/blog/boiler-cost-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Installation</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How Much Does a New Boiler Cost in Worcester?</p>
            </Link>
            <Link to="/blog/worcester-bosch-vs-ideal-boilers" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Comparison</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Worcester Bosch vs Ideal: Which Is Best?</p>
            </Link>
            <Link to="/blog/signs-boiler-needs-replacing" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">7 Warning Signs Your Boiler Needs Replacing</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Not Sure Which Boiler Type You Need?</h2>
          <p className="text-blue-200 mb-6">Our Gas Safe engineers will survey your property and recommend the best boiler for your home — free of charge.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">
              Book a Free Survey
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
