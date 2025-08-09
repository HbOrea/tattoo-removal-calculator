"use client"

import { Calculator, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-slate-700" />
            <span className="text-lg font-semibold text-slate-900">
              Tattoo Removal Calculator
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#calculator" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Price Calculator
            </a>
            <a href="#process" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Treatment Process
            </a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              FAQ
            </a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              About Us
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white">
              <a href="#calculator">Start Calculation</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-slate-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#calculator" 
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Price Calculator
              </a>
              <a 
                href="#process" 
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Treatment Process
              </a>
              <a 
                href="#faq" 
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#about" 
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                <a href="#calculator" onClick={() => setIsMenuOpen(false)}>Start Calculation</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 