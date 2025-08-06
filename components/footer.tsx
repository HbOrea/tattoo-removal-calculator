import { Calculator, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      {/* 动态背景元素 */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* 网格纹理 */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Calculator className="h-8 w-8 text-blue-400 relative z-10" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tattoo Removal Calculator
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              Professional tattoo removal price calculator to help you understand treatment costs, get professional advice, and find suitable clinics.
              We are committed to providing users with transparent, accurate pricing information and professional guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform">
                Contact Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#calculator" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform block">
                  Price Calculator
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform block">
                  Treatment Process
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform block">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform block">
                  Clinic Recommendations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform block">
                  Knowledge Base
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Mail className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">info@tattooremoval.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Phone className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">400-123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <MapPin className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">北京市朝阳区</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-8 pt-8 text-center relative">
          {/* 装饰性线条 */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          <p className="text-gray-400">
            © 2024 Tattoo Removal Calculator. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </footer>
  )
} 