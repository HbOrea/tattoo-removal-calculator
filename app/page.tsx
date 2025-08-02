import { Header } from "@/components/header"
import { PriceCalculator } from "@/components/price-calculator"
import { InfoSection } from "@/components/info-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* 装饰性圆形 */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* 网格背景 */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-400/5 to-transparent"></div>
      </div>
      
      {/* 主要内容 */}
      <div className="relative z-10">
        <Header />
        
        {/* 英雄区域 */}
        <div className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Tattoo Removal Price Calculator
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Quickly estimate your tattoo removal costs, understand factors affecting pricing, and get professional advice and guidance
              </p>
            </div>
            
            {/* 特色标签 */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                ✨ Smart Calculation
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                💰 Transparent Pricing
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                🏥 Professional Guidance
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                ⚡ Instant Results
              </span>
            </div>
          </div>
        </div>
        
        <div id="calculator" className="relative">
          <PriceCalculator />
        </div>
        
        <div id="process" className="relative bg-white/80 backdrop-blur-sm">
          <InfoSection />
        </div>
        
        <Footer />
      </div>
    </div>
  )
}
