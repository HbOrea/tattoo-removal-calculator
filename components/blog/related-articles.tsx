"use client";

import Link from "next/link";
import { getRelatedPosts } from "@/lib/blog-data";

interface RelatedArticlesProps {
  currentSlug: string;
}

export function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const relatedArticles = getRelatedPosts(currentSlug);

  return (
    <section className="mt-12 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <article key={article.slug} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            {/* 封面图片 */}
            {article.featuredImage && (
              <div className="relative h-32 bg-slate-200">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-6">
              <div className="mb-3">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                  {article.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                  {article.title}
                </Link>
              </h3>
              
              <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{article.readTime} min read</span>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
        >
          View All Articles
        </Link>
      </div>
    </section>
  );
}
