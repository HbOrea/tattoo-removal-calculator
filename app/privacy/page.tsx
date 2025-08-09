import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Tattoo Removal Calculator",
  description:
    "Learn how Tattoo Removal Calculator collects, uses, and protects your data, including cookies, analytics, and contact information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-slate-600 mt-2">Last updated: 2025-08-09</p>

          <div className="mt-8 space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
              <p className="mt-3">
                Tattoo Removal Calculator ("we", "us", or "our") provides an informational pricing
                calculator for tattoo removal. This Privacy Policy explains what information we collect,
                how we use it, and your choices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Information We Collect</h2>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  Usage data: interactions with the calculator, pages visited, referrer, approximate
                  location (derived from IP), device/browser information.
                </li>
                <li>
                  Calculator inputs: non-identifying parameters such as tattoo size, colors, skin type,
                  and removal goals. We do not require names, emails, or account creation.
                </li>
                <li>
                  Cookies and local storage: used for session continuity, preferences, and analytics.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">How We Use Information</h2>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve the calculator experience.</li>
                <li>Understand feature usage to guide product decisions and performance.</li>
                <li>Detect, prevent, and address technical issues and abuse.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Analytics</h2>
              <p className="mt-3">
                We may use privacy-friendly analytics (e.g., self-hosted or IP anonymized) to measure
                traffic and usage trends. Analytics data is aggregated and does not directly identify
                you. Where third-party analytics are used, their processing is governed by their own
                policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Cookies</h2>
              <p className="mt-3">
                Cookies and similar technologies store small data on your device. You can control cookies
                via your browser settings. Disabling certain cookies may impact functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Data Retention</h2>
              <p className="mt-3">
                We retain usage data only as long as necessary for the purposes outlined in this policy
                or as required by law. Calculator inputs are processed to produce estimates and may be
                stored in aggregated, anonymized form for product improvement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Data Sharing</h2>
              <p className="mt-3">
                We do not sell personal data. We may share limited information with service providers
                that help us operate our website, subject to confidentiality obligations. We may disclose
                information if required by law or to protect rights, safety, and security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Your Choices</h2>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Opt out of non-essential cookies via your browser settings.</li>
                <li>Limit analytics via browser privacy features and extensions.</li>
                <li>
                  Contact us to request access, correction, or deletion where applicable by law.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">International Users</h2>
              <p className="mt-3">
                Our service may be accessed globally. By using the service, you acknowledge that your
                information may be processed in jurisdictions that may have different data protection laws
                than your home jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Children's Privacy</h2>
              <p className="mt-3">
                Our service is not directed to individuals under the age of 16, and we do not knowingly
                collect personal information from children. If you believe a child has provided us with
                personal information, please contact us and we will take appropriate steps to delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Changes to This Policy</h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. We will post the updated version on
                this page and update the "Last updated" date at the top.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Contact Us</h2>
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


