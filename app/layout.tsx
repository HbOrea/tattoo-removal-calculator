import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from '../components/GoogleAnalytics';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tattoo Removal Cost Calculator | Free Price Tool 2025",
  description: "Calculate tattoo removal cost instantly. Get accurate pricing estimates based on size, location, and treatment method. Free calculator with guidance.",
  keywords: "tattoo removal cost, how much does tattoo removal cost, laser tattoo removal price, tattoo removal pricing, tattoo removal calculator",
  icons: {
    icon: '/favicon-minimal.svg',
    shortcut: '/favicon-minimal.svg',
    apple: '/favicon-minimal.svg',
  },
  openGraph: {
    title: "Tattoo Removal Cost Calculator | Free Price Tool 2025",
    description: "Calculate tattoo removal cost instantly. Get accurate pricing estimates based on size, location, and treatment method. Free calculator with guidance.",
    type: "website",
    locale: "en_US",
    url: "https://www.tattoo-removal-calculator.com/",
    siteName: "Tattoo Removal Cost Calculator",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Tattoo Removal Cost Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Removal Cost Calculator | Free Price Tool 2025",
    description: "Calculate tattoo removal cost instantly. Get accurate pricing estimates based on size, location, and treatment method. Free calculator with guidance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.tattoo-removal-calculator.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 从环境变量获取GA ID
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Tattoo Removal Cost Calculator",
              "description": "Free online calculator to estimate how much does tattoo removal cost based on size, location, and treatment method",
              "url": "https://www.tattoo-removal-calculator.com/",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free tattoo removal cost calculator"
              },
              "provider": {
                "@type": "Organization",
                "name": "Tattoo Removal Calculator",
                "url": "https://www.tattoo-removal-calculator.com/"
              }
            })
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sr0xx97tqr");
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        {children}
      </body>
    </html>
  );
}
