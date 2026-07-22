import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./Components/footer";
import Topnav from "./Components/Topnav";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://all-pack.vercel.app"),
  verification: {
  google: "dEc3G01PFidU-WBroPYuD4xS8Ytz3sToVd8JaT0ezGg",
},
  title: {
    default: "Allpack | Fertilizer Bags Manufacturer, BOPP Laminated Bags & Packaging Supplier",
    template: "%s | Allpack",
  },
  description:
    "Allpack manufactures BOPP laminated bags, common fertilizer bags, cylinder printed fertilizer bags, poly pouches, corrugated boxes, and printed stickers for agriculture, aquaculture, and cattle feed packaging. Custom branding, multiple sizes, bulk order discounts. Trusted across India.",
  keywords: [
    "Fertilizer bags manufacturer",
    "BOPP laminated fertilizer bags",
    "Common fertilizer bags",
    "Cylinder printed fertilizer bags",
    "Fertilizer packaging solutions",
    "BOPP laminated bags",
    "Poly pouches printing",
    "Corrugated boxes manufacturer",
    "Printed stickers and labels",
    "Custom printed poly pouches",
    "Agricultural packaging bags",
    "NPK fertilizer bags",
    "Urea packaging bags",
    "DAP fertilizer bags",
    "Bio-fertilizer packaging",
    "Organic fertilizer packaging",
    "Aquaculture feed packaging",
    "Cattle feed packaging bags",
    "Agrochemical packaging",
    "Fertilizer bag suppliers near me",
    "Bulk fertilizer packaging India",
    "Custom branded fertilizer bags",
    "Wholesale poly pouches supplier",
    "Packaging partner for fertilizer manufacturers",
  ],
  authors: [{ name: "Allpack" }],
  openGraph: {
    title: "Allpack | Fertilizer Bags Manufacturer, BOPP Laminated Bags & Packaging Solutions",
    description:
      "BOPP bags, pouches, boxes & stickers for agriculture, aquaculture & cattle feed packaging needs.",
    siteName: "Allpack",
    locale: "en_IN",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Allpack",
  url: "https://all-pack.vercel.app",
  logo: "https://all-pack.vercel.app/allpacklogo.png",
  description:
    "Allpack manufactures BOPP laminated bags, PP woven fertilizer bags, cylinder printed fertilizer bags, poly pouches, corrugated boxes, and printed stickers for agriculture, aquaculture, and cattle feed packaging.",
  email: "adminallpack128@gmail.com",
  telephone: "+91-8805519081",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: "IN",
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "5Kg Fertilizer Bags" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "10Kg Fertilizer Bags" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "25Kg Fertilizer Bags" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "50Kg Fertilizer Bags" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Topnav />  
       {children}
      <Footer />
      </body>
    </html>
  );
}
