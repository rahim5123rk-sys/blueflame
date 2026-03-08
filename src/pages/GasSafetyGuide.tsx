import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle, AlertTriangle, FileText, Phone } from 'lucide-react';

export default function GasSafetyGuide() {
  return (
    <div className="bg-white animate-fadeIn">

      {/* HERO */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck size={32} className="text-red-400" />
            <span className="text-red-400 font-bold uppercase tracking-widest text-sm">Gas Safety Resource</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Worcester Landlord Gas Safety Guide
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Everything Worcestershire landlords need to know about gas safety certificates, boiler servicing obligations, and staying legally compliant.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16 space-y-16">

        {/* Section 1 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FileText className="text-red-700" size={28} />
            What is a CP12 Gas Safety Certificate?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A CP12 (also called a Gas Safety Certificate or Landlord Gas Safety Record) is an official document issued by a Gas Safe registered engineer after inspecting all gas appliances, pipework, and flues in a rental property.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The certificate records:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'The address of the property and each gas appliance inspected',
              'The date of inspection',
              'Any defects found and action taken',
              'The Gas Safe engineer\'s name, registration number, and signature',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl">
            <p className="text-blue-800 font-semibold">
              Blue Flame Gas Services carries out full CP12 inspections from <strong>£60</strong> across Worcester, Worcestershire, and the West Midlands.{' '}
              <Link to="/services" className="underline hover:text-red-700 transition-colors">Book online</Link> or call <a href="tel:07480561846" className="underline hover:text-red-700">07480 561 846</a>.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="text-red-700" size={28} />
            Legal Requirements for Landlords in England
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Under the <strong>Gas Safety (Installation and Use) Regulations 1998</strong>, all private landlords in England (including those in Worcestershire and the West Midlands) must:
          </p>
          <ul className="space-y-4 mb-6">
            {[
              { title: 'Annual inspection', text: <span>Have all gas appliances, pipework, and flues inspected by a Gas Safe registered engineer every 12 months. An annual service also protects against <Link to="/blog/carbon-monoxide-safety" className="text-blue-800 font-semibold hover:underline">carbon monoxide risk</Link>.</span> },
              { title: 'Provide the certificate to tenants', text: 'Give a copy of the Gas Safety Record to existing tenants within 28 days of the inspection, and to new tenants before they move in.' },
              { title: 'Keep records for two years', text: 'Retain copies of all Gas Safety Records for at least two years.' },
              { title: 'Only use Gas Safe engineers', text: 'All gas work must be carried out by an engineer registered on the Gas Safe Register. It is illegal to use an unregistered person.' },
            ].map((item) => (
              <li key={item.title} className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                <p className="text-gray-600">{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="bg-red-50 border-l-4 border-red-700 p-6 rounded-r-xl">
            <p className="text-red-800 font-semibold">
              <AlertTriangle className="inline mr-2" size={16} />
              Failure to comply can result in fines of up to <strong>£6,000 per appliance</strong> and up to six months in prison. Do not let your certificate lapse.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <ShieldCheck className="text-red-700" size={28} />
            How Often Should a Boiler Be Serviced?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Most boiler manufacturers require an annual service to keep the warranty valid. Beyond warranty requirements, annual servicing:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              <span>Ensures the boiler operates safely and does not produce dangerous <Link to="/blog/carbon-monoxide-safety" className="text-blue-800 font-semibold hover:underline">carbon monoxide</Link></span>,
              'Identifies wear and small faults before they become expensive breakdowns',
              'Maintains efficiency — a well-serviced boiler uses less gas and reduces energy bills',
              'Satisfies most landlord insurance policy requirements',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            For landlords, our <strong>Landlord Deal</strong> combines the annual boiler service and CP12 certificate in a single visit for <strong>£100 (saving £20)</strong>.{' '}
            <Link to="/services" className="text-blue-800 font-bold hover:underline">View the deal →</Link>
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens During a Gas Safety Inspection?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            A typical CP12 inspection by a Blue Flame engineer takes 30–60 minutes and covers:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Check all gas appliances for safe operation',
              'Inspect gas pipework for leaks or corrosion',
              'Test flues and ventilation for safe exhaust of gases',
              'Verify boiler pressure, heat exchanger, and controls',
              'Confirm gas meter and emergency shut-off valve are accessible',
              'Issue the signed CP12 certificate on completion',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <CheckCircle className="text-blue-800 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: 'Can I carry out a gas safety check myself?',
                a: 'No. Gas safety checks must be carried out by a Gas Safe registered engineer. It is illegal for an unregistered person to work on gas appliances in the UK.',
              },
              {
                q: 'What if my tenant refuses access for the inspection?',
                a: 'You must be able to demonstrate that you took all reasonable steps to arrange access. Keep records of all communication. In extreme cases you may need to seek legal advice. It is still your legal responsibility to ensure the check is completed.',
              },
              {
                q: 'Does the CP12 cover all appliances or just the boiler?',
                a: 'A CP12 covers all gas appliances in the property — this includes boilers, gas fires, cookers, and any other gas-powered appliances. All must be inspected.',
              },
              {
                q: 'How long does a CP12 certificate last?',
                a: 'Exactly 12 months from the date of inspection. We recommend booking your next inspection 4–6 weeks before the current certificate expires.',
              },
              {
                q: 'Do I need a CP12 for a property with no gas appliances?',
                a: 'No. If your rental property does not have any gas appliances or a gas supply, you do not need a CP12. However, if there is a gas meter or gas pipework even without appliances, you should still have it inspected.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/blog/carbon-monoxide-safety" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wide">Gas Safety</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">Carbon Monoxide: The Silent Killer Every Homeowner Must Know About</p>
            </Link>
            <Link to="/blog/signs-boiler-needs-replacing" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Boiler Advice</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">7 Warning Signs Your Boiler Needs Replacing</p>
            </Link>
            <Link to="/blog/boiler-cost-worcester" className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-800 hover:bg-blue-50 transition-colors">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Boiler Installation</span>
              <p className="font-bold text-gray-900 mt-1 text-sm">How Much Does a New Boiler Cost in Worcester? (2026)</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-800 text-white p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your CP12?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Gas Safe registered engineers covering Worcester, Worcestershire and the West Midlands. Quick turnaround and certificates issued same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-red-700 text-white font-bold py-4 px-8 rounded-xl hover:bg-red-600 transition-colors shadow-lg"
            >
              Book a CP12 — from £60
            </Link>
            <a
              href="tel:07480561846"
              className="bg-white text-blue-800 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} /> 07480 561 846
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
