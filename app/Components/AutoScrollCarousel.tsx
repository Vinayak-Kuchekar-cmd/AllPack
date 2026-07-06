"use client";

import { useEffect, useCallback, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import carousalImage1 from "../../public/images/carousalImage1.png";
import carousalImage2 from "../../public/images/carousalImage2.png";
import carousalImage3 from "../../public/images/carousalImage3.png";
import carousalImage4 from "../../public/images/carousalImage4.png";

// Static imports let Next.js content-hash each file at build time, so
// swapping an image (even under the same filename) always busts the
// browser/CDN cache automatically — no manual cache-clearing needed.
const images: StaticImageData[] = [
  carousalImage1,
  carousalImage2,
  carousalImage3,
  carousalImage4,
];

const AUTOPLAY_DELAY = 4000; // ms

export default function AutoScrollCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  // Keep the dot indicators in sync with the current slide
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Autoplay — pauses while the user is hovering over the carousel
  useEffect(() => {
    if (!emblaApi || isHovered) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  return (
    <div className="w-full py-4 md:py-6">
      <div className="container mx-auto px-4 lg:px-[5rem]">
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gradient-to-br from-orange-50 via-white to-gray-50 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slides */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative flex-[0_0_100%] aspect-[16/7] sm:aspect-[21/8] md:aspect-[21/7]"
                >
                  <Image
                    src={src}
                    alt={`Promotional banner ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next arrows — appear on hover */}
          <button
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 md:p-2.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            aria-label="Next slide"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 md:p-2.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-6 bg-orange-500"
                    : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
