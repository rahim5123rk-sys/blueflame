import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Phone } from 'lucide-react';

const signs = [
  {
    number: '01',
    title: 'Your boiler is over 12 years old',
    body: 'Modern condensing boilers are around 90–94% efficient. A boiler made before 2005 is likely running at 65–75% efficiency, costing you significantly more in gas bills every year. The older it gets, the harder and more expensive it becomes to source spare parts. If your boiler is over 12 years old and starting to cause problems, replacement is usually the smarter investment.',
  },
  {
    number: '02',
    title: 'Frequent breakdowns',
    body: 'One breakdown in a boiler\'s lifetime is normal. Two or three repairs in a single winter is a red flag. Add up what you\'ve spent on repairs in the last two years — if it\'s approaching £500+, you\'ve likely passed the tipping point where replacement makes more financial sense. A new boiler also comes with a manufacturer warranty of up to 12 years.',
  },
  {
    number: '03',
    title: 'Rising gas bills with no explanation',
    body: 'If your gas usage is climbing but your usage habits haven\'t changed, your boiler is likely losing efficiency. An inefficient boiler works harder and longer to produce the same heat. Compare your bills year-on-year — a 15–20% increase without a lifestyle change is a strong indicator your boiler is struggling.',
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
    body: 'Any water leaking from the boiler itself (not the condensate pipe, which normally drips outside) indicates a seal, valve, or heat exchanger failure. Leaks cause corrosion damage and — if near electrics — create a serious hazard. A one-off seal replacement may be all that\'s needed on a newer boiler, but on an older unit, this often signals wider deterioration.',
  },
  {
    number: '07',
    title: 'The heating takes much longer to warm up',
    body: 'If rooms that used to warm up in 20 minutes now take an hour, or if your hot water is inconsistent — sometimes scalding, sometimes lukewarm — your boiler is struggling to maintain consistent output. This inefficiency means you\'re paying for gas that isn\'t translating into useful heat.',
  },
];

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

        <div className="space-y-8 mb-12">
          {signs.map((sign) => (
            <div key={sign.number} className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-3xl font-extrabold text-blue-100 flex-shrink-0 w-12 text-right">{sign.number}</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  {sign.number === '05' && <AlertTriangle className="text-red-600" size={20} />}
                  {sign.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {sign.body}
                  {sign.number === '05' && (
                    <> Read our full guide: <Link to="/blog/carbon-monoxide-safety" className="text-blue-800 font-semibold hover:underline">Carbon monoxide — what every homeowner must know</Link>.</>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Repair vs Replace: How to Decide</h2>
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
            <Link to="/blog/worcester-bosch-vs-ideal-boilers" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Comparison</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Worcester Bosch vs Ideal Boilers: Which Is Best?</p>
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
