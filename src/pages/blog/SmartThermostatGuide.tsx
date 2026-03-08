import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ExternalLink, ChevronRight, Info, Play, Zap } from 'lucide-react';

function SavingsChart() {
  const bars = [
    { label: 'Basic timer', pct: 100, saving: '£0', color: '#e5e7eb' },
    { label: 'Programmed timer', pct: 85, saving: '~£50/yr', color: '#bfdbfe' },
    { label: 'Smart thermostat', pct: 70, saving: '~£130/yr', color: '#93c5fd' },
    { label: 'Smart + TRVs', pct: 60, saving: '~£200/yr', color: '#3b82f6' },
    { label: 'Smart + TRVs + OpenTherm', pct: 52, saving: '~£250/yr', color: '#1d4ed8' },
  ];
  const maxH = 140;
  return (
    <div className="my-10">
      <p className="font-bold text-gray-900 mb-4 text-center text-lg">Estimated Annual Gas Bill Reduction by Control Type</p>
      <svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto block" aria-label="Smart thermostat savings comparison chart">
        {/* Y axis */}
        <line x1="50" y1="20" x2="50" y2="185" stroke="#d1d5db" strokeWidth="1.5" />
        {/* X axis */}
        <line x1="50" y1="185" x2="410" y2="185" stroke="#d1d5db" strokeWidth="1.5" />
        {/* Y label */}
        <text x="14" y="105" textAnchor="middle" fontSize="10" fill="#6b7280" transform="rotate(-90 14 105)">Relative bill</text>
        {bars.map((bar, i) => {
          const x = 65 + i * 70;
          const h = (bar.pct / 100) * maxH;
          const y = 185 - h;
          return (
            <g key={bar.label}>
              <rect x={x} y={y} width="45" height={h} rx="4" fill={bar.color} />
              <text x={x + 22} y={y - 6} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1d4ed8">{bar.saving}</text>
              <text x={x + 22} y={200} textAnchor="middle" fontSize="8" fill="#374151" style={{ dominantBaseline: 'hanging' }}>{bar.label.split(' ').slice(0, 2).join(' ')}</text>
              <text x={x + 22} y={210} textAnchor="middle" fontSize="8" fill="#374151">{bar.label.split(' ').slice(2).join(' ')}</text>
            </g>
          );
        })}
        {/* 100% baseline label */}
        <text x="40" y="188" textAnchor="end" fontSize="9" fill="#9ca3af">100%</text>
      </svg>
      <p className="text-sm text-gray-500 text-center mt-3">Estimates based on Energy Saving Trust data for a typical 3-bed UK home. Actual savings vary.</p>
    </div>
  );
}

