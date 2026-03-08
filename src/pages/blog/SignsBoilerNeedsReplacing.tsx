import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Phone, ExternalLink, ChevronRight, Info, Play } from 'lucide-react';

const signs = [
  {
    number: '01',
    title: 'Your boiler is over 12 years old',
    body: 'Modern condensing boilers are around 90–94% efficient. A boiler made before 2005 is likely running at 65–75% efficiency, costing you significantly more in gas bills every year. The older it gets, the harder and more expensive it becomes to source spare parts. If your boiler is over 12 years old and starting to cause problems, replacement is usually the smarter investment.',
  },
  {
    number: '02',
    title: 'Frequent breakdowns',
    body: "One breakdown in a boiler's lifetime is normal. Two or three repairs in a single winter is a red flag. Add up what you've spent on repairs in the last two years — if it's approaching £500+, you've likely passed the tipping point where replacement makes more financial sense. A new boiler also comes with a manufacturer warranty of up to 12 years.",
  },
  {
    number: '03',
    title: 'Rising gas bills with no explanation',
    body: "If your gas usage is climbing but your usage habits haven't changed, your boiler is likely losing efficiency. An inefficient boiler works harder and longer to produce the same heat. Compare your bills year-on-year — a 15–20% increase without a lifestyle change is a strong indicator your boiler is struggling.",
  },
  {
    number: '04',
    title: 'Strange noises — banging, kettling, or gurgling',
    body: '"Kettling" is a rumbling noise caused by limescale build-up on the heat exchanger (common in hard water areas like Worcestershire). Banging may indicate pressure issues. Gurgling suggests trapped air or low water pressure. While some of these can be fixed, in older boilers they often signal the start of a longer list of problems.',
  },
  {
    number: '05',
    title: 'Yellow or orange flame instead of blue',
    body: 'This is a serious safety warning. A healthy gas boiler burns with a crisp blue flame. A yellow or orange flame indicates the boiler is producing carbon monoxide — an odourless, colourless, and potentially fatal gas. If you notice this, turn off the boiler immediately, open windows, leave the property, and call a Gas Safe engineer. Do not use the boiler until it has been inspected.',
  },
  {
    number: '06',
    title: 'The boiler is leaking or dripping',
    body: "Any water leaking from the boiler itself (not the condensate pipe, which normally drips outside) indicates a seal, valve, or heat exchanger failure. Leaks cause corrosion damage and — if near electrics — create a serious hazard. A one-off seal replacement may be all that's needed on a newer boiler, but on an older unit, this often signals wider deterioration.",
  },
  {
    number: '07',
    title: 'The heating takes much longer to warm up',
    body: "If rooms that used to warm up in 20 minutes now take an hour, or if your hot water is inconsistent — sometimes scalding, sometimes lukewarm — your boiler is struggling to maintain consistent output. This inefficiency means you're paying for gas that isn't translating into useful heat.",
  },
];

function BoilerAgeEfficiencyInfographic() {
  const data = [
    { age: '0–3 yrs', efficiency: 93 },
    { age: '4–6 yrs', efficiency: 89 },
    { age: '7–9 yrs', efficiency: 84 },
    { age: '10–12 yrs', efficiency: 76 },
    { age: '13–15 yrs', efficiency: 68 },
    { age: '15+ yrs', efficiency: 58 },
  ];
  const svgWidth = 520;
  const svgHeight = 200;
  const padLeft = 44;
  const padBottom = 40;
  const padTop = 20;
  const chartW = svgWidth - padLeft - 20;
  const chartH = svgHeight - padBottom - padTop;
  const barW = Math.floor(chartW / data.length) - 10;

  function effColor(e: number) {
    if (e >= 88) return '#22c55e';
    if (e >= 75) return '#f59e0b';
    return '#ef4444';
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
      <p className="font-bold text-gray-900 mb-1">Boiler Efficiency vs Age</p>
      <p className="text-xs text-gray-500 mb-4">How efficiency typically declines without annual servicing</p>
      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full" aria-label="Bar chart showing boiler efficiency decline with age">
        {/* Y-axis gridlines */}
        {[60, 70, 80, 90, 100].map((tick) => {
          const y = padTop + chartH - ((tick - 50) / 50) * chartH;
          return (
            <g key={tick}>
              <line x1={padLeft} y1={y} x2={svgWidth - 20} y2={y} stroke="#e5e7eb" strokeWidth="1" />
              <text x={padLeft - 4} y={y + 4} textAnchor="end" fontSize="9" fill="#9ca3af" fontFamily="sans-serif">{tick}%</text>
            </g>
          );
        })}
        {/* Bars */}
        {data.map((d, i) => {
          const barH = ((d.efficiency - 50) / 50) * chartH;
          const x = padLeft + i * (chartW / data.length) + 5;
          const y = padTop + chartH - barH;
          return (
            <g key={d.age}>
              <rect x={x} y={y} width={barW} height={barH} rx="4" fill={effColor(d.efficiency)} />
              <text x={x + barW / 2} y={y - 4} textAnchor="middle" fontSize="10" fill="#374151" fontFamily="sans-serif" fontWeight="bold">{d.efficiency}%</text>
              <text x={x + barW / 2} y={svgHeight - padBottom + 14} textAnchor="middle" fontSize="9" fill="#6b7280" fontFamily="sans-serif">{d.age}</text>
            </g>
          );
        })}
        {/* X-axis */}
        <line x1={padLeft} y1={padTop + chartH} x2={svgWidth - 20} y2={padTop + chartH} stroke="#d1d5db" strokeWidth="1" />
      </svg>
      <div className="flex gap-5 mt-2">
        <span className="text-xs text-gray-500 flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-green-500"></span> Good (88%+)</span>
        <span className="text-xs text-gray-500 flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-amber-400"></span> Declining (75–87%)</span>
        <span className="text-xs text-gray-500 flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-red-500"></span> Poor (under 75%)</span>
      </div>
    </div>
  );
}

