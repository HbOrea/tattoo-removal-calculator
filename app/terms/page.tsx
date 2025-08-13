/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Tattoo Removal Calculator",
  description:
    "Read the terms and conditions for using Tattoo Removal Calculator, including disclaimers, acceptable use, and limitations of liability.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Terms of Service</h1>
          <p className="text-slate-600 mt-2">Last updated: 2025-08-09</p>

          <div className="mt-8 space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">1. Agreement to Terms</h2>
              <p className="mt-3">
                By accessing or using Tattoo Removal Calculator (the "Service"), you agree to be bound by
                these Terms of Service. If you do not agree, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">2. Service Description</h2>
              <p className="mt-3">
                The Service provides informational tattoo removal cost estimates based on user-provided
                inputs and generalized models. The estimates are for educational purposes only and do not
                constitute medical, financial, or professional advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">3. No Professional Advice</h2>
              <p className="mt-3">
                Information provided by the Service is not a substitute for professional consultation.
                Always seek advice from qualified professionals regarding tattoo removal treatments.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">4. Acceptable Use</h2>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Do not misuse, disrupt, or impair the Service or its infrastructure.</li>
                <li>Do not attempt to reverse engineer, scrape, or collect data without permission.</li>
                <li>Use the Service only in compliance with applicable laws and regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">5. Intellectual Property</h2>
              <p className="mt-3">
                We and our licensors own all rights, title, and interest in the Service and its content,
                excluding user inputs. You may not copy, modify, or create derivative works without prior
                written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">6. Third-Party Links</h2>
              <p className="mt-3">
                The Service may contain links to third-party websites. We are not responsible for their
                content, policies, or practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">7. Disclaimer of Warranties</h2>
              <p className="mt-3">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT ESTIMATES
                ARE ACCURATE, COMPLETE, OR RELIABLE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">8. Limitation of Liability</h2>
              <p className="mt-3">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
                REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOOD-WILL, OR
                OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">9. Indemnification</h2>
              <p className="mt-3">
                You agree to defend, indemnify, and hold harmless Tattoo Removal Calculator and its
                affiliates from any claims, liabilities, damages, losses, and expenses arising from or in
                any way related to your use of the Service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">10. Changes to the Service</h2>
              <p className="mt-3">
                We may modify or discontinue the Service at any time without notice. We may update these
                Terms from time to time. Continued use of the Service constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">11. Governing Law</h2>
              <p className="mt-3">
                These Terms are governed by the laws of your jurisdiction of residence, without regard to
                conflict of laws principles. Venue for disputes will be in competent courts of that
                jurisdiction, unless otherwise required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">12. Contact</h2>
              <p className="mt-3">
                Email: <span className="font-medium">info@tattoo-removal-calculator.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}


