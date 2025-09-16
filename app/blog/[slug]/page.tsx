import { Metadata } from "next";
import { Header } from "@/components/header";
import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { BlogArticle } from "@/components/blog/blog-article";
import { RelatedArticles } from "@/components/blog/related-articles";
import { StructuredData } from "@/components/blog/structured-data";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // 从博客数据中获取文章信息
  const { getBlogPost } = await import('@/lib/blog-data');
  const resolvedParams = await params;
  const article = getBlogPost(resolvedParams.slug);

  if (!article) {
    return {
      title: "Article Not Found | Tattoo Removal Blog",
      description: "The article you're looking for doesn't exist.",
    };
  }

  return {
    title: `${article.title} | Tattoo Removal Blog`,
    description: article.excerpt,
    keywords: article.tags.join(", "),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://www.tattoo-removal-calculator.com/blog/${resolvedParams.slug}`,
      publishedTime: article.publishedAt,
      images: article.featuredImage ? [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        }
      ] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.featuredImage ? [article.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // 获取文章数据用于结构化数据
  const { getBlogPost } = await import('@/lib/blog-data');
  const resolvedParams = await params;
  const article = getBlogPost(resolvedParams.slug);
  const { notFound } = await import('next/navigation');
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <StructuredData article={article} />
      
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      
      <div className="relative z-10">
        <Header />
        
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Article", href: `/blog/${resolvedParams.slug}` }
          ]}
        />
        
        {/* 主要内容区域 */}
        <div className="relative py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <BlogArticle slug={resolvedParams.slug} />
            
            {/* 相关文章 */}
            <RelatedArticles currentSlug={resolvedParams.slug} />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
