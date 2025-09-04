"use client";

import { useState } from "react";
import Link from "next/link";
import { getBlogPost } from "@/lib/blog-data";

interface BlogArticleProps {
  slug: string;
}

export function BlogArticle({ slug }: BlogArticleProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const article = getBlogPost(slug);

  if (!article) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Article Not Found</h1>
        <p className="text-slate-600 mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/blog"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {/* 封面图片 */}
      {article.featuredImage && (
        <div className="relative h-64 md:h-80">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* 文章头部 */}
      <div className="p-8 border-b border-slate-200">
        {/* 分类和标签 */}
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
            {article.category}
          </span>
          <div className="flex gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* 标题 */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          {article.title}
        </h1>
        
        {/* 摘要 */}
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          {article.excerpt}
        </p>
        
        {/* 元数据 */}
        <div className="flex items-center justify-end space-x-4 text-sm text-slate-500">
          <div className="flex items-center space-x-1">
            <span>{formatDate(article.publishedAt)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </div>
      
      {/* 文章内容 */}
      <div className="p-8">
        <div 
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* 文章底部操作 */}
        <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-200">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <span>Share</span>
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center space-x-2 px-4 py-2 transition-colors ${
                isBookmarked 
                  ? 'text-blue-600 hover:text-blue-700' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
          </div>
          
          <Link
            href="/#calculator"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Calculate Your Cost
          </Link>
        </div>
      </div>
    </article>
  );
}
