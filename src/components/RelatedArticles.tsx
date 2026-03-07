import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS, BADGE_CLASS } from '../pages/Blog';

interface RelatedArticlesProps {
  slugs: string[];
}

export default function RelatedArticles({ slugs }: RelatedArticlesProps) {
  const posts = BLOG_POSTS.filter((p) => slugs.includes(p.slug));
  if (posts.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Related Reading</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group flex flex-col bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-red-200 hover:shadow-md transition-all"
          >
            <span className={`inline-block text-xs font-bold px-2 py-1 rounded-full mb-3 uppercase tracking-wide w-fit ${BADGE_CLASS[post.category] ?? 'bg-slate-100 text-slate-700'}`}>
              {post.category}
            </span>
            <p className="font-bold text-gray-900 group-hover:text-red-700 transition-colors leading-snug text-sm mb-2">
              {post.title}
            </p>
            <span className="flex items-center gap-1 text-red-700 font-bold text-xs mt-auto pt-2">
              Read article <ArrowRight size={11} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
