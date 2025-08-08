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
  title: "How Much Does Tattoo Removal Cost? | Free Price Calculator 2025",
  description: "Calculate tattoo removal cost instantly. Learn how much does tattoo removal cost based on size, location, and treatment method. Get accurate pricing estimates and professional guidance.",
  keywords: "tattoo removal cost, how much does tattoo removal cost, laser tattoo removal price, tattoo removal pricing, tattoo removal calculator",
  openGraph: {
    title: "How Much Does Tattoo Removal Cost? | Free Price Calculator 2025",
    description: "Calculate tattoo removal cost instantly. Learn how much does tattoo removal cost based on size, location, and treatment method. Get accurate pricing estimates and professional guidance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Does Tattoo Removal Cost? | Free Price Calculator 2025",
    description: "Calculate tattoo removal cost instantly. Learn how much does tattoo removal cost based on size, location, and treatment method.",
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
    canonical: "https://yourdomain.com",
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
              "url": "https://yourdomain.com",
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
                "url": "https://yourdomain.com"
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
