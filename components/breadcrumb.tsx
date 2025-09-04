"use client"

import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="max-w-4xl mx-auto px-6 py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-slate-600">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index === 0 ? (
              <Link 
                href={item.href} 
                className="flex items-center hover:text-slate-900 transition-colors"
                aria-label={item.label}
              >
                <Home className="h-4 w-4" />
              </Link>
            ) : (
              <>
                <ChevronRight className="h-4 w-4" />
                {index === items.length - 1 ? (
                  <span className="text-slate-900 font-medium">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href} 
                    className="hover:text-slate-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
} 