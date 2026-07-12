import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Fertilizer Bags & Packaging Solutions Manufacturer",
  description:
    "All Pack is a Pune-based manufacturer of BOPP laminated bags, PP woven fertilizer bags, poly pouches, corrugated boxes, and printed stickers for agriculture, aquaculture, and cattle feed packaging. 8+ years of expertise, trusted by 200+ clients across India.",
  keywords:
    "Fertilizer bags manufacturer, BOPP laminated fertilizer bags, PP woven fertilizer bags, fertilizer packaging solutions, agricultural packaging bags, packaging partner for fertilizer manufacturers, about All Pack",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
