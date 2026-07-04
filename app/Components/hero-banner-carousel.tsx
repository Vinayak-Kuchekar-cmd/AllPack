"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Button } from "./Ui/button";

type Slide = {
  id: number;
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  href: string;
  panel: string; // solid/gradient background for the text panel
  glow: string; // decorative blob color behind the product shot
};

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/hero-banners/jaisa-organic-manure.webp",
    eyebrow: "Agri Packaging",
    title: "Granulated Organic Manure Bags",
    subtitle: "Bold, shelf-ready woven bags built for 50kg loads",
    href: "/product",
    panel: "from-emerald-600 to-green-700",
    glow: "bg-emerald-300",
  },
  {
    id: 2,
    image: "/images/hero-banners/wonder-grip-tile-adhesive.webp",
    eyebrow: "Industrial Packaging",
    title: "Tile Adhesive & Construction Bags",
    subtitle: "Premium print quality that signals product strength",
    href: "/product",
    panel: "from-blue-700 to-slate-800",
    glow: "bg-blue-300",
  },
  {
    id: 3,
    image: "/images/hero-banners/krushiposhan-super-neem.webp",
    eyebrow: "Agri Packaging",
    title: "Neem-Based Fertilizer Bags",
    subtitle: "Clean, certified design that builds farmer trust",
    href: "/product",
    panel: "from-green-700 to-lime-700",
    glow: "bg-lime-300",
  },
  {
    id: 4,
    image: "/images/hero-banners/star-gold-chilli.webp",
    eyebrow: "FMCG / Spice Packaging",
    title: "Chilli, Coriander & Turmeric Pouches",
    subtitle: "Vivid, appetite-driving pouch printing that pops on shelf",
    href: "/product",
    panel: "from-red-600 to-orange-700",
    glow: "bg-orange-300",
  },
  {
    id: 5,
    image: "/images/hero-banners/stova-mustard-seeds.webp",
    eyebrow: "Seed Packaging",
    title: "Mustard & Crop Seed Pouches",
    subtitle: "Durable pouches with tamper-proof sealing",
    href: "/product",
    panel: "from-amber-600 to-yellow-700",
    glow: "bg-yellow-300",
  },
  {
    id: 6,
    image: "/images/hero-banners/rice-bags-collection.webp",
    eyebrow: "Food Grain Packaging",
    title: "Basmati & Rice Brand Bags",
    subtitle: "Distinct brand identities, one trusted packaging partner",
    href: "/product",
    panel: "from-rose-700 to-red-800",
    glow: "bg-rose-300",
  },
];

export default function HeroBannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3200, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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
    <section className="relative bg-gray-950">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,42%)_1fr] h-[440px] sm:h-[420px] md:h-[440px]">
                {/* Text panel */}
                <div
                  className={`relative z-10 flex flex-col justify-center gap-3 px-6 sm:px-10 md:px-12 py-8 bg-gradient-to-br ${slide.panel}`}
                >
                  <span className="inline-block w-fit text-[11px] font-semibold tracking-wider uppercase text-white/90 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                    {slide.eyebrow}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-[2.15rem] font-bold text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-base text-white/85 max-w-sm">
                    {slide.subtitle}
                  </p>
                  <Link href={slide.href} className="w-fit">
                    <Button className="mt-2 bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                      Explore This Bag
                    </Button>
                  </Link>
                </div>

                {/* Image panel */}
                <div className="relative flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div
                    className={`absolute w-72 h-72 md:w-96 md:h-96 rounded-full ${slide.glow} opacity-30 blur-3xl`}
                  />
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={slide.id === 1}
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-contain p-6 sm:p-8 md:p-10 drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg transition"
        >
          <HiChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next slide"
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg transition"
        >
          <HiChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "w-7 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
