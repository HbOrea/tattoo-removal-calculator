import { Metadata } from "next";
import { Header } from "@/components/header";
import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { BlogList } from "@/components/blog/blog-list";
import { StructuredData } from "@/components/blog/structured-data";

export const metadata: Metadata = {
  title: "Tattoo Removal Blog | Expert Guides & Tips",
  description: "Expert articles on tattoo removal, laser treatment guides, cost analysis, and professional advice. Stay informed with our comprehensive blog.",
  keywords: "tattoo removal blog, laser tattoo removal guide, tattoo removal tips, tattoo removal cost guide, tattoo removal process, tattoo removal cost, how much does tattoo removal cost",
  openGraph: {
    title: "Tattoo Removal Blog | Expert Guides & Tips",
    description: "Expert articles on tattoo removal, laser treatment guides, cost analysis, and professional advice.",
    type: "website",
    url: "https://www.tattoo-removal-calculator.com/blog",
    siteName: "Tattoo Removal Calculator",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Removal Blog | Expert Guides & Tips",
    description: "Expert articles on tattoo removal, laser treatment guides, cost analysis, and professional advice.",
  },
  alternates: {
    canonical: "https://www.tattoo-removal-calculator.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <StructuredData isBlogList={true} />
      
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      
      <div className="relative z-10">
        <Header />
        
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" }
          ]}
        />
        
        {/* 博客头部 */}
        <div className="relative py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Tattoo Removal Blog
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Expert insights, professional guides, and real stories about tattoo removal. 
                Stay informed with our comprehensive articles written by industry professionals.
              </p>
            </div>
          </div>
        </div>
        
        {/* 主要内容区域 */}
        <div className="relative py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <BlogList />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
