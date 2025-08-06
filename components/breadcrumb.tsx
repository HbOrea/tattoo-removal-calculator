"use client"

import { Home, ChevronRight } from "lucide-react"

export function Breadcrumb() {
  return (
    <nav className="max-w-4xl mx-auto px-6 py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-slate-600">
        <li>
          <a 
            href="/" 
            className="flex items-center hover:text-slate-900 transition-colors"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </a>
        </li>
        <li>
          <ChevronRight className="h-4 w-4" />
        </li>
        <li>
          <span className="text-slate-900 font-medium">
            Tattoo Removal Cost Calculator
          </span>
        </li>
      </ol>
    </nav>
  )
} 