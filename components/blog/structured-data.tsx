"use client";

import { BlogPost } from "@/lib/blog-data";

interface StructuredDataProps {
  article?: BlogPost;
  isBlogList?: boolean;
}

export function StructuredData({ article, isBlogList = false }: StructuredDataProps) {
  if (isBlogList) {
    const blogListData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Tattoo Removal Blog",
      "description": "Expert articles on tattoo removal, laser treatment guides, cost analysis, and professional advice.",
      "url": "https://www.tattoo-removal-calculator.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Tattoo Removal Calculator",
        "url": "https://www.tattoo-removal-calculator.com"
      }
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListData) }}
      />
    );
  }

  if (!article) return null;

  const articleData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.featuredImage,
    "datePublished": article.publishedAt,
    "dateModified": article.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Tattoo Removal Calculator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tattoo Removal Calculator",
      "url": "https://www.tattoo-removal-calculator.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.tattoo-removal-calculator.com/blog/${article.slug}`
    },
    "keywords": article.tags.join(", "),
    "articleSection": article.category,
    "wordCount": article.content.length
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
}
