"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "./Ui/card";
import useEmblaCarousel from "embla-carousel-react";
// import Link from "next/link";

const products = [
  {
    id: 1,
    name: "5Kg Fertilizer Bags",
    altName: "5Kg BOPP laminated fertilizer bag",
    href: "/product/fertilizer-bags#5kgFertilizerBag",
    size: "5Kg",
    price: 21,
    originalPrice: 23,
    description:
      "BOPP laminated fertilizer bag ideal for retail-size Urea and NPK packaging.",

    // Only 3 colors
    colors: [
      {
        name: "blue",
        code: "#3B82F6",
        image: "/images/blue5kgcopys.png",
        imageUrl: "https://all-pack.vercel.app/images/blue5kgcopys.png",
      },
      {
        name: "green",
        code: "#22C55E",
        image: "/images/green5kgcopys.png",
        imageUrl: "https://all-pack.vercel.app/images/green5kgcopys.png",
      },
      {
        name: "orange",
        code: "#F97316",
        image: "/images/orange5kgcopys.png",
        imageUrl: "https://all-pack.vercel.app/images/orange5kgcopys.png",
      },
    ],

    available: true,
  },

  {
    id: 2,
    name: "10Kg Fertilizer Bags",
    altName: "10Kg PP woven fertilizer bag",
    href: "/product/fertilizer-bags#10kgFertilizerBag",
    size: "10Kg",
    price: 24,
    originalPrice: 26,
    description:
      "PP woven fertilizer bag with cylinder printing, suited for DAP and bio-fertilizer packaging.",

    colors: [
      //  {
      //   name: "blue",
      //   code: "#3B82F6",
      //   image: "/images/blue5kgcopys.png",
      // },

      {
        name: "green",
        code: "#22C55E",
        image: "/images/green5kgcopys.png",
        imageUrl: "https://all-pack.vercel.app/images/green5kgcopys.png",
      },
      {
        name: "orange",
        code: "#F97316",
        image: "/images/orange5kgcopys.png",
        imageUrl: "https://all-pack.vercel.app/images/orange5kgcopys.png",
      },
    ],

    available: true,
  },

  {
    id: 3,
    name: "25Kg Fertilizer Bags",
    altName: "25Kg cylinder printed fertilizer bag",
    size: "25Kg",
    href: "/product/fertilizer-bags#25kgFertilizerBag",
    price: 34,
    originalPrice: 37,
    description:
      "Heavy-duty BOPP laminated bag for organic fertilizer and agrochemical packaging.",

    colors: [
      {
        name: "red",
        code: "#D90445",
        image: "/images/red25kgcopy.png",
        imageUrl: "https://all-pack.vercel.app/images/red25kgcopy.png",
      },
      {
        name: "yellow",
        code: "#FACC15",
        image: "/images/yellow25kg.png",
        imageUrl: "https://all-pack.vercel.app/images/yellow25kg.png",
      },
      {
        name: "blue",
        code: "#3B82F6",
        image: "/images/blue25kg.png",
        imageUrl: "https://all-pack.vercel.app/images/blue25kg.png",
      },
    ],

    available: true,
  },

  {
    id: 4,
    name: "50Kg Fertilizer Bags",
    altName: "50Kg heavy-duty fertilizer packaging bag",
    size: "50Kg",
    href: "/product/fertilizer-bags#50kgFertilizerBag",
    price: 44,
    originalPrice: 50,
    description:
      "Bulk-grade PP woven fertilizer bag built for high-volume NPK and Urea packaging.",

    colors: [
      {
        name: "green",
        code: "#22C55E",
        image: "/images/green50kgcopy.jpeg",
        imageUrl: "https://all-pack.vercel.app/images/green50kgcopy.jpeg",
      },
      {
        name: "yellow",
        code: "#FACC15",
        image: "/images/yellow50kgcopy.jpeg",
        imageUrl: "https://all-pack.vercel.app/images/yellow50kgcopy.jpeg",
      },
      {
        name: "orange",
        code: "#F97316",
        image: "/images/orange50kgcopy.jpeg",
        imageUrl: "https://all-pack.vercel.app/images/orange50kgcopy.jpeg",
      },
    ],

    available: true,
  },
];

export default function ProductSlides() {
  // Store selected color for each product
  const [selectedColors, setSelectedColors] = useState<{
    [key: number]: number;
  }>({
    1: 0, // default green
    2: 0,
    3: 0,
    4: 0,
  });
  const [windowWidth, setWindowWidth] = useState(1024);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    slidesToScroll: isMobile ? 1 : isTablet ? 2 : 3,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleColorChange = (productId: number, colorIndex: number) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: colorIndex,
    }));
  };

  return (
    <div className="w-full px-4 md:px-6">
      <div className="relative -mx-4 md:-mx-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 md:gap-4 px-4 md:px-6">
            {products.map((product) => {
              const selectedColorIndex = selectedColors[product.id];

              return (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:flex-[0_0_calc(33.333%-5px)]"
                >
                  <Card className="overflow-hidden rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 bg-white h-full">
                    {/* Product Image */}
                    {/* Product Image */}
                    {/* Product Image */}
                    {/* Product Image */}
                    {/* Product Image */}
                    <div className="relative h-[420px] bg-white overflow-hidden">
                      {product.colors.map((color, index) => (
                        <Image
                          key={color.name}
                          src={color.image}
                          alt={`${product.altName} - ${color.name}`}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="p-4 transition-opacity duration-300"
                          style={{
                            objectFit: "contain",
                            objectPosition: "center bottom",
                            opacity: selectedColorIndex === index ? 1 : 0,
                          }}
                        />
                      ))}
                    </div>

                    {/* Product Details */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {product.name}
                          </h3>

                          <p className="text-sm text-gray-500">
                            {product.size}
                          </p>
                        </div>

                        <span className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-md">
                          In Stock
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4">
                        {product.description}
                      </p>

                      {/* Pricing */}
                      <div className="flex items-center justify-between mb-5">
                        {/* Price Section */}
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-bold text-green-700">
                            ₹{product.price}
                          </span>

                          <span className="text-gray-400 line-through">
                            ₹{product.originalPrice}
                          </span>
                        </div>

                        {/* Available Colors */}
                        <div className="flex items-center gap-3">
                          <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                            Available Colors:
                          </p>

                          <div className="flex gap-2">
                            {product.colors.map((color, index) => (
                              <button
                                key={index}
                                onClick={() =>
                                  handleColorChange(product.id, index)
                                }
                                className={`w-8 h-8 rounded-full border-4 transition-all duration-200 ${
                                  selectedColorIndex === index
                                    ? "border-black scale-110"
                                    : "border-gray-300"
                                }`}
                                style={{
                                  backgroundColor: color.code,
                                }}
                                title={color.name}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Button */}
                      <a
                        href={`https://wa.me/918805519081?text=${encodeURIComponent(
                          `Hello Allpack,

I am interested in:

Product: ${product.name}
Size: ${product.size}
Color: ${product.colors[selectedColorIndex].name}
 Product Image:
${product.colors[selectedColorIndex].imageUrl}

Please send quotation.`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <button className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-lg font-medium">
                          Enquire on WhatsApp
                        </button>
                      </a>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          aria-label="Previous slide"
          style={{ left: "-20px" }}
        >
          <svg
            className="w-6 h-6 text-gray-700"
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
          disabled={nextBtnDisabled}
          className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          aria-label="Next slide"
          style={{ right: "-20px" }}
        >
          <svg
            className="w-6 h-6 text-gray-700"
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
  );
}

