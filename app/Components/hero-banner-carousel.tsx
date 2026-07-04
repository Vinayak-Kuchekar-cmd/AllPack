"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./Ui/button";

type Slide = {
  id: number;
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  href: string;
  accent: string; // tailwind gradient classes for the badge/CTA
};

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/hero-banners/jaisa-organic-manure.webp",
    eyebrow: "Agri Packaging",
    title: "Granulated Organic Manure Bags",
    subtitle: "Bold, shelf-ready woven bags built for 50kg loads",
    href: "/product",
    accent: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    image: "/images/hero-banners/wonder-grip-tile-adhesive.webp",
    eyebrow: "Industrial Packaging",
    title: "Tile Adhesive & Construction Bags",
    subtitle: "Premium print quality that signals product strength",
    href: "/product",
    accent: "from-slate-600 to-blue-700",
  },
  {
    id: 3,
    image: "/images/hero-banners/krushiposhan-super-neem.webp",
    eyebrow: "Agri Packaging",
    title: "Neem-Based Fertilizer Bags",
    subtitle: "Clean, certified design that builds farmer trust",
    href: "/product",
    accent: "from-lime-500 to-green-700",
  },
  {
    id: 4,
    image: "/images/hero-banners/star-gold-chilli.webp",
    eyebrow: "FMCG / Spice Packaging",
    title: "Chilli, Coriander & Turmeric Pouches",
    subtitle: "Vivid, appetite-driving pouch printing that pops on shelf",
    href: "/product",
    accent: "from-red-500 to-orange-600",
  },
  {
    id: 5,
    image: "/images/hero-banners/stova-mustard-seeds.webp",
    eyebrow: "Seed Packaging",
    title: "Mustard & Crop Seed Pouches",
    subtitle: "Durable pouches with tamper-proof sealing",
    href: "/product",
    accent: "from-amber-500 to-yellow-600",
  },
  {
    id: 6,
    image: "/images/hero-banners/rice-bags-collection.webp",
    eyebrow: "Food Grain Packaging",
    title: "Basmati & Rice Brand Bags",
    subtitle: "Distinct brand identities, one trusted packaging partner",
    href: "/product",
    accent: "from-rose-500 to-red-600",
  },
];

export default function HeroBannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide) => (
              <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                <div className="relative h-[320px] sm:h-[420px] md:h-[480px] bg-gradient-to-br from-white to-gray-100 rounded-2xl overflow-hidden">
                  {/* Product image */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={slide.id === 1}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-contain p-6 md:p-10 drop-shadow-xl"
                  />

                  {/* Text overlay panel */}
                  <div className="absolute inset-0 flex flex-col justify-end md:justify-center">
                    <div className="bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent md:from-black/75 md:via-black/30 md:to-transparent p-6 md:p-10 md:w-3/5">
                      <span
                        className={`inline-block text-xs font-semibold tracking-wide uppercase text-white px-3 py-1 rounded-full bg-gradient-to-r ${slide.accent}`}
                      >
                        {slide.eyebrow}
                      </span>
                      <h2 className="mt-3 text-2xl md:text-4xl font-bold text-white leading-tight">
                        {slide.title}
                      </h2>
                      <p className="mt-2 text-sm md:text-base text-gray-200 max-w-md">
                        {slide.subtitle}
                      </p>
                      <Link href={slide.href}>
                        <Button className="mt-4 bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                          Explore This Bag
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "w-8 bg-orange-500"
                  : "w-2 bg-gray-500/60 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
