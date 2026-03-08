import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Phone, ShieldCheck, Clock, ExternalLink, ChevronRight, Info, Play } from 'lucide-react';

function ServiceTimelineInfographic() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
      <p className="font-bold text-gray-900 mb-5 text-center">Annual Service vs. No Service — What Happens Over Time</p>
      <svg viewBox="0 0 520 140" width="100%" aria-label="Timeline infographic comparing serviced vs unserviced boilers">
        {/* Labels */}
        <text x="10" y="30" fontSize="11" fontWeight="bold" fill="#1e3a8a">Serviced annually</text>
        <text x="10" y="80" fontSize="11" fontWeight="bold" fill="#ef4444">No service</text>

        {/* Year markers */}
        {[1,2,3,4,5].map((yr, i) => (
          <text key={yr} x={90 + i * 86} y="115" fontSize="10" fill="#6b7280" textAnchor="middle">Year {yr}</text>
        ))}

        {/* Serviced bar — stays green/healthy */}
        {[0,1,2,3,4].map((i) => (
          <rect key={i} x={76 + i * 86} y="18" width="72" height="22" rx="5" fill="#22c55e" />
        ))}
        {[0,1,2,3,4].map((i) => (
          <text key={i} x={112 + i * 86} y="33" fontSize="9" fill="white" textAnchor="middle">Safe &amp; efficient</text>
        ))}

        {/* Unserviced bar — degrades */}
        <rect x="76" y="68" width="72" height="22" rx="5" fill="#fbbf24" />
        <text x="112" y="83" fontSize="9" fill="#78350f" textAnchor="middle">OK</text>
        <rect x="162" y="68" width="72" height="22" rx="5" fill="#f97316" />
        <text x="198" y="83" fontSize="9" fill="white" textAnchor="middle">Degrading</text>
        <rect x="248" y="68" width="72" height="22" rx="5" fill="#ef4444" />
        <text x="284" y="83" fontSize="9" fill="white" textAnchor="middle">Inefficient</text>
        <rect x="334" y="68" width="72" height="22" rx="5" fill="#b91c1c" />
        <text x="370" y="83" fontSize="9" fill="white" textAnchor="middle">Fault risk</text>
        <rect x="420" y="68" width="72" height="22" rx="5" fill="#7f1d1d" />
        <text x="456" y="83" fontSize="9" fill="white" textAnchor="middle">Breakdown</text>
      </svg>
      <p className="text-xs text-gray-500 mt-2 text-center">A serviced boiler runs safely and efficiently year after year. Without servicing, performance degrades and breakdown risk increases significantly.</p>
    </div>
  );
}

