import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

export const BLOG_POSTS = [
  {
    slug: 'boiler-cost-worcester',
    title: 'How Much Does a New Boiler Cost in Worcester? (2026 Price Guide)',
    excerpt: 'Complete breakdown of new boiler installation costs in Worcester and Worcestershire — including supply, fit, and what affects the final price.',
    date: '2026-03-07',
    readTime: '6 min read',
    category: 'Boiler Installation',
  },
  {
    slug: 'signs-boiler-needs-replacing',
    title: '7 Warning Signs Your Boiler Needs Replacing',
    excerpt: 'Is your boiler trying to tell you something? These are the seven warning signs Worcestershire homeowners should never ignore.',
    date: '2026-03-07',
    readTime: '5 min read',
    category: 'Boiler Advice',
  },
  {
    slug: 'carbon-monoxide-safety',
    title: 'Carbon Monoxide: The Silent Killer Every Homeowner Must Know About',
    excerpt: 'Carbon monoxide is odourless, colourless, and deadly. Here\'s what every Worcester homeowner and landlord needs to know to stay safe.',
    date: '2026-03-07',
    readTime: '5 min read',
    category: 'Gas Safety',
  },
  {
    slug: 'worcester-bosch-vs-ideal-boilers',
    title: 'Worcester Bosch vs Ideal Boilers: Which Is Best for Your Home?',
    excerpt: 'We compare two of the UK\'s most popular boiler brands head-to-head to help you make the right choice for your Worcester property.',
    date: '2026-03-07',
    readTime: '7 min read',
    category: 'Boiler Comparison',
  },
  {
    slug: 'how-to-bleed-a-radiator',
    title: 'How to Bleed a Radiator: Step-by-Step Guide (No Plumber Needed)',
    excerpt: 'Cold spots at the top of your radiators? Bleeding them yourself takes 5 minutes and can cut your heating bills. Here\'s exactly how to do it.',
    date: '2026-03-07',
    readTime: '4 min read',
    category: 'DIY Heating Tips',
  },
];

export const BADGE_CLASS: Record<string, string> = {
  'Boiler Installation': 'bg-orange-100 text-orange-800',
  'Boiler Advice':       'bg-amber-100 text-amber-800',
  'Gas Safety':          'bg-red-100 text-red-800',
  'Boiler Comparison':   'bg-slate-100 text-slate-700',
  'DIY Heating Tips':    'bg-emerald-100 text-emerald-800',
};

export default function Blog() {
  return (
    <div className="bg-white animate-fadeIn">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-3">Expert Advice</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Heating & Gas Safety Blog</h1>
          <p className="text-slate-300 text-xl max-w-2xl">
            Practical guides and expert advice from Blue Flame's Gas Safe engineers in Worcester.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 flex flex-col flex-grow">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide ${BADGE_CLASS[post.category] ?? 'bg-slate-100 text-slate-700'}`}>
                  {post.category}
                </span>
                <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <span className="flex items-center gap-1 text-red-700 font-bold">Read more <ArrowRight size={12} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Need help with your boiler?</h2>
          <p className="text-slate-300 mb-6">Gas Safe registered engineers covering Worcester and Worcestershire. Available 24/7 for emergencies.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-red-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 transition-colors">
              Book a Service
            </Link>
            <a href="tel:07480561846" className="bg-white text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-slate-100 transition-colors">
              Call 07480 561 846
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
