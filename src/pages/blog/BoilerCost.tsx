import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';

export default function BoilerCost() {
  return (
    <article className="bg-white animate-fadeIn">

      {/* HERO */}
      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">← Back to Blog</Link>
          <span className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Boiler Installation</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            How Much Does a New Boiler Cost in Worcester? (2026 Price Guide)
          </h1>
          <p className="text-blue-200 text-lg">
            By Blue Flame Gas Services · March 2026 · 6 min read
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14 prose prose-lg">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          If your boiler has broken down or you're planning ahead, one of the first questions you'll ask is: <strong>how much does a new boiler cost?</strong> Here's a complete, honest breakdown of 2026 prices for Worcester and Worcestershire homeowners.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Average New Boiler Costs in Worcester (2026)</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left rounded-tl-lg">Boiler Type</th>
                <th className="p-3 text-left">Supply Only</th>
                <th className="p-3 text-left rounded-tr-lg">Supply & Fit (Worcester)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Combi Boiler (entry)', '£500–£900', '£1,400–£1,800'],
                ['Combi Boiler (mid-range)', '£900–£1,300', '£1,800–£2,400'],
                ['Combi Boiler (premium)', '£1,300–£2,000', '£2,400–£3,200'],
                ['System Boiler', '£700–£1,500', '£1,600–£2,600'],
                ['Heat-only Boiler', '£600–£1,400', '£1,400–£2,400'],
              ].map(([type, supply, fit], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-medium border-b border-gray-100">{type}</td>
                  <td className="p-3 border-b border-gray-100">{supply}</td>
                  <td className="p-3 border-b border-gray-100 font-bold text-blue-800">{fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm italic mb-8">Prices include VAT at 5% (domestic heating installations). Labour typically £300–£700 depending on complexity.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What's Included in Blue Flame's Installation Price?</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Supply and installation of the new boiler',
            'ESI programmable room thermostat',
            'Adey MagnaClean filter to protect your new boiler',
            'Full system flush and inhibitor dosing',
            'Removal and disposal of your old boiler',
            <><Link to="/gas-safety-guide" className="text-blue-800 font-semibold hover:underline">Gas Safe certificate</Link> issued on completion</>,
            'Manufacturer warranty registration',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl mb-10">
          <p className="font-bold text-blue-800 text-lg mb-1">Blue Flame Deal: Worcester Bosch 1000 from £1,650</p>
          <p className="text-blue-700">Supply and fit including thermostat, Adey filter, full installation, and Gas Safe certificate. Standard horizontal flue swap.</p>
          <Link to="/services" className="inline-flex items-center gap-2 mt-3 text-blue-800 font-bold hover:underline">
            Get a free quote <ArrowRight size={16} />
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Affects the Cost of a New Boiler?</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">1. Boiler brand and model</h3>
        <p className="text-gray-700 mb-4">
          Worcester Bosch and Viessmann sit at the premium end with longer warranties (up to 12 years). Ideal and Baxi offer solid mid-range reliability. Budget brands like Vaillant ecotec and Alpha cost less upfront but may have higher long-term servicing costs. See our full{' '}
          <Link to="/blog/worcester-bosch-vs-ideal-boilers" className="text-blue-800 font-semibold hover:underline">Worcester Bosch vs Ideal comparison</Link>{' '}
          if you're weighing up which brand to choose.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">2. Boiler type</h3>
        <p className="text-gray-700 mb-4">
          <strong>Combi boilers</strong> are the most popular in Worcester homes — they heat water on demand with no need for a hot water tank. <strong>System boilers</strong> suit larger homes with multiple bathrooms. <strong>Heat-only (conventional) boilers</strong> are typically replacements in older homes with existing hot water cylinders.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">3. Flue route complexity</h3>
        <p className="text-gray-700 mb-4">
          A standard horizontal flue through an external wall is the simplest and cheapest option. Vertical flues, longer flue runs, or repositioning the boiler to a different location will add £100–£400 to the cost.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">4. System condition</h3>
        <p className="text-gray-700 mb-4">
          If your radiators or pipework are heavily corroded or sludged up, a power flush (£250–£400) before installation will protect your new boiler's warranty and efficiency. We'll advise if this is necessary during the survey.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">5. Boiler size (output in kW)</h3>
        <p className="text-gray-700 mb-4">
          A 24–30kW combi is correct for most 2–4 bedroom Worcester homes. Larger properties or homes with multiple bathrooms may need 35–40kW. Oversizing wastes money — our engineers will calculate the right size for your home.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Long Does a Boiler Installation Take?</h2>
        <p className="text-gray-700 mb-4">
          A like-for-like combi boiler swap typically takes <strong>4–8 hours</strong>. More complex jobs involving moving the boiler, upgrading pipework, or installing a new system type may take 1–2 days. We aim to have your hot water and heating back on the same day in most cases.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Is Finance Available?</h2>
        <p className="text-gray-700 mb-8">
          Many Worcester homeowners spread the cost of a new boiler over monthly payments. Ask us about 0% and low-interest finance options when you request your free quote — we work with trusted financing partners to make a new boiler affordable.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: 'Can I get a new boiler grant?', a: 'The UK government\'s Boiler Upgrade Scheme offers grants for heat pumps, not gas boilers. However, if your home is in receipt of certain benefits, you may qualify for a free boiler through the ECO4 scheme. Ask us about eligibility.' },
            { q: 'How long does a new boiler last?', a: 'A well-maintained combi boiler from a reputable brand typically lasts 12–15 years. Annual servicing is the single most important thing you can do to extend its life.' },
            { q: 'Do I need a new boiler or just a repair?', a: <span>As a rough rule: if your boiler is under 8 years old, repair is usually better value. Over 10 years and breaking down regularly, replacement is often more cost-effective in the long run. We'll always give you an honest assessment. Read our guide on <Link to="/blog/signs-boiler-needs-replacing" className="text-blue-800 font-semibold hover:underline">7 signs your boiler needs replacing</Link> to help you decide.</span> },
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
            <Link to="/blog/signs-boiler-needs-replacing" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">7 Warning Signs Your Boiler Needs Replacing</p>
            </Link>
            <Link to="/blog/worcester-bosch-vs-ideal-boilers" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Comparison</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Worcester Bosch vs Ideal: Which Is Best?</p>
            </Link>
            <Link to="/gas-safety-guide" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Gas Safety</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Worcester Landlord Gas Safety Guide</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Get a Free Boiler Quote in Worcester</h2>
          <p className="text-blue-200 mb-6">Gas Safe registered. Competitive prices. Worcester Bosch 1000 from £1,650 supply and fit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">
              Request a Quote
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
