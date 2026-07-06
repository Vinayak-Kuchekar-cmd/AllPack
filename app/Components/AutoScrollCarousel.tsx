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

// All 4 source images have been normalized to this exact aspect ratio
// (see /public/images) so the frame never letterboxes at any breakpoint.
const SLIDE_ASPECT = "2.45";

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
    <section className="w-full py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section heading — mirrors the "arrows in the corner" pattern from
            the reference design instead of overlaying controls on the image */}
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Our Products
            </h2>
            <div className="h-1 w-14 bg-orange-500 rounded-full mt-2" />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
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
              className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
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
          </div>
        </div>

        {/* Slide frame */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative flex-[0_0_100%] flex items-center justify-center bg-gray-50 min-h-80 sm:min-h-96"
                  style={{ aspectRatio: SLIDE_ASPECT }}
                >
                  <Image
                    src={src}
                    alt={`Promotional banner ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px"
                    className="object-contain p-4 sm:p-6"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-gray-400 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
