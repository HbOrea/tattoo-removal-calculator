import { Header } from "@/components/header"
import { PriceCalculator } from "@/components/price-calculator"
import { InfoSection } from "@/components/info-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 主背景渐变 - 进一步增强可见度 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200 animate-gradient bg-[length:400%_400%]"></div>
      
      {/* 网格纹理背景 - 进一步增强可见度 */}
      <div className="absolute inset-0 bg-grid opacity-40"></div>
      
      {/* 噪点纹理 - 进一步增强可见度 */}
      <div className="absolute inset-0 bg-noise opacity-15"></div>
      
      {/* 动态渐变圆形 - 进一步增强可见度 */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* 旋转装饰元素 - 进一步增强可见度 */}
      <div className="absolute top-40 right-20 w-40 h-40 border-4 border-blue-400/60 rounded-full animate-rotate-slow"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 border-4 border-purple-400/60 rounded-full animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
      
      {/* 浮动粒子效果 - 进一步增强可见度 */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-600/80 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-600/80 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-600/80 rounded-full animate-bounce-slow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-2/3 right-1/4 w-3.5 h-3.5 bg-cyan-600/80 rounded-full animate-bounce-slow" style={{animationDelay: '3s'}}></div>
      
      {/* 光晕效果 - 进一步增强可见度 */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-48 bg-gradient-to-b from-blue-300/70 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-48 bg-gradient-to-t from-purple-300/70 to-transparent"></div>
      
      {/* 主要内容 */}
      <div className="relative z-10">
        <Header />
        
        {/* 英雄区域 */}
        <div className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 relative">
              {/* 标题背景光效 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl rounded-full"></div>
              
              <h1 className="relative text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-gradient bg-[length:200%_200%]">
                Tattoo Removal Price Calculator
              </h1>
              <p className="relative text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Quickly estimate your tattoo removal costs, understand factors affecting pricing, and get professional advice and guidance
              </p>
            </div>
            
            {/* 特色标签 */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 glass-effect text-blue-700 rounded-full text-sm font-medium shadow-lg">
                ✨ Smart Calculation
              </span>
              <span className="px-4 py-2 glass-effect text-green-700 rounded-full text-sm font-medium shadow-lg">
                💰 Transparent Pricing
              </span>
              <span className="px-4 py-2 glass-effect text-purple-700 rounded-full text-sm font-medium shadow-lg">
                🏥 Professional Guidance
              </span>
              <span className="px-4 py-2 glass-effect text-orange-700 rounded-full text-sm font-medium shadow-lg">
                ⚡ Instant Results
              </span>
            </div>
            
            {/* 装饰性线条 */}
            <div className="relative w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
        
        <div id="calculator" className="relative">
          <PriceCalculator />
        </div>
        
        <div id="process" className="relative glass-effect backdrop-blur-sm">
          <InfoSection />
        </div>
        
        <Footer />
      </div>
    </div>
  )
}
