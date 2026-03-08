import { Link } from 'react-router-dom';
import { CheckCircle, X, Phone, ExternalLink, ChevronRight, Info, Play } from 'lucide-react';

function BoilerComparisonInfographic() {
  const bars = [
    {
      label: 'Warranty (years)',
      wb: { value: 12, max: 12, display: '12 yrs' },
      ideal: { value: 10, max: 12, display: '10 yrs' },
    },
    {
      label: 'Efficiency (%)',
      wb: { value: 94, max: 100, display: '94%' },
      ideal: { value: 91, max: 100, display: '91%' },
    },
    {
      label: 'Value Score',
      wb: { value: 72, max: 100, display: '7.2/10' },
      ideal: { value: 88, max: 100, display: '8.8/10' },
    },
    {
      label: 'Reliability Score',
      wb: { value: 95, max: 100, display: '9.5/10' },
      ideal: { value: 82, max: 100, display: '8.2/10' },
    },
  ];

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
      <p className="font-bold text-gray-900 mb-6 text-center text-lg">Worcester Bosch vs Ideal: At a Glance</p>
      <div className="space-y-6">
        {bars.map((bar) => (
          <div key={bar.label}>
            <p className="text-sm font-semibold text-gray-700 mb-2">{bar.label}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-blue-800 w-28 shrink-0">Worcester Bosch</span>
                <div className="flex-1 bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div
                    className="h-5 bg-blue-800 rounded-full flex items-center justify-end pr-2 transition-all"
                    style={{ width: `${(bar.wb.value / bar.wb.max) * 100}%` }}
                  >
                    <span className="text-white text-xs font-bold">{bar.wb.display}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-600 w-28 shrink-0">Ideal</span>
                <div className="flex-1 bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div
                    className="h-5 bg-gray-500 rounded-full flex items-center justify-end pr-2 transition-all"
                    style={{ width: `${(bar.ideal.value / bar.ideal.max) * 100}%` }}
                  >
                    <span className="text-white text-xs font-bold">{bar.ideal.display}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-4 text-center">Based on manufacturer specs, Which? surveys &amp; installer experience. Value Score is higher for Ideal due to lower price point.</p>
    </div>
  );
}

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

        {/* Table of Contents */}
        <nav className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Info size={18} className="text-blue-800" /> In This Article</p>
          <ol className="space-y-2">
            {[
              ['section-quick-comparison', 'Quick Comparison'],
              ['section-worcester-bosch', 'Worcester Bosch: The Premium Choice'],
              ['section-ideal-boilers', 'Ideal Boilers: The Strong Mid-Range Contender'],
              ['section-our-verdict', 'Our Verdict: Which Should You Choose?'],
              ['section-video', 'Watch: Worcester Bosch vs Ideal Review'],
              ['section-resources', 'Useful Resources'],
              ['section-faqs', 'Frequently Asked Questions'],
            ].map(([id, title]) => (
              <li key={id}><a href={`#${id}`} className="flex items-center gap-2 text-blue-800 hover:underline text-sm font-medium"><ChevronRight size={14} />{title}</a></li>
            ))}
          </ol>
        </nav>

        {/* Head-to-head comparison table */}
        <h2 id="section-quick-comparison" className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h2>
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

        {/* SVG Infographic */}
        <BoilerComparisonInfographic />

        {/* Worcester Bosch */}
        <h2 id="section-worcester-bosch" className="text-2xl font-bold text-gray-900 mb-4">Worcester Bosch: The Premium Choice</h2>
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
        <h2 id="section-ideal-boilers" className="text-2xl font-bold text-gray-900 mb-4">Ideal Boilers: The Strong Mid-Range Contender</h2>
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

        <h2 id="section-our-verdict" className="text-2xl font-bold text-gray-900 mb-4">Our Verdict: Which Should You Choose?</h2>
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

        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-amber-800 mb-1">Not sure if you need a new boiler yet?</p>
          <p className="text-amber-700 text-sm">Read our guide on <Link to="/blog/signs-boiler-needs-replacing" className="text-amber-900 font-semibold hover:underline">7 warning signs your boiler needs replacing</Link> before making a decision.</p>
        </div>

        {/* YouTube Video Embed */}
        <h2 id="section-video" className="text-2xl font-bold text-gray-900 mb-4">Watch: Worcester Bosch vs Ideal Review</h2>
        <div className="mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/PLACEHOLDER_ID"
              title="Worcester Bosch vs Ideal Boilers — Which Should You Buy?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><Play size={14} className="text-blue-800" /> An independent engineer's comparison of Worcester Bosch and Ideal boiler ranges</p>
        </div>

        {/* External Resources */}
        <h2 id="section-resources" className="text-2xl font-bold text-gray-900 mb-4">Useful Resources</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><ExternalLink size={16} className="text-blue-800" /> Useful Resources</p>
          <ul className="space-y-2">
            <li>
              <a href="https://www.worcester-bosch.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1">
                <ExternalLink size={12} /> Worcester Bosch official website — product specs &amp; warranty registration
              </a>
            </li>
            <li>
              <a href="https://www.idealheating.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1">
                <ExternalLink size={12} /> Ideal Boilers official website — full range &amp; warranty information
              </a>
            </li>
            <li>
              <a href="https://www.which.co.uk/reviews/boilers" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1">
                <ExternalLink size={12} /> Which? Boiler Reviews &amp; Reliability Survey
              </a>
            </li>
          </ul>
        </div>

        {/* FAQs */}
        <h2 id="section-faqs" className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              q: 'Is Worcester Bosch really worth the extra cost?',
              a: 'For most homeowners, yes. Worcester Bosch boilers consistently outperform on reliability, efficiency, and warranty length. The extra upfront cost — typically £200–£400 more than a comparable Ideal — is often offset over the boiler\'s lifetime by fewer breakdowns and lower energy bills. If you plan to stay in your home long-term, Worcester Bosch is usually the better investment.',
            },
            {
              q: 'How long is the Worcester Bosch Greenstar warranty?',
              a: 'Worcester Bosch offers a standard warranty of 5 years on the Greenstar 1000, 8 years on the Greenstar 4000, and 8 years on the Greenstar 8000. When installed by a Worcester Bosch Accredited Installer and registered within 30 days, these extend to 8, 10, and 12 years respectively. As accredited installers, we can secure you the maximum warranty period.',
            },
            {
              q: 'Are Ideal boilers good quality?',
              a: 'Yes — Ideal has significantly improved their build quality and reliability in recent years, particularly with the Vogue and Esprit ranges. The Logic+ remains a solid budget option. Ideal holds Which? Best Buy status on select models and has a strong UK service network. They\'re not quite at Worcester Bosch\'s level for longevity, but they represent excellent value for money.',
            },
            {
              q: 'Which boiler brand do plumbers recommend most?',
              a: 'Industry surveys consistently show Worcester Bosch as the most recommended boiler brand among Gas Safe engineers in the UK. Viessmann and Vaillant also feature highly. Ideal is well regarded for budget installations. Our own recommendation depends on your budget: Worcester Bosch for longevity, Ideal for value.',
            },
            {
              q: 'Is Ideal Logic+ a good boiler?',
              a: 'The Ideal Logic+ is one of the best-selling budget combi boilers in the UK for good reason. It\'s dependable, easy to service, and comes with a 2-year standard warranty (extendable to 7 years with registration and an annual service). It\'s not the most efficient or quietest boiler, but for smaller homes or tighter budgets it\'s a solid choice.',
            },
            {
              q: 'What warranty does the Ideal Vogue come with?',
              a: 'The Ideal Vogue Max comes with a 2-year standard warranty. When registered within 30 days of installation and serviced annually by a Gas Safe engineer, this extends to 10 years. The Vogue is Ideal\'s premium range and their most direct competitor to the Worcester Bosch Greenstar 8000.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-900 mb-2">{q}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
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