export default function SmartThermostatGuide() {
  return (
    <article className="bg-white animate-fadeIn">

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-14">

        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Smart thermostats have become one of the most popular home upgrades in the UK, promising lower energy bills and greater comfort. But are they really worth the investment? Here's an honest, practical guide from our Gas Safe engineers — including what to look for, what to avoid, and whether your boiler is compatible.
        </p>

        {/* TABLE OF CONTENTS */}
        <nav className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Info size={18} className="text-blue-800" /> In This Guide</p>
          <ol className="space-y-2">
            {[
              ['section-what', 'What Is a Smart Thermostat?'],
              ['section-savings', 'How Much Can a Smart Thermostat Save?'],
              ['section-compare', 'Popular Smart Thermostats Compared'],
              ['section-benefits', 'Benefits Beyond Saving Money'],
              ['section-compatible', 'Will It Work With My Boiler?'],
              ['section-trvs', 'What About Smart Radiator Valves?'],
              ['section-install', 'Professional Installation vs DIY'],
              ['section-faqs', 'Frequently Asked Questions'],
            ].map(([id, title]) => (
              <li key={id}><a href={`#${id}`} className="flex items-center gap-2 text-blue-800 hover:underline text-sm font-medium"><ChevronRight size={14} />{title}</a></li>
            ))}
          </ol>
        </nav>

        <h2 id="section-what" className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is a Smart Thermostat?</h2>
        <p className="text-gray-700 mb-4">
          A smart thermostat replaces your existing room thermostat and connects to your home Wi-Fi. It lets you control your heating from your phone, set schedules, and — depending on the model — learn your routine automatically.
        </p>
        <p className="text-gray-700 mb-6">
          Unlike basic programmable thermostats, smart thermostats offer features like <strong>geofencing</strong> (turning heating off when you leave home), <strong>weather compensation</strong> (adjusting output for outdoor temperature), and <strong>zone control</strong> (heating individual rooms independently).
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mb-8">
          <p className="font-bold text-blue-800 flex items-center gap-2"><Zap size={16} /> Key insight</p>
          <p className="text-blue-700 text-sm mt-1">The biggest savings come not from the thermostat itself, but from how you use it. A smart thermostat paired with geofencing and a proper heating schedule can cut your heating time by 30–40% compared to a basic on/off timer.</p>
        </div>

        <h2 id="section-savings" className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Much Can a Smart Thermostat Save?</h2>
        <p className="text-gray-700 mb-4">
          The Energy Saving Trust estimates that a properly used smart thermostat can save a typical UK household <strong>£75–£150 per year</strong> on gas bills. With smart TRVs added for room-by-room control, savings can reach <strong>£150–£250 per year</strong>. However, the actual savings depend on several factors:
        </p>
        <ul className="space-y-3 mb-8">
          {[
            'How well you currently control your heating — if you already use a timer and thermostat effectively, savings will be smaller',
            'Whether you actively use features like geofencing and adaptive scheduling (many people install smart thermostats but never configure them properly)',
            'Your home\'s insulation — poorly insulated homes lose heat faster regardless of controls',
            'How many hours you\'re away from home — the more time away, the more you save from auto-off features',
            'Whether your boiler supports OpenTherm modulation — this can add a further 6–8% efficiency improvement',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <SavingsChart />

        <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl mb-10">
          <p className="font-bold text-blue-800 text-lg mb-1">The Honest Answer</p>
          <p className="text-blue-700">If you're currently running your heating on a basic timer and rarely adjust it, a smart thermostat will almost certainly save you money and pay for itself within 2–3 years. If you're already diligent about turning your heating off when you leave and adjusting the thermostat, the savings will be more modest — but the <strong>convenience factor</strong> alone is worth it for most people.</p>
        </div>

        {/* YouTube embed */}
        <div className="mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/PLACEHOLDER_SMARTTHERMO_ID"
              title="Smart thermostats explained — are they worth it?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><Play size={14} className="text-blue-800" /> Video: Hive vs Nest vs Tado — which smart thermostat is best for UK homes?</p>
        </div>

        <h2 id="section-compare" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Popular Smart Thermostats Compared</h2>
        <div className="overflow-x-auto mb-4">
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
        <p className="text-gray-600 text-sm italic mb-8">Prices include the thermostat unit only. Professional installation typically adds £60–£120. Prices correct March 2026.</p>

        <h2 id="section-benefits" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Benefits Beyond Saving Money</h2>
        <ul className="space-y-3 mb-8">
          {[
            'Control heating from anywhere via your phone — turn it on before you get home',
            'Set different temperatures for different times of day without a complicated programmer',
            'Get alerts if your boiler develops a fault or the temperature drops too low (frost protection)',
            'Track your energy usage over time to spot wasteful patterns',
            'Some models integrate with Alexa or Google Home for voice control',
            'Room-by-room control with smart TRVs means you only heat rooms you\'re using',
            'Holiday mode — away for a week? Tell the app and it adjusts automatically',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <h2 id="section-compatible" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Will a Smart Thermostat Work with My Boiler?</h2>
        <p className="text-gray-700 mb-4">
          Most smart thermostats are compatible with the majority of combi, system, and heat-only boilers — including Worcester Bosch, Ideal, Vaillant, Baxi, and other common UK brands. There are a few things to check before buying:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            { label: 'Wiring', detail: 'Most need a switched live (L), neutral (N), and common (COM) connection. Older systems with only two wires may need an adapter or additional wiring — not always obvious from the product description.' },
            { label: 'OpenTherm compatibility', detail: 'Some smart thermostats support OpenTherm — a digital protocol that allows the thermostat to modulate the boiler\'s flame, improving efficiency by 6–8%. Not all boilers support this. Worcester Bosch Greenstar and Vaillant ecoTEC models typically do.' },
            { label: 'Wi-Fi signal strength', detail: 'The thermostat needs a reliable Wi-Fi connection. If your router is far from where the thermostat will be mounted, you may need a Wi-Fi extender or mesh network node nearby.' },
            { label: 'S-plan vs Y-plan systems', detail: 'Homes with a hot water cylinder (system or heat-only boilers) may have a more complex wiring layout. A heating engineer can confirm compatibility and wire it correctly.' },
          ].map((item, i) => (
            <li key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 mb-1">{item.label}</p>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </li>
          ))}
        </ul>

        <h2 id="section-trvs" className="text-2xl font-bold text-gray-900 mt-10 mb-4">What About Smart Radiator Valves (TRVs)?</h2>
        <p className="text-gray-700 mb-4">
          Smart TRVs replace the thermostatic valves on individual radiators, allowing you to set different temperatures in each room from your phone. They work alongside your smart thermostat to create a <strong>multi-zone heating system</strong> — one of the most effective ways to reduce heating bills in larger homes.
        </p>
        <p className="text-gray-700 mb-4">
          Smart TRVs cost <strong>£40–£70 each</strong> and are typically self-installed (no plumber needed — they screw onto the existing radiator valve body). Brands like Tado, Drayton Wiser, and Honeywell Evohome offer full ecosystems with matching smart TRVs.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mb-8">
          <p className="font-bold text-amber-800 mb-1">Important: bypass valve needed</p>
          <p className="text-amber-700 text-sm">When fitting smart TRVs throughout the house, you must ensure there's always a bypass available for the boiler pump — otherwise, if all TRVs close simultaneously, the pump can overheat and fail. A good heating engineer will confirm this is in order when fitting your system.</p>
        </div>

        <h2 id="section-install" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Professional Installation vs DIY</h2>
        <p className="text-gray-700 mb-4">
          Some smart thermostats (like Hive) are designed for professional installation and include an engineer visit in the purchase price. Others (like Tado and Wiser) can be self-installed if you're comfortable with basic wiring.
        </p>
        <p className="text-gray-700 mb-4">We recommend professional installation if:</p>
        <ul className="space-y-2 mb-8 text-gray-700">
          {[
            'Your current thermostat wiring is unfamiliar to you',
            'You want OpenTherm connectivity for maximum efficiency',
            'You\'re combining the install with a boiler service or other work',
            'You want the thermostat positioned in a different location than the current one',
            'You have a system or heat-only boiler (more complex wiring)',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              {item}
            </li>
          ))}
        </ul>

        {/* External Resources */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-gray-900 mb-3 flex items-center gap-2"><ExternalLink size={16} className="text-blue-800" /> Useful Resources</p>
          <ul className="space-y-2">
            <li><a href="https://energysavingtrust.org.uk/advice/thermostats-and-heating-controls/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Energy Saving Trust — heating controls guide</a></li>
            <li><a href="https://www.gassaferegister.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Gas Safe Register — find a qualified installer</a></li>
            <li><Link to="/blog/annual-boiler-service-worcester" className="text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"><ExternalLink size={12} /> Annual boiler service — what's included and why it matters</Link></li>
          </ul>
        </div>

        <h2 id="section-faqs" className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-5 mb-10">
          {[
            { q: 'Do smart thermostats work without Wi-Fi?', a: 'Most will continue to function as a basic thermostat if Wi-Fi goes down — you just lose the app control and smart features until it reconnects. Your heating won\'t stop working.' },
            { q: 'Can I install a smart thermostat with a combi boiler?', a: 'Yes — combi boilers are fully compatible with all major smart thermostat brands. If your combi supports OpenTherm, choose a thermostat that also supports it for better efficiency and more precise temperature control.' },
            { q: 'How long does a smart thermostat take to install?', a: 'Professional installation typically takes 30–60 minutes. DIY installation can take 15–45 minutes if the wiring is straightforward. More complex setups with smart TRVs throughout the house can take 2–3 hours.' },
            { q: 'Will a smart thermostat void my boiler warranty?', a: 'No — installing a smart thermostat doesn\'t affect your boiler warranty, provided it\'s wired correctly and to manufacturer specifications. We always install following the boiler manufacturer\'s guidelines.' },
            { q: 'How much does it cost to have a smart thermostat professionally installed?', a: 'Professional installation typically costs £60–£120 for a standard thermostat swap, rising to £150–£250 if additional wiring is needed or you\'re adding multiple smart TRVs. Many suppliers (including Hive) include an engineer visit in the purchase price.' },
            { q: 'Which smart thermostat do you recommend for Worcester homes?', a: 'For most homes in Worcester and Worcestershire, we recommend the Hive Active Heating (straightforward, reliable, good UK support) or the Tado V3+ (best-in-class geofencing and energy reports). For homes with a hot water cylinder, the Drayton Wiser or Honeywell Evohome offers better multi-zone control. We supply and install all major brands.' },
            { q: 'Do I need a smart thermostat if I\'m getting a new boiler?', a: 'New boilers installed in the UK since 2022 must be paired with a time-and-temperature control device as part of Part L building regulations. A smart thermostat satisfies this requirement and gives you much better control than a basic programmer. It\'s well worth adding at the time of installation, as the wiring is already accessible.' },
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

        <div className="bg-blue-800 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Want a Smart Thermostat Installed?</h2>
          <p className="text-blue-200 mb-6">We supply and install all major smart thermostat brands across Worcester and Worcestershire. Often combined with a boiler service for a discounted rate.</p>
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
