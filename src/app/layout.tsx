import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://islandcabsindia.com"),

  title: {
    default: "Island Cabs | Taxi Service in Rameshwaram",
    template: "%s | Island Cabs",
  },

  description:
    "Island Cabs provides reliable taxi services in Rameshwaram including temple tours, airport transfers and outstation travel to Madurai, Kanyakumari and across Tamil Nadu.",

  keywords: [
    "Rameshwaram taxi service",
    "Rameshwaram cab booking",
    "Rameshwaram to Madurai taxi",
    "Rameshwaram to Kanyakumari taxi",
    "Dhanushkodi taxi",
    "Taxi service Tamil Nadu",
    "Island Cabs Rameshwaram",
  ],

  openGraph: {
    title: "Island Cabs | Taxi Service in Rameshwaram",
    description:
      "Book reliable taxi services in Rameshwaram for temple tours, airport transfers and outstation travel across Tamil Nadu.",
    url: "https://islandcabsindia.com",
    siteName: "Island Cabs",
    images: [
      {
        url: "/images/Hero/Car.png",
        width: 1200,
        height: 630,
        alt: "Island Cabs Rameshwaram Taxi Service",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Island Cabs | Taxi Service in Rameshwaram",
    description:
      "Professional taxi services in Rameshwaram for temple tours and outstation travel across Tamil Nadu.",
    images: ["/images/Hero/Car.png"],
  },

  alternates: {
    canonical: "https://islandcabsindia.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Island Cabs",
    url: "https://islandcabsindia.com",
    logo: "https://islandcabsindia.com/images/Hero/IslandLogo.png",
    description:
      "Island Cabs is a professional taxi service in Rameshwaram offering temple tours, sightseeing and outstation taxi services across Tamil Nadu.",
    telephone: "+91XXXXXXXXXX",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rameshwaram",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
    },
    serviceType: "Taxi Service",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Island Cabs",
    url: "https://islandcabsindia.com",
    logo: "https://islandcabsindia.com/images/Hero/IslandLogo.png",
    sameAs: [],
  };

  return (
    <html lang="en">
      <body className="bg-white text-black">
        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
