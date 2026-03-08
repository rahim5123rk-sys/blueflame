import { Link } from 'react-router-dom';
import { CheckCircle, X, Phone } from 'lucide-react';

export default function WorcesterVsIdeal() {
  return (
    <article className="bg-white animate-fadeIn">

      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">← Back to Blog</Link>
          <span className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Boiler Comparison</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Worcester Bosch vs Ideal Boilers: Which Is Best for Your Home?
          </h1>
          <p className="text-blue-200 text-lg">By Blue Flame Gas Services · March 2026 · 7 min read</p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">

        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          Worcester Bosch and Ideal are two of the UK's most installed boiler brands. As engineers who fit both regularly across Worcester and Worcestershire, we're well placed to compare them honestly — so you can make the right choice for your home and budget. For full pricing on either brand, see our <Link to="/blog/boiler-cost-worcester" className="text-blue-800 font-semibold hover:underline">2026 new boiler cost guide</Link>.
        </p>

        {/* Head-to-head comparison table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="p-4 bg-gray-100 text-left border border-gray-200">Feature</th>
                <th className="p-4 bg-blue-800 text-white text-left border border-blue-900">Worcester Bosch</th>
                <th className="p-4 bg-gray-700 text-white text-left border border-gray-800">Ideal</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Popular models', 'Greenstar 1000/4000/8000', 'Logic+, Vogue, Esprit'],
                ['Price range (supply only)', '£900–£2,000', '£600–£1,600'],
                ['Standard warranty', '5–8 years', '2–7 years'],
                ['Max warranty (with registration)', '8–12 years', '7–10 years'],
                ['ErP efficiency rating', 'A (93–94%)', 'A (89–93%)'],
                ['Manufacturer origin', 'Germany/UK', 'UK (Hull)'],
                ['Which? recommended', 'Yes (consistently)', 'Yes (select models)'],
                ['Spare parts availability', 'Excellent', 'Very good'],
                ['Typical lifespan', '14–18 years', '12–15 years'],
              ].map(([feature, wb, ideal], i) => (
                <tr key={feature} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-medium border border-gray-200">{feature}</td>
                  <td className="p-3 border border-gray-200 text-blue-800 font-medium">{wb}</td>
                  <td className="p-3 border border-gray-200">{ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Worcester Bosch */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Worcester Bosch: The Premium Choice</h2>
        <p className="text-gray-700 mb-4">
          Worcester Bosch has been the UK's best-selling boiler brand for decades, and for good reason. Their Greenstar range combines German engineering precision with strong UK after-sales support. Which? has recommended Worcester Bosch in their annual boiler surveys for many consecutive years.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mb-3">Key Worcester Bosch Models</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { name: 'Greenstar 1000', price: 'From £650', note: 'Entry-level. Reliable combi, great for smaller homes.' },
            { name: 'Greenstar 4000', price: 'From £900', note: 'Mid-range. Most popular choice. Smart-ready.' },
            { name: 'Greenstar 8000', price: 'From £1,300', note: 'Premium. Smart controls, highest efficiency, quietest.' },
          ].map((model) => (
            <div key={model.name} className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
              <p className="font-bold text-blue-800">{model.name}</p>
              <p className="text-blue-600 font-bold text-lg">{model.price}</p>
              <p className="text-gray-600 text-sm mt-1">{model.note}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
            <h4 className="font-bold text-green-800 mb-3">Pros</h4>
            <ul className="space-y-2">
              {['Best-in-class reliability', 'Up to 12-year warranty', 'Consistently high efficiency', 'Huge service network', 'Quiet operation', 'Excellent Which? ratings'].map(p => (
                <li key={p} className="flex items-center gap-2 text-green-700 text-sm"><CheckCircle size={14} /> {p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-100 p-5 rounded-xl">
            <h4 className="font-bold text-red-800 mb-3">Cons</h4>
            <ul className="space-y-2">
              {['Higher upfront cost', 'Some models require Worcester Bosch accredited installer for full warranty'].map(p => (
                <li key={p} className="flex items-center gap-2 text-red-700 text-sm"><X size={14} /> {p}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ideal */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ideal Boilers: The Strong Mid-Range Contender</h2>
        <p className="text-gray-700 mb-4">
          Ideal is a British brand, manufactured in Hull since 1906. Their Logic+ range is one of the most affordable reliable boilers on the market, while the Vogue and Esprit sit firmly in the mid-to-premium tier. Ideal has significantly improved their reliability and efficiency in recent years.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mb-3">Key Ideal Models</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { name: 'Logic+ Combi', price: 'From £500', note: 'Budget-friendly. Dependable everyday combi boiler.' },
            { name: 'Esprit Eco', price: 'From £800', note: 'Mid-range. Strong efficiency, compact design.' },
            { name: 'Vogue Max', price: 'From £1,200', note: 'Premium. Ultra-quiet, highest efficiency, long warranty.' },
          ].map((model) => (
            <div key={model.name} className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
              <p className="font-bold text-gray-800">{model.name}</p>
              <p className="text-blue-800 font-bold text-lg">{model.price}</p>
              <p className="text-gray-600 text-sm mt-1">{model.note}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
            <h4 className="font-bold text-green-800 mb-3">Pros</h4>
            <ul className="space-y-2">
              {['Lower upfront cost', 'British manufactured', 'Good efficiency ratings', 'Wide spare parts availability', 'Improving reliability'].map(p => (
                <li key={p} className="flex items-center gap-2 text-green-700 text-sm"><CheckCircle size={14} /> {p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-100 p-5 rounded-xl">
            <h4 className="font-bold text-red-800 mb-3">Cons</h4>
            <ul className="space-y-2">
              {['Shorter standard warranty than Worcester', 'Historically lower reliability on older models', 'Not consistently Which? recommended across all ranges'].map(p => (
                <li key={p} className="flex items-center gap-2 text-red-700 text-sm"><X size={14} /> {p}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Verdict: Which Should You Choose?</h2>
        <div className="space-y-4 mb-10">
          <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl">
            <p className="font-bold text-blue-800 mb-1">Choose Worcester Bosch if…</p>
            <p className="text-blue-700">You want the best long-term reliability, the longest warranty, and are happy to pay a premium upfront. The Greenstar 1000 at £1,650 supply and fit is our most popular installation in Worcester homes.</p>
          </div>
          <div className="bg-gray-50 border-l-4 border-gray-500 p-5 rounded-r-xl">
            <p className="font-bold text-gray-800 mb-1">Choose Ideal if…</p>
            <p className="text-gray-700">You want a solid, reliable boiler with a lower upfront cost. The Ideal Vogue and Esprit are strong performers that we're confident recommending, especially for budget-conscious homeowners.</p>
          </div>
        </div>

        {/* Not sure if you should replace? */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-amber-800 mb-1">Not sure if you need a new boiler yet?</p>
          <p className="text-amber-700 text-sm">Read our guide on <Link to="/blog/signs-boiler-needs-replacing" className="text-amber-900 font-semibold hover:underline">7 warning signs your boiler needs replacing</Link> before making a decision.</p>
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-10 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/blog/boiler-cost-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Installation</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How Much Does a New Boiler Cost in Worcester? (2026)</p>
            </Link>
            <Link to="/blog/signs-boiler-needs-replacing" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">7 Warning Signs Your Boiler Needs Replacing</p>
            </Link>
            <Link to="/blog/carbon-monoxide-safety" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wide">Gas Safety</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Carbon Monoxide: The Silent Killer Every Homeowner Must Know About</p>
            </Link>
          </div>
        </div>

        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Get a Free, No-Pressure Quote</h2>
          <p className="text-blue-200 mb-6">We install both Worcester Bosch and Ideal boilers across Worcester and Worcestershire. We'll recommend the right boiler for your home — not the most expensive one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">Get a Free Quote</Link>
            <a href="tel:07480561846" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> 07480 561 846
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
