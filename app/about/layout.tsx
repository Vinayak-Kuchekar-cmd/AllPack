import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Fertilizer Bags & Packaging Solutions Manufacturer",
  description:
    "Allpack is manufacturer of BOPP laminated bags, Common fertilizer bags, poly pouches, corrugated boxes, and printed stickers for agriculture, aquaculture, and cattle feed packaging. 8+ years of expertise, trusted by 200+ clients across India.",
  keywords:
    "Fertilizer bags manufacturer, BOPP laminated fertilizer bags, common fertilizer bags, fertilizer packaging solutions, agricultural packaging bags, packaging partner for fertilizer manufacturers, about Allpack",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