export default function SignsBoilerNeedsReplacing() {
  return (
    <article className="bg-white animate-fadeIn">

      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">← Back to Blog</Link>
          <span className="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Boiler Advice</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            7 Warning Signs Your Boiler Needs Replacing
          </h1>
          <p className="text-blue-200 text-lg">By Blue Flame Gas Services · March 2026 · 5 min read</p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">

        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          Your boiler works hard every day. Like any appliance, it gives you warning signs before it fails completely — and knowing them could save you from a breakdown in the middle of winter. Here are the seven signs Worcester homeowners should never ignore.
        </p>

        {/* TABLE OF CONTENTS */}
        <nav className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Info size={18} className="text-blue-800" /> In This Article</p>
          <ol className="space-y-2">
            {[
              ['section-7-signs', 'The 7 Warning Signs'],
              ['section-repair-vs-replace', 'Repair vs Replace: How to Decide'],
              ['section-faqs', 'Frequently Asked Questions'],
            ].map(([id, title]) => (
              <li key={id}><a href={`#${id}`} className="flex items-center gap-2 text-blue-800 hover:underline text-sm font-medium"><ChevronRight size={14} />{title}</a></li>
            ))}
          </ol>
        </nav>

        <BoilerAgeEfficiencyInfographic />

        {/* YouTube embed */}
        <div className="mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{paddingBottom: '56.25%'}}>
            <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/PLACEHOLDER_SIGNS_BOILER" title="Signs your boiler needs replacing — expert guide" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><Play size={14} className="text-blue-800" /> A Gas Safe engineer explains the key warning signs that your boiler is on its way out</p>
        </div>

        <h2 id="section-7-signs" className="text-2xl font-bold text-gray-900 mb-6">The 7 Warning Signs</h2>

        <div className="space-y-8 mb-12">
          {signs.map((sign) => (
            <div key={sign.number} className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-3xl font-extrabold text-blue-100 flex-shrink-0 w-12 text-right">{sign.number}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  {sign.number === '05' && <AlertTriangle className="text-red-600" size={20} />}
                  {sign.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {sign.body}
                  {sign.number === '04' && (
                    <> Learn more: <Link to="/blog/what-is-a-power-flush" className="text-blue-800 font-semibold hover:underline">What is a power flush and do you need one?</Link></>
                  )}
                  {sign.number === '05' && (
                    <> Read our full guide: <Link to="/blog/carbon-monoxide-safety" className="text-blue-800 font-semibold hover:underline">Carbon monoxide — what every homeowner must know</Link>.</>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* External resources */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><ExternalLink size={16} className="text-blue-800" /> Useful Resources</p>
          <ul className="space-y-2">
            <li><a href="https://energysavingtrust.org.uk/advice/boilers/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Energy Saving Trust — Boiler Replacement Guide</a></li>
            <li><a href="https://www.which.co.uk/reviews/boilers" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Which? — Best Boiler Brands &amp; Reliability Ratings</a></li>
            <li><a href="https://www.gassaferegister.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Gas Safe Register — Find a Registered Engineer</a></li>
          </ul>
        </div>

        <h2 id="section-repair-vs-replace" className="text-2xl font-bold text-gray-900 mb-4">Repair vs Replace: How to Decide</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
            <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2"><CheckCircle size={18} /> Repair makes sense if:</h3>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>• Boiler is under 8 years old</li>
              <li>• First or second breakdown</li>
              <li>• Single component failure</li>
              <li>• Repair cost under £350</li>
              <li>• Still under warranty</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
            <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2"><AlertTriangle size={18} /> Replace makes sense if:</h3>
            <ul className="space-y-2 text-red-700 text-sm">
              <li>• Boiler is over 10–12 years old</li>
              <li>• Multiple breakdowns this year</li>
              <li>• Repair cost over £400–500</li>
              <li>• Parts are hard to source</li>
              <li>• Efficiency has noticeably dropped</li>
            </ul>
            <Link to="/blog/boiler-cost-worcester" className="inline-block mt-4 text-red-800 font-semibold text-sm hover:underline">
              See 2026 new boiler prices →
            </Link>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10">
          <p className="font-bold text-amber-800 mb-1">Always get a professional opinion</p>
          <p className="text-amber-700">Our Gas Safe engineers will give you an honest assessment — we never push replacement when a repair is genuinely the better option for you.</p>
        </div>

        {/* FAQs */}
        <h2 id="section-faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            {
              q: 'How old is too old for a boiler?',
              a: 'Most heating engineers consider a boiler over 12–15 years old to be approaching the end of its useful life, particularly if it has needed repairs. While some boilers last longer with excellent servicing, finding parts for old units becomes increasingly difficult and expensive. If your boiler is over 15 years old, a replacement should be seriously considered.',
            },
            {
              q: 'What is the average lifespan of a boiler?',
              a: 'The average lifespan of a gas boiler in the UK is 10–15 years. Premium brands such as Worcester Bosch and Viessmann regularly achieve 15+ years when serviced annually. Budget brands may start causing problems after 8–10 years. Annual servicing is the single most important factor in extending boiler life.',
            },
            {
              q: 'Does an old boiler use more gas?',
              a: "Yes. Older boilers — particularly non-condensing models installed before 2005 — operate at 60–75% efficiency. Modern A-rated condensing boilers run at 90–94% efficiency. This means an old boiler is wasting up to 35p of every £1 spent on gas. For a typical Worcester semi-detached home, the Energy Saving Trust estimates switching from a G-rated to an A-rated boiler could save £200–£340 per year.",
            },
            {
              q: 'Can I get a free boiler replacement?',
              a: "Free boiler replacements are available through the ECO4 (Energy Company Obligation) scheme for households receiving qualifying benefits such as Universal Credit, Pension Credit, Child Tax Credit, or certain disability benefits. Your property also needs to meet an energy efficiency band threshold. Contact your energy supplier or visit the Citizens Advice website to check if you qualify.",
            },
            {
              q: 'Is it worth fixing a 15-year-old boiler?',
              a: 'In most cases, no. A 15-year-old boiler is likely running at 65–70% efficiency and replacement parts are increasingly scarce. Unless the repair is minor (under £150) and the boiler has an otherwise clean record, the money is usually better invested in a new boiler with a full manufacturer warranty. A new boiler will also immediately start saving you money on gas bills.',
            },
            {
              q: 'What happens if I don\'t replace a failing boiler?',
              a: 'Ignoring the warning signs risks a complete breakdown — often at the worst possible time, such as a cold January weekend. Beyond discomfort, a seriously failing boiler can pose genuine safety risks including carbon monoxide leaks, gas leaks, or water damage from leaking seals. Repair costs also escalate rapidly once multiple components begin to fail simultaneously.',
            },
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
              <p className="font-bold text-gray-900 mt-1 text-sm">How Much Does a New Boiler Cost in Worcester? (2026)</p>
            </Link>
            <Link to="/blog/carbon-monoxide-safety" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wide">Gas Safety</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Carbon Monoxide: The Silent Killer Every Homeowner Must Know About</p>
            </Link>
            <Link to="/blog/what-is-a-power-flush" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">What is a Power Flush? Do You Need One?</p>
            </Link>
          </div>
        </div>

        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Concerned About Your Boiler?</h2>
          <p className="text-blue-200 mb-6">We cover Worcester and Worcestershire. Same-day emergency visits available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">
              Book an Inspection
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
