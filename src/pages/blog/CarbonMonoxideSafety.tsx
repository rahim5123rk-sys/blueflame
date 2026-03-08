import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Phone, ShieldCheck, ExternalLink, ChevronRight, Info, Play } from 'lucide-react';

function COSymptomsInfographic() {
  return (
    <div className="mb-10">
      <svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-2xl border border-red-100 bg-red-50">
        {/* Title */}
        <text x="320" y="28" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#991b1b">Common Carbon Monoxide Poisoning Symptoms</text>

        {/* Headache */}
        <circle cx="80" cy="100" r="36" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
        <text x="80" y="93" textAnchor="middle" fontFamily="sans-serif" fontSize="20">🤕</text>
        <text x="80" y="113" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#991b1b" fontWeight="bold">Headache</text>
        <text x="80" y="155" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">Persistent &amp;</text>
        <text x="80" y="166" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">throbbing</text>

        {/* Dizziness */}
        <circle cx="213" cy="100" r="36" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
        <text x="213" y="93" textAnchor="middle" fontFamily="sans-serif" fontSize="20">😵</text>
        <text x="213" y="113" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#991b1b" fontWeight="bold">Dizziness</text>
        <text x="213" y="155" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">Feeling faint</text>
        <text x="213" y="166" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">or unsteady</text>

        {/* Nausea */}
        <circle cx="347" cy="100" r="36" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
        <text x="347" y="93" textAnchor="middle" fontFamily="sans-serif" fontSize="20">🤢</text>
        <text x="347" y="113" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#991b1b" fontWeight="bold">Nausea</text>
        <text x="347" y="155" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">Vomiting &amp;</text>
        <text x="347" y="166" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">stomach pain</text>

        {/* Confusion */}
        <circle cx="480" cy="100" r="36" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
        <text x="480" y="93" textAnchor="middle" fontFamily="sans-serif" fontSize="20">😶</text>
        <text x="480" y="113" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#991b1b" fontWeight="bold">Confusion</text>
        <text x="480" y="155" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">Disorientation</text>
        <text x="480" y="166" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">&amp; memory loss</text>

        {/* Breathlessness */}
        <circle cx="587" cy="100" r="36" fill="#fecaca" stroke="#ef4444" strokeWidth="2" />
        <text x="587" y="93" textAnchor="middle" fontFamily="sans-serif" fontSize="20">😮‍💨</text>
        <text x="587" y="113" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#991b1b" fontWeight="bold">Breathlessness</text>
        <text x="587" y="155" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">Shortness</text>
        <text x="587" y="166" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#6b7280">of breath</text>
      </svg>
      <p className="text-xs text-gray-500 mt-2 text-center">CO symptoms mimic flu but without a raised temperature — if symptoms ease when you leave the property, call 999.</p>
    </div>
  );
}

