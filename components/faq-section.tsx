"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How much does tattoo removal cost on average?",
    answer: "The average tattoo removal cost ranges from $200 to $2,000 per session. Most people need 3-10 sessions for complete removal, making the total cost between $1,000 and $10,000 depending on tattoo size, colors, and location."
  },
  {
    question: "What factors affect tattoo removal pricing?",
    answer: "Key factors include tattoo size, ink colors (black responds best), skin type, treatment location, clinic reputation, and the number of sessions required. Larger tattoos and colored inks typically cost more to remove."
  },
  {
    question: "Is laser tattoo removal the most cost-effective method?",
    answer: "Yes, laser tattoo removal is generally the most cost-effective and safest method. While the initial tattoo removal cost may seem high, it's more effective than other methods and reduces the risk of scarring or complications."
  },
  {
    question: "Can I get tattoo removal cost estimates before treatment?",
    answer: "Absolutely! Most clinics offer free consultations where they assess your tattoo and provide detailed tattoo removal pricing estimates. Our calculator also gives you instant cost estimates based on your specific tattoo characteristics."
  },
  {
    question: "Are there ways to reduce tattoo removal cost?",
    answer: "Yes, you can reduce costs by choosing package deals for multiple sessions, comparing prices between clinics, asking about financing options, and considering treatment during off-peak seasons when some clinics offer discounts."
  },
  {
    question: "How long does the complete tattoo removal process take?",
    answer: "The complete process typically takes 6-18 months, including treatment sessions spaced 6-8 weeks apart and recovery time. The duration depends on tattoo size, colors, and individual skin response."
  },
  {
    question: "Will insurance cover tattoo removal cost?",
    answer: "Generally, insurance doesn't cover tattoo removal cost as it's considered cosmetic. However, some policies may cover removal if the tattoo is causing medical issues or if it's part of reconstructive surgery."
  },
  {
    question: "What's included in tattoo removal pricing?",
    answer: "Professional tattoo removal pricing typically includes consultation fees, treatment sessions, follow-up care, and any necessary aftercare products. Some clinics also offer package deals that include multiple sessions at a discounted rate."
  }
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Frequently Asked Questions About Tattoo Removal Cost
        </h2>
        <p className="text-slate-600 text-lg">
          Get answers to the most common questions about how much does tattoo removal cost
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <Card 
            key={index} 
            className="shadow-sm border border-slate-200 bg-white cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => toggleItem(index)}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between text-lg font-semibold text-slate-900">
                <span>{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                )}
              </CardTitle>
            </CardHeader>
            {openItems.includes(index) && (
              <CardContent className="pt-0">
                <p className="text-slate-700 leading-relaxed">
                  {item.answer}
                </p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* 结构化数据标记 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </div>
  )
} 