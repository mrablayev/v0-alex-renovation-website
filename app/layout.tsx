import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Alex Renovation - Professional Home Renovation & Handyman Services in Rochester, NY",
  description:
    "Expert renovation and handyman services in Rochester, NY. Kitchen remodels, bathroom renovations, flooring, painting, plumbing, electrical work, and more. Get your free estimate today!",
  generator: "v0.app",
  keywords: [
    "renovation Rochester NY",
    "handyman services Rochester",
    "kitchen remodel Rochester",
    "bathroom renovation Rochester",
    "flooring installation Rochester",
    "interior painting Rochester",
    "electrical work Rochester",
    "plumbing services Rochester",
    "home improvement Rochester",
    "contractor Rochester NY",
    "Brighton renovation",
    "Pittsford renovation",
    "Webster renovation",
    "Penfield renovation",
    "Fairport renovation",
    "Greece renovation",
    "Henrietta renovation",
    "Irondequoit renovation",
  ],
  authors: [{ name: "Alex Renovation" }],
  creator: "Alex Renovation",
  publisher: "Alex Renovation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alexrenovation.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Renovation - Professional Home Renovation Services in Rochester, NY",
    description:
      "Transform your home with expert renovation services. Kitchen remodels, bathroom renovations, flooring, and more. Serving Rochester and surrounding areas.",
    url: "https://alexrenovation.net",
    siteName: "Alex Renovation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Renovation - Professional Home Renovation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Renovation - Professional Home Renovation Services in Rochester, NY",
    description:
      "Transform your home with expert renovation services. Kitchen remodels, bathroom renovations, flooring, and more.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://alexrenovation.net/#organization",
              name: "Alex Renovation",
              alternateName: "Alex Renovation Services",
              description: "Professional home renovation and handyman services in Rochester, NY and surrounding areas since 2019.",
              url: "https://alexrenovation.net",
              telephone: "+15854725795",
              email: "info@alexrenovation.net",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rochester",
                addressRegion: "NY",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "43.1566",
                longitude: "-77.6088",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Rochester",
                  addressRegion: "NY",
                },
                {
                  "@type": "City",
                  name: "Brighton",
                  addressRegion: "NY",
                },
                {
                  "@type": "City",
                  name: "Pittsford",
                  addressRegion: "NY",
                },
                {
                  "@type": "City",
                  name: "Webster",
                  addressRegion: "NY",
                },
                {
                  "@type": "City",
                  name: "Penfield",
                  addressRegion: "NY",
                },
                {
                  "@type": "City",
                  name: "Fairport",
                  addressRegion: "NY",
                },
                {
                  "@type": "City",
                  name: "Greece",
                  addressRegion: "NY",
                },
                {
                  "@type": "City",
                  name: "Henrietta",
                  addressRegion: "NY",
                },
                {
                  "@type": "City",
                  name: "Irondequoit",
                  addressRegion: "NY",
                },
                {
                  "@type": "City",
                  name: "Victor",
                  addressRegion: "NY",
                },
                {
                  "@type": "City",
                  name: "Hilton",
                  addressRegion: "NY",
                },
              ],
              serviceType: [
                "Kitchen Renovation",
                "Bathroom Remodeling",
                "Flooring Installation",
                "Interior Painting",
                "Electrical Work",
                "Plumbing Services",
                "Home Renovation",
                "Handyman Services",
              ],
              priceRange: "$500-$50000",
              image: "https://alexrenovation.net/og-image.jpg",
              logo: "https://alexrenovation.net/logo.png",
              sameAs: [
                "https://www.facebook.com/alexrenovation",
                "https://www.instagram.com/alexrenovation",
                "https://www.linkedin.com/company/alexrenovation",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "16:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "50",
                bestRating: "5",
                worstRating: "1",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Renovation Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Kitchen Renovation",
                      description:
                        "Complete kitchen remodeling services including cabinets, countertops, and appliances.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Bathroom Renovation",
                      description: "Full bathroom remodeling including tile work, fixtures, and plumbing.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Flooring Installation",
                      description: "Professional installation of hardwood, tile, laminate, and luxury vinyl flooring.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${sourceSans.variable} ${playfair.variable} ${GeistMono.variable} antialiased`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <div id="main-content">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}