export default function CarbonMonoxideSafety() {
  return (
    <article className="bg-white animate-fadeIn">

      <header className="bg-red-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-red-200 text-sm font-bold hover:underline mb-4 inline-block">← Back to Blog</Link>
          <span className="inline-block bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide flex items-center gap-1 w-fit">
            <AlertTriangle size={12} /> Gas Safety
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Carbon Monoxide: The Silent Killer Every Homeowner Must Know About
          </h1>
          <p className="text-red-200 text-lg">By Blue Flame Gas Services · March 2026 · 5 min read</p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">

        <div className="bg-red-50 border-2 border-red-600 p-6 rounded-xl mb-10 flex gap-4">
          <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <p className="font-bold text-red-800 text-lg mb-1">If you suspect a CO leak right now</p>
            <p className="text-red-700">Stop reading, leave the property immediately, call 999 and the National Gas Emergency Service on <strong>0800 111 999</strong>. Do not re-enter until cleared by emergency services.</p>
          </div>
        </div>

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Carbon monoxide (CO) kills around <strong>50 people in the UK every year</strong> and sends hundreds more to hospital. It has no smell, no colour, and no taste. Without a detector, you won't know it's there until it's too late.
        </p>

        <nav className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Info size={18} className="text-blue-800" /> In This Article</p>
          <ol className="space-y-2">
            {[
              ['section-what-is-co', 'What is Carbon Monoxide?'],
              ['section-symptoms', 'Symptoms of Carbon Monoxide Poisoning'],
              ['section-warning-signs', 'Warning Signs of a CO Leak From Your Boiler'],
              ['section-co-alarms', 'Carbon Monoxide Alarms — Are They Mandatory?'],
              ['section-prevention', 'How to Prevent Carbon Monoxide Poisoning'],
              ['section-resources', 'Useful External Resources'],
              ['section-faq', 'Frequently Asked Questions'],
            ].map(([id, title]) => (
              <li key={id}><a href={`#${id}`} className="flex items-center gap-2 text-blue-800 hover:underline text-sm font-medium"><ChevronRight size={14} />{title}</a></li>
            ))}
          </ol>
        </nav>

        <h2 id="section-what-is-co" className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is Carbon Monoxide?</h2>
        <p className="text-gray-700 mb-4">
          Carbon monoxide is produced when fuels — gas, oil, wood, coal — burn without enough oxygen (incomplete combustion). A properly maintained and correctly ventilated gas appliance produces almost no CO. A faulty, blocked, or poorly serviced appliance can produce dangerous levels.
        </p>
        <p className="text-gray-700 mb-8">
          Sources in the home include: gas boilers, gas fires, gas cookers, open fireplaces, wood-burning stoves, and portable gas heaters.
        </p>

        <h2 id="section-symptoms" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Symptoms of Carbon Monoxide Poisoning</h2>
        <p className="text-gray-700 mb-4">CO symptoms are often mistaken for flu — but unlike flu, CO poisoning does <em>not</em> cause a fever. Watch for:</p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {['Headache', 'Dizziness', 'Nausea and vomiting', 'Shortness of breath', 'Confusion or disorientation', 'Chest pain', 'Loss of consciousness', 'Feeling better when away from home'].map((symptom) => (
            <div key={symptom} className="flex items-center gap-3 bg-red-50 p-3 rounded-lg border border-red-100">
              <AlertTriangle className="text-red-500 flex-shrink-0" size={16} />
              <span className="text-gray-700 text-sm font-medium">{symptom}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm italic mb-8">
          Important: if everyone in the household (including pets) feels better when they leave the property, CO poisoning is very likely. Seek medical attention immediately and do not return until a Gas Safe engineer has inspected your appliances.
        </p>

        <COSymptomsInfographic />

        <div className="mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{paddingBottom: '56.25%'}}>
            <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/PLACEHOLDER_CO_SAFETY" title="Carbon Monoxide Safety Awareness Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><Play size={14} className="text-blue-800" /> Carbon monoxide safety awareness — what every homeowner needs to know</p>
        </div>

        <h2 id="section-warning-signs" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Warning Signs of a CO Leak From Your Boiler</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Yellow or orange flame instead of a crisp blue flame',
            'Increased condensation inside windows near the boiler',
            'Dark, sooty staining around the boiler or appliance',
            'Pilot light keeps blowing out',
            'Boiler makes unusual sounds (banging, popping)',
            'You or family members feel unwell only when at home',
          ].map((sign) => (
            <li key={sign} className="flex items-start gap-3 text-gray-700">
              <AlertTriangle className="text-orange-500 mt-1 flex-shrink-0" size={18} />
              {sign}
            </li>
          ))}
        </ul>

        <div className="bg-red-600 text-white p-6 rounded-xl mb-10">
          <p className="font-bold text-lg mb-1">Yellow flame = danger</p>
          <p className="text-red-100">A yellow or orange flame on any gas appliance is a serious safety warning. Turn the appliance off, do not use it, and call a Gas Safe registered engineer immediately.</p>
        </div>

        <h2 id="section-co-alarms" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Carbon Monoxide Alarms — Are They Mandatory?</h2>
        <p className="text-gray-700 mb-4">
          Since October 2022, UK law requires a carbon monoxide alarm in any room containing a fixed combustion appliance (including gas boilers and gas fires) in all rented properties. This applies to all landlords in Worcester and across England.
        </p>
        <p className="text-gray-700 mb-4">
          For homeowners, CO alarms are not legally required but are <strong>strongly recommended</strong> — they cost £15–£30 and save lives.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Where to place CO alarms</h3>
        <ul className="space-y-2 mb-8">
          {[
            'In the same room as the boiler or gas appliance',
            'In every bedroom — CO symptoms can occur while sleeping',
            'On every floor of the property',
            'At head height (CO disperses evenly, unlike smoke which rises)',
          ].map((tip) => (
            <li key={tip} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {tip}
            </li>
          ))}
        </ul>

        <h2 id="section-prevention" className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Prevent Carbon Monoxide Poisoning</h2>
        <div className="space-y-4 mb-10">
          {[
            { title: 'Annual boiler service', body: <span>A Gas Safe engineer will check your burner, heat exchanger, flue, and ventilation — the components most likely to cause CO production if faulty. This is the single most effective prevention measure. Landlords in Worcestershire also have a legal obligation — see our <Link to="/gas-safety-guide" className="text-blue-800 font-semibold hover:underline">Landlord Gas Safety Guide</Link>.</span> },
            { title: 'Never block or cover ventilation', body: 'Air vents around boilers and gas fires exist to allow combustion. Covering them, even partially, can cause dangerous CO build-up.' },
            { title: 'Never use outdoor appliances indoors', body: 'Barbecues, portable gas heaters, and generators should never be used indoors or in enclosed spaces. They produce lethal quantities of CO.' },
            { title: 'Check your flue', body: 'Birds\' nests, debris, or deterioration can block a boiler flue. Have it inspected annually as part of your boiler service.' },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
              <ShieldCheck className="text-blue-800 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="section-resources" className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><ExternalLink size={16} className="text-blue-800" /> Useful Resources</p>
          <ul className="space-y-2">
            <li><a href="https://www.gassaferegister.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Gas Safe Register — Find a registered engineer</a></li>
            <li><a href="https://www.co-awareness.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> CO Awareness — UK charity dedicated to CO safety education</a></li>
            <li><a href="https://www.nhs.uk/conditions/carbon-monoxide-poisoning/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> NHS — Carbon monoxide poisoning: symptoms &amp; treatment</a></li>
          </ul>
        </div>

        <h2 id="section-faq" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            {
              q: 'How quickly can carbon monoxide kill you?',
              a: 'At high concentrations (above 1,000 ppm), carbon monoxide can be fatal within minutes. At lower levels (around 200 ppm), it causes headaches and dizziness within a couple of hours. Even low-level, long-term exposure can cause serious health damage. This is why a working CO alarm is essential — it detects dangerous levels before they become life-threatening.'
            },
            {
              q: 'Can you test for carbon monoxide without an alarm?',
              a: 'No reliable way exists to detect CO without a detector. CO is completely colourless and odourless — you cannot smell, see, or taste it. Symptoms can be mistaken for tiredness or flu. The only safe way to know is to have a working, certified CO alarm installed near every gas appliance and in every bedroom.'
            },
            {
              q: 'Do all boilers produce carbon monoxide?',
              a: 'All gas-burning appliances produce some CO as a by-product of combustion, but a correctly installed, properly maintained boiler should vent all CO safely outside via the flue. Dangerous CO levels build up inside when a boiler is faulty, poorly serviced, or the flue is blocked or damaged.'
            },
            {
              q: 'Is carbon monoxide heavier or lighter than air?',
              a: 'Carbon monoxide has almost exactly the same density as air (it is very slightly lighter), which means it disperses evenly throughout a room rather than sinking to the floor or rising to the ceiling. This is why CO alarms should be placed at head height — roughly 1–1.5 metres from the floor — not at ceiling level like smoke alarms.'
            },
            {
              q: 'What should I do if my CO alarm goes off?',
              a: 'Immediately stop what you are doing and get everyone (including pets) out of the property. Do not stop to turn appliances off or collect belongings. Once outside, call 999 and the National Gas Emergency Service on 0800 111 999. Do not re-enter the property until emergency services have declared it safe. Seek medical attention even if you feel fine — CO can cause hidden damage.'
            },
            {
              q: 'How often should I test my CO alarm?',
              a: 'Test your CO alarm using the test button at least once a month. Replace the batteries annually (unless it is a sealed unit) and replace the entire alarm according to the manufacturer\'s guidance — typically every 5–7 years. CO alarms have a limited sensor lifespan and will stop being effective even if they appear to work. Always buy an alarm that meets British Standard EN 50291.'
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
            <Link to="/blog/signs-boiler-needs-replacing" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">7 Warning Signs Your Boiler Needs Replacing</p>
            </Link>
            <Link to="/gas-safety-guide" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Gas Safety</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Worcester Landlord Gas Safety Guide (CP12)</p>
            </Link>
            <Link to="/blog/annual-boiler-service-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Servicing</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Annual Boiler Service: What's Included & Why It Matters</p>
            </Link>
          </div>
        </div>

        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Book Your Annual Boiler Service</h2>
          <p className="text-blue-200 mb-2">An annual Gas Safe inspection is the most effective way to prevent carbon monoxide poisoning.</p>
          <p className="text-blue-200 mb-6">Boiler servicing from <strong>£60</strong> across Worcester and Worcestershire.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">
              Book a Service — from £60
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
