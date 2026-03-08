import { Link } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';

export default function SmartThermostatGuide() {
  return (
    <article className="bg-white animate-fadeIn">

      {/* HERO */}
      <header className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-sky-400 text-sm font-bold hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
          <span className="inline-block bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Energy Saving</span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Smart Thermostats: Are They Worth It? A Homeowner's Guide
          </h1>
          <p className="text-blue-200 text-lg">
            By Blue Flame Gas Services &middot; March 2026 &middot; 7 min read
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14 prose prose-lg">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Smart thermostats have become one of the most popular home upgrades in the UK, promising lower energy bills and greater comfort. But are they really worth the investment? Here's an honest, practical guide from our Gas Safe engineers.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is a Smart Thermostat?</h2>
        <p className="text-gray-700 mb-4">
          A smart thermostat replaces your existing room thermostat and connects to your home Wi-Fi. It lets you control your heating from your phone, set schedules, and — depending on the model — learn your routine automatically.
        </p>
        <p className="text-gray-700 mb-6">
          Unlike basic programmable thermostats, smart thermostats offer features like <strong>geofencing</strong> (turning heating off when you leave), <strong>weather compensation</strong> (adjusting for outdoor temperature), and <strong>zone control</strong> (heating individual rooms).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Popular Smart Thermostats Compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left rounded-tl-lg">Thermostat</th>
                <th className="p-3 text-left">Price (approx.)</th>
                <th className="p-3 text-left">Best For</th>
                <th className="p-3 text-left rounded-tr-lg">Key Feature</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Hive Active Heating', '£150–£250', 'Easy setup', 'App control & scheduling'],
                ['Nest Learning', '£200–£280', 'Hands-off users', 'Auto-learns your routine'],
                ['Tado V3+', '£150–£350', 'Energy savers', 'Geofencing & weather adapt'],
                ['Drayton Wiser', '£120–£300', 'Multi-zone', 'Room-by-room control'],
                ['Honeywell Evohome', '£200–£500+', 'Large homes', 'Advanced zone control'],
              ].map(([name, price, best, feature], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-medium border-b border-gray-100">{name}</td>
                  <td className="p-3 border-b border-gray-100">{price}</td>
                  <td className="p-3 border-b border-gray-100">{best}</td>
                  <td className="p-3 border-b border-gray-100 font-bold text-blue-800">{feature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm italic mb-8">Prices include the thermostat unit only. Professional installation typically adds £60–£120.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Much Can a Smart Thermostat Save?</h2>
        <p className="text-gray-700 mb-4">
          The Energy Saving Trust estimates that a properly used smart thermostat can save a typical UK household <strong>£75–£150 per year</strong> on gas bills. However, the actual savings depend on several factors:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            'How well you currently control your heating — if you already use a timer and thermostat effectively, savings will be smaller',
            'Whether you use features like geofencing and adaptive scheduling',
            'Your home\'s insulation — poorly insulated homes lose heat faster regardless of controls',
            'How many hours you\'re away from home — the more time away, the more savings from auto-off features',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl mb-10">
          <p className="font-bold text-blue-800 text-lg mb-1">The Honest Answer</p>
          <p className="text-blue-700">If you're currently running your heating on a basic timer and rarely adjust it, a smart thermostat will almost certainly save you money. If you're already diligent about turning your heating off when you leave and adjusting the thermostat, the savings will be more modest — but the <strong>convenience factor</strong> alone is worth it for most people.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Benefits Beyond Saving Money</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Control heating from anywhere via your phone — turn it on before you get home',
            'Set different temperatures for different times of day without a complicated programmer',
            'Get alerts if your boiler develops a fault or the temperature drops too low (frost protection)',
            'Track your energy usage over time to spot patterns and reduce waste',
            'Some models integrate with Alexa or Google Home for voice control',
            'Room-by-room control with smart TRVs means you only heat rooms you\'re using',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Will a Smart Thermostat Work with My Boiler?</h2>
        <p className="text-gray-700 mb-4">
          Most smart thermostats are compatible with the majority of combi, system, and heat-only boilers — including Worcester Bosch, Ideal, Vaillant, Baxi, and other common UK brands.
        </p>
        <p className="text-gray-700 mb-4">
          However, there are a few things to check:
        </p>
        <ul className="space-y-2 mb-6 text-gray-700">
          <li><strong>Wiring:</strong> Most need a switched live (L), neutral (N), and common (COM) connection. Older systems with only two wires may need an adapter or additional wiring.</li>
          <li><strong>OpenTherm:</strong> Some smart thermostats support OpenTherm — a digital protocol that allows the thermostat to modulate the boiler's flame, improving efficiency by 6–8%. Not all boilers support this.</li>
          <li><strong>Wi-Fi signal:</strong> The thermostat needs a reliable Wi-Fi connection. If your router is far from the boiler, you may need a Wi-Fi extender.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What About Smart Radiator Valves (TRVs)?</h2>
        <p className="text-gray-700 mb-4">
          Smart TRVs replace the thermostatic valves on individual radiators, allowing you to set different temperatures in each room from your phone. They work alongside your smart thermostat to create a <strong>multi-zone heating system</strong>.
        </p>
        <p className="text-gray-700 mb-6">
          Smart TRVs cost <strong>£40–£70 each</strong> and are typically self-installed. Brands like Tado, Drayton Wiser, and Honeywell Evohome offer full ecosystems with matching smart TRVs.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Professional Installation vs DIY</h2>
        <p className="text-gray-700 mb-4">
          Some smart thermostats (like Hive and Nest) are designed for professional installation and include an engineer visit in the purchase price. Others (like Tado and Wiser) can be self-installed if you're comfortable with basic wiring.
        </p>
        <p className="text-gray-700 mb-6">
          We recommend professional installation if:
        </p>
        <ul className="space-y-2 mb-8 text-gray-700">
          <li>Your current thermostat wiring is unfamiliar to you</li>
          <li>You want OpenTherm connectivity for maximum efficiency</li>
          <li>You're combining the install with a boiler service or other work</li>
          <li>You want the thermostat positioned in a different location</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: 'Do smart thermostats work without Wi-Fi?', a: 'Most will continue to function as a basic thermostat if Wi-Fi goes down — you just lose the app control and smart features until it reconnects. Your heating won\'t stop working.' },
            { q: 'Can I install a smart thermostat with a combi boiler?', a: 'Yes — combi boilers are fully compatible with all major smart thermostat brands. If your combi supports OpenTherm, choose a thermostat that supports it for even better efficiency.' },
            { q: 'How long does a smart thermostat take to install?', a: 'Professional installation typically takes 30–60 minutes. DIY installation can take 15–45 minutes if the wiring is straightforward.' },
            { q: 'Will a smart thermostat void my boiler warranty?', a: 'No — installing a smart thermostat doesn\'t affect your boiler warranty, provided it\'s wired correctly. We always install to manufacturer specifications.' },
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
            <Link to="/blog/radiator-not-heating-up" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Radiator Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Radiator Not Heating Up? Here's How to Fix It</p>
            </Link>
            <Link to="/blog/boiler-cost-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Installation</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How Much Does a New Boiler Cost in Worcester?</p>
            </Link>
            <Link to="/blog/annual-boiler-service-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Boiler Servicing</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Annual Boiler Service: What's Included?</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Want a Smart Thermostat Installed?</h2>
          <p className="text-blue-200 mb-6">We supply and install all major smart thermostat brands. Often combined with a boiler service for a discounted rate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">
              Get a Quote
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
