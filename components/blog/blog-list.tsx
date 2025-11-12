"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import Image from "next/image";

export function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* 文章列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
            {/* 特色图片 */}
            <div className="relative h-48 bg-slate-200">
              {post.featuredImage ? (
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Featured Image</span>
                </div>
              )}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            
            {/* 文章内容 */}
            <div className="p-6">
              {/* 标签 */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* 标题 */}
              <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              
              {/* 摘要 */}
              <p className="text-slate-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              {/* 发布时间和阅读时间 */}
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  {formatDate(post.publishedAt)}
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* 分页 */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-md hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 bg-white border border-slate-300 hover:bg-slate-50'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-md hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
