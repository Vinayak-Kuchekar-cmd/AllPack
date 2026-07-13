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
      <Topnav />  
       {children}
      <Footer />
      </body>
    </html>
  );
}
