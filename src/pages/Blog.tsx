import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Search, Tag, Flame } from 'lucide-react';

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
    slug: 'combi-vs-system-boiler',
    title: 'Combi Boiler vs System Boiler: Which Is Right for Your Home?',
    excerpt: 'A straightforward comparison of combi and system boilers — costs, pros and cons, and which type suits your property size and hot water demands.',
    date: '2026-03-08',
    readTime: '7 min read',
    category: 'Boiler Advice',
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
    slug: 'boiler-losing-pressure',
    title: 'Why Does My Boiler Keep Losing Pressure? Causes & Fixes',
    excerpt: 'A boiler that keeps losing pressure is one of the most common heating problems. Here are the six most likely causes and what you can do about each one.',
    date: '2026-03-08',
    readTime: '6 min read',
    category: 'Boiler Troubleshooting',
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
    slug: 'radiator-not-heating-up',
    title: 'Radiator Not Heating Up? Here\'s How to Fix It',
    excerpt: 'A complete troubleshooting guide for cold or partially-heating radiators — from bleeding and valve checks to sludge removal and system balancing.',
    date: '2026-03-08',
    readTime: '6 min read',
    category: 'Radiator Advice',
  },
  {
    slug: 'smart-thermostat-guide',
    title: 'Smart Thermostats: Are They Worth It? A Homeowner\'s Guide',
    excerpt: 'An honest look at whether smart thermostats save money, which brands to consider, and whether one will work with your boiler.',
    date: '2026-03-08',
    readTime: '7 min read',
    category: 'Energy Saving',
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
    slug: 'frozen-condensate-pipe',
    title: 'Frozen Condensate Pipe: How to Thaw It and Get Your Boiler Working Again',
    excerpt: 'Boiler stopped on a freezing day? It\'s probably a frozen condensate pipe. Here\'s how to fix it yourself in 15 minutes — and prevent it next winter.',
    date: '2026-03-08',
    readTime: '5 min read',
    category: 'Emergency Advice',
  },
  {
    slug: 'central-heating-noises',
    title: 'Noisy Boiler or Radiators? What Those Sounds Mean',
    excerpt: 'Banging pipes, gurgling radiators, a boiler that sounds like a kettle — here\'s what each noise means and when you should call an engineer.',
    date: '2026-03-08',
    readTime: '6 min read',
    category: 'Boiler Troubleshooting',
  },
  {
    slug: 'how-to-bleed-a-radiator',
    title: 'How to Bleed a Radiator: Step-by-Step Guide (No Plumber Needed)',
    excerpt: 'Cold spots at the top of your radiators? Bleeding them yourself takes 5 minutes and can cut your heating bills. Here\'s exactly how to do it.',
    date: '2026-03-07',
    readTime: '4 min read',
    category: 'DIY Heating Tips',
  },
  {
    slug: 'how-to-repressurise-a-boiler',
    title: 'How to Repressurise a Boiler: Step-by-Step Guide',
    excerpt: 'Boiler showing a low pressure warning? Here\'s how to safely top up your boiler pressure in under 10 minutes — and when to call a professional.',
    date: '2026-03-08',
    readTime: '4 min read',
    category: 'DIY Heating Tips',
  },
  {
    slug: 'what-is-a-power-flush',
    title: 'What is a Power Flush? Do You Need One? (Worcester Guide)',
    excerpt: 'Cold radiator bottoms, a noisy boiler, or slow heating? Sludge is probably the cause. Find out what a power flush is, what it costs, and whether you need one.',
    date: '2026-03-08',
    readTime: '5 min read',
    category: 'Boiler Advice',
  },
  {
    slug: 'annual-boiler-service-worcester',
    title: 'Annual Boiler Service: What\'s Included and Why You Shouldn\'t Skip It',
    excerpt: 'A boiler service isn\'t just a box-ticking exercise — it keeps your warranty valid, your gas bills down, and your family safe from carbon monoxide. Here\'s exactly what it covers.',
    date: '2026-03-08',
    readTime: '5 min read',
    category: 'Boiler Servicing',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  'Boiler Installation': 'bg-blue-100 text-blue-800',
  'Boiler Advice': 'bg-indigo-100 text-indigo-800',
  'Boiler Troubleshooting': 'bg-amber-100 text-amber-800',
  'Boiler Comparison': 'bg-purple-100 text-purple-800',
  'Boiler Servicing': 'bg-teal-100 text-teal-800',
  'Gas Safety': 'bg-red-100 text-red-800',
  'DIY Heating Tips': 'bg-green-100 text-green-800',
  'Radiator Advice': 'bg-orange-100 text-orange-800',
  'Energy Saving': 'bg-emerald-100 text-emerald-800',
  'Emergency Advice': 'bg-rose-100 text-rose-800',
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));
    cats.sort();
    return cats;
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !activeCategory || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="bg-gray-50 animate-fadeIn min-h-screen">

      {/* HERO */}
      <section className="bg-gray-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="text-red-500" size={20} />
              <p className="text-sky-400 font-bold uppercase tracking-widest text-sm">Blue Flame Blog</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Heating Advice You Can <span className="text-sky-400">Trust</span>
            </h1>
            <p className="text-blue-200 text-xl max-w-2xl mb-8">
              Practical guides answers from Gas Safe registered engineer.
            </p>

            {/* SEARCH */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-10">

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              !activeCategory
                ? 'bg-blue-800 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-800'
            }`}
          >
            <span className="flex items-center gap-1.5"><Tag size={14} /> All Topics</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-800 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* NO RESULTS */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <Search className="mx-auto text-gray-300 mb-4" size={48} />
            <h2 className="text-xl font-bold text-gray-700 mb-2">No articles found</h2>
            <p className="text-gray-500">Try a different search term or browse all topics.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory(null); }}
              className="mt-4 text-blue-800 font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* FEATURED POST */}
        {featuredPost && (
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group block bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden mb-10"
          >
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-blue-800 to-blue-950 p-8 md:p-10 flex flex-col justify-center">
                <span className="text-sky-300 text-xs font-bold uppercase tracking-widest mb-2">Featured Article</span>
                <span className={`inline-block self-start text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide ${CATEGORY_COLORS[featuredPost.category] || 'bg-blue-100 text-blue-800'}`}>
                  {featuredPost.category}
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold text-white leading-snug group-hover:text-sky-300 transition-colors">
                  {featuredPost.title}
                </h2>
              </div>
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{formatDate(featuredPost.date)}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {featuredPost.readTime}</span>
                  </div>
                  <span className="flex items-center gap-1 text-blue-800 font-bold text-sm group-hover:gap-2 transition-all">
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* ARTICLE GRID */}
        {remainingPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${CATEGORY_COLORS[post.category] || 'bg-blue-100 text-blue-800'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1 text-gray-400"><Clock size={12} /> {post.readTime}</span>
                    <span className="flex items-center gap-1 text-blue-800 font-bold group-hover:gap-2 transition-all">Read more <ArrowRight size={12} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl p-10 md:p-14 text-center shadow-lg mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Need help with your heating?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">Gas Safe registered engineers covering Worcester and Worcestershire. Honest advice, fair prices, and available 24/7 for emergencies.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-red-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-500 transition-colors shadow-md">
              View Our Services
            </Link>
            <a href="tel:07480561846" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors shadow-md">
              Call 07480 561 846
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
