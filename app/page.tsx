import { Header } from "@/components/header"
import { Breadcrumb } from "@/components/breadcrumb"
import { PriceCalculator } from "@/components/price-calculator"
import { InfoSection } from "@/components/info-section"
import { SeoContent } from "@/components/seo-content"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 简洁的背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      
      {/* 主要内容 */}
      <div className="relative z-10">
        <Header />
        
        {/* 面包屑导航 */}
        <Breadcrumb />
        
        {/* 英雄区域 */}
        <div className="relative py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                How Much Does Tattoo Removal Cost?
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Get instant tattoo removal cost estimates with our free calculator. Learn about pricing factors and professional guidance.
              </p>
            </div>
            
            {/* 特色标签 */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                Free Calculator
              </span>
              <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                Accurate Pricing
              </span>
              <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                Professional Guide
              </span>
            </div>
          </div>
        </div>
        
        <div id="calculator" className="relative">
          <PriceCalculator />
        </div>
        
        {/* SEO优化内容区域 */}
        <div id="pricing-guide" className="relative py-16">
          <SeoContent />
        </div>
        
        {/* FAQ区域 */}
        <div id="faq" className="relative py-16 bg-white/50">
          <FAQSection />
        </div>
        
        <div id="process" className="relative">
          <InfoSection />
        </div>
        
        <Footer />
      </div>
    </div>
  )
}
