"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/CarousalSlider1.jpg",
  "/CarousalSlider2.jpg",
  "/CarousalSlider3.jpg",
  "/CarousalSlider4.jpg",
  "/CarousalSlider5.jpg",
  "/CarousalSlider6.jpg",
];

const AUTOPLAY_DELAY = 3000; // ms

export default function AutoScrollCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(autoplay, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay]);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] h-[220px] sm:h-[320px] md:h-[420px]"
            >
              <Image
                src={src}
                alt={`Carousel slide ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