export default function AnnualBoilerService() {
  return (
    <article className="bg-white animate-fadeIn">

      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">← Back to Blog</Link>
          <span className="inline-block bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Boiler Servicing</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Annual Boiler Service: What's Included, and Why You Shouldn't Skip It
          </h1>
          <p className="text-blue-200 text-lg">By Blue Flame Gas Services · March 2026 · 5 min read</p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          An annual boiler service is the single most important thing you can do to keep your boiler safe, efficient, and protected under warranty. Yet most homeowners in Worcester skip it until something goes wrong — which is almost always more expensive than the service would have been.
        </p>

        {/* TABLE OF CONTENTS */}
        <nav className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Info size={18} className="text-blue-800" /> In This Article</p>
          <ol className="space-y-2">
            {[
              ['section-what-does-a-boiler-service-include', 'What Does a Boiler Service Include?'],
              ['section-why-annual-servicing-matters', 'Why Annual Servicing Matters'],
              ['section-how-often-should-a-boiler-be-serviced', 'How Often Should a Boiler Be Serviced?'],
              ['section-what-happens-if-my-boiler-fails', 'What Happens If My Boiler Fails Its Service?'],
              ['section-faqs', 'Frequently Asked Questions'],
            ].map(([id, title]) => (
              <li key={id}><a href={`#${id}`} className="flex items-center gap-2 text-blue-800 hover:underline text-sm font-medium"><ChevronRight size={14} />{title}</a></li>
            ))}
          </ol>
        </nav>

        {/* STAT CARDS */}
        <div className="grid grid-cols-3 gap-4 mb-12 text-center">
          {[
            { icon: <ShieldCheck size={28} className="text-blue-800 mx-auto mb-2" />, stat: '£60', label: 'Blue Flame service price' },
            { icon: <Clock size={28} className="text-blue-800 mx-auto mb-2" />, stat: '45–60 min', label: 'Typical service time' },
            { icon: <CheckCircle size={28} className="text-green-600 mx-auto mb-2" />, stat: '12+ checks', label: 'Carried out by our engineer' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              {item.icon}
              <p className="text-2xl font-extrabold text-gray-900">{item.stat}</p>
              <p className="text-xs text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <h2 id="section-what-does-a-boiler-service-include" className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Does a Boiler Service Include?</h2>
        <p className="text-gray-700 mb-6">
          A thorough boiler service by a Gas Safe registered engineer covers far more than a visual inspection. Here is exactly what a Blue Flame service includes:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            { title: 'Flue integrity check', detail: 'The flue is inspected for damage, blockages, and correct termination. A blocked or damaged flue can cause carbon monoxide to enter the property.' },
            { title: 'Burner inspection and cleaning', detail: 'The burner is removed, inspected for wear, and cleaned. A dirty burner reduces combustion efficiency and can produce harmful emissions.' },
            { title: 'Heat exchanger inspection', detail: 'The heat exchanger is checked for cracks, corrosion, and scale build-up — the most common cause of CO leaks and efficiency loss.' },
            { title: 'Gas pressure and flow rate test', detail: 'Gas inlet pressure and boiler operating pressure are measured against manufacturer specifications to ensure safe, efficient combustion.' },
            { title: 'Combustion analysis', detail: 'A flue gas analyser measures CO, CO₂, and O₂ levels in the exhaust gases to verify complete and safe combustion.' },
            { title: 'Seals and gaskets check', detail: 'Internal seals are inspected for signs of deterioration — failed seals can cause gas or water leaks inside the boiler casing.' },
            { title: 'Condensate drain check', detail: 'The condensate pipe is checked for blockages or incorrect fall — a frozen or blocked condensate pipe is the number one cause of boiler breakdowns in winter.' },
            { title: 'Controls and safety devices', detail: 'Pressure relief valve, thermostats, and overheat cut-offs are tested to ensure all safety systems are functioning correctly.' },
            { title: 'Magnetic filter inspection', detail: 'If fitted, the Adey MagnaClean or similar filter is cleaned and inspected. Sludge removed from the filter is evidence of system health — or problems.' },
            { title: 'Visual inspection of pipework', detail: 'Visible gas and water pipework connected to the boiler is inspected for corrosion, leaks, and correct support.' },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                <p className="text-gray-600 text-xs">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SERVICE TIMELINE INFOGRAPHIC */}
        <ServiceTimelineInfographic />

        {/* YOUTUBE EMBED */}
        <div className="mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{paddingBottom: '56.25%'}}>
            <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/PLACEHOLDER_BOILER_SERVICE_ID" title="What happens during a boiler service" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><Play size={14} className="text-blue-800" /> See exactly what a Gas Safe engineer checks during an annual boiler service</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl mb-10">
          <p className="font-bold text-blue-800 text-lg mb-1">Blue Flame Boiler Service — from £60</p>
          <p className="text-blue-700 text-sm">Covers Worcester and Worcestershire. Gas Safe certificate issued if required. Landlord deal: service + CP12 for £100.</p>
          <Link to="/services" className="inline-flex items-center gap-2 mt-3 text-blue-800 font-bold hover:underline text-sm">
            Book your service →
          </Link>
        </div>

        <h2 id="section-why-annual-servicing-matters" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Annual Servicing Matters</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">1. Carbon monoxide safety</h3>
        <p className="text-gray-700 mb-4">
          A cracked heat exchanger, a blocked flue, or a failing burner can all cause a boiler to produce{' '}
          <Link to="/blog/carbon-monoxide-safety" className="text-blue-800 font-semibold hover:underline">carbon monoxide</Link> — a colourless, odourless gas that kills around 50 people in the UK every year. An annual service catches these faults before they become fatal.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">2. Keeping the warranty valid</h3>
        <p className="text-gray-700 mb-4">
          Almost all boiler manufacturers require annual servicing by a Gas Safe engineer to keep the warranty valid. A Worcester Bosch boiler with a 5-year warranty could have that warranty voided if it is not serviced annually. Given that repairs can cost £200–£700+, this is not a clause worth ignoring.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">3. Efficiency and gas bills</h3>
        <p className="text-gray-700 mb-4">
          A boiler that hasn't been serviced for several years will gradually lose efficiency as combustion components deteriorate. Studies by the Energy Saving Trust estimate that an inefficient boiler can cost 10–15% more to run than a well-maintained one — on a typical Worcester gas bill, that's £100–£200 per year wasted.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">4. Catching small problems before they become big ones</h3>
        <p className="text-gray-700 mb-8">
          A cracked flue seal or a corroded component caught during a service costs a fraction of what an emergency callout or boiler replacement would. Our engineers flag any advisory issues and give you honest advice — no pressure to replace anything unnecessarily. For context on when replacement makes sense, see our guide on{' '}
          <Link to="/blog/signs-boiler-needs-replacing" className="text-blue-800 font-semibold hover:underline">signs your boiler needs replacing</Link>.
        </p>

        {/* EXTERNAL RESOURCES */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><ExternalLink size={16} className="text-blue-800" /> Useful Resources</p>
          <ul className="space-y-2">
            <li><a href="https://www.gassaferegister.co.uk/check-the-register/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Gas Safe Register — check or find a registered engineer</a></li>
            <li><a href="https://energysavingtrust.org.uk/advice/boilers-and-heating/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Energy Saving Trust — boiler maintenance advice</a></li>
            <li><a href="https://www.which.co.uk/reviews/boilers/article/boiler-servicing" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Which? — boiler servicing guide</a></li>
          </ul>
        </div>

        <h2 id="section-how-often-should-a-boiler-be-serviced" className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Often Should a Boiler Be Serviced?</h2>
        <p className="text-gray-700 mb-4">
          Once a year, without exception. For landlords in Worcestershire, an annual service is also closely tied to your legal requirement to hold a valid{' '}
          <Link to="/gas-safety-guide" className="text-blue-800 font-semibold hover:underline">CP12 Gas Safety Certificate</Link> — and combining both in a single visit (our Landlord Deal at £100) is the most efficient way to stay compliant.
        </p>
        <p className="text-gray-700 mb-8">
          The best time to book is late summer or early autumn — before the heating season starts and engineer availability is at its lowest.
        </p>

        <h2 id="section-what-happens-if-my-boiler-fails" className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Happens If My Boiler Fails Its Service?</h2>
        <p className="text-gray-700 mb-4">
          If a fault is found during the service, you have two options:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
            <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2"><AlertTriangle size={18} /> Minor issue</h3>
            <p className="text-amber-700 text-sm">A worn seal, a slightly underperforming component, or an advisory item. The boiler is still safe to use and a repair can be scheduled at your convenience. We'll quote before touching anything.</p>
          </div>
          <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
            <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2"><AlertTriangle size={18} /> Safety-critical issue</h3>
            <p className="text-red-700 text-sm">A cracked heat exchanger, CO production, or a severely deteriorated flue. In this case we are required by Gas Safe regulations to advise you to stop using the boiler until it is repaired or replaced. We never condemn a boiler unnecessarily.</p>
          </div>
        </div>

        <h2 id="section-faqs" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-10">
          {[
            { q: 'Can I service my own boiler?', a: 'No. Any work on a gas appliance must be carried out by a Gas Safe registered engineer. Attempting to service your own boiler is illegal and extremely dangerous.' },
            { q: 'How do I know if my boiler has been serviced?', a: 'Your boiler should have a sticker or label with the service date and engineer\'s Gas Safe registration number. You can verify any engineer at gassaferegister.co.uk.' },
            { q: 'Does a boiler service include bleeding radiators?', a: 'No — a boiler service focuses on the boiler itself. Radiator bleeding is a separate task, though our engineers will advise if they notice symptoms of airlocks or system pressure issues during the visit.' },
            { q: 'What\'s the difference between a service and a repair?', a: 'A service is a planned, preventative inspection. A repair is reactive — fixing a specific fault. Services catch problems before they become repairs.' },
            { q: 'How do I find a Gas Safe engineer in Worcester?', a: 'You can search the official Gas Safe Register at gassaferegister.co.uk using your postcode to find registered engineers in Worcester and Worcestershire. Always ask to see the engineer\'s Gas Safe ID card before any work begins. Blue Flame Gas Services are Gas Safe registered and cover the full Worcester area.' },
            { q: 'What is the best time of year to service a boiler?', a: 'Late summer or early autumn — typically August to October — is ideal. This is before the heating season begins, so any faults found can be fixed before you depend on the boiler for warmth. Engineers are also more available and waiting times are shorter than in winter, when emergency callouts dominate the diary.' },
            { q: 'Does a boiler service cover breakdown repair?', a: 'No — a service is a planned inspection and maintenance visit, not a repair. If a fault is found during the service, we will advise you of the issue and provide a quote for the repair separately. Think of it like a car MOT: the test identifies problems, but fixing them is a separate job.' },
          ].map((faq, i) => (
            <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-10 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/blog/carbon-monoxide-safety" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wide">Gas Safety</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Carbon Monoxide: The Silent Killer Every Homeowner Must Know About</p>
            </Link>
            <Link to="/gas-safety-guide" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Gas Safety</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Worcester Landlord Gas Safety Guide (CP12)</p>
            </Link>
            <Link to="/blog/signs-boiler-needs-replacing" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">7 Warning Signs Your Boiler Needs Replacing</p>
            </Link>
          </div>
        </div>

        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Annual Boiler Service</h2>
          <p className="text-blue-200 mb-2">Gas Safe registered. From £60. Worcester and Worcestershire.</p>
          <p className="text-blue-200 mb-6">Landlords: service + CP12 certificate for <strong>£100</strong> (saving £20).</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">Book a Service — from £60</Link>
            <a href="tel:07480561846" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> 07480 561 846
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
