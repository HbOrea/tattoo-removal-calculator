import { Calculator, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Calculator className="h-6 w-6 text-slate-300" />
              <span className="text-lg font-semibold text-white">
                Tattoo Removal Calculator
              </span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md leading-relaxed">
              Professional tattoo removal price calculator to help you understand treatment costs, get professional advice, and find suitable clinics.
            </p>
            <div className="flex space-x-4">
              <a href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="mailto:info@tattoo-removal-calculator.com" className="text-slate-400 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#calculator" className="text-slate-400 hover:text-white transition-colors block">
                  Price Calculator
                </a>
              </li>
              <li>
                <a href="#process" className="text-slate-400 hover:text-white transition-colors block">
                  Treatment Process
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors block">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  Clinic Recommendations
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  Knowledge Base
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <span className="text-slate-400">info@tattoo-removal-calculator.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Tattoo Removal Calculator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 