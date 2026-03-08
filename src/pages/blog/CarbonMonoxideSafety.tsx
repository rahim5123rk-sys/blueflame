import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Phone, ShieldCheck } from 'lucide-react';

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

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is Carbon Monoxide?</h2>
        <p className="text-gray-700 mb-4">
          Carbon monoxide is produced when fuels — gas, oil, wood, coal — burn without enough oxygen (incomplete combustion). A properly maintained and correctly ventilated gas appliance produces almost no CO. A faulty, blocked, or poorly serviced appliance can produce dangerous levels.
        </p>
        <p className="text-gray-700 mb-8">
          Sources in the home include: gas boilers, gas fires, gas cookers, open fireplaces, wood-burning stoves, and portable gas heaters.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Symptoms of Carbon Monoxide Poisoning</h2>
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

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Warning Signs of a CO Leak From Your Boiler</h2>
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

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Carbon Monoxide Alarms — Are They Mandatory?</h2>
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

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Prevent Carbon Monoxide Poisoning</h2>
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
            <Link to="/blog/boiler-cost-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Installation</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How Much Does a New Boiler Cost in Worcester? (2026)</p>
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
