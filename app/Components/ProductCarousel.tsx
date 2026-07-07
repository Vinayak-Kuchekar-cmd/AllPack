'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products, Product } from '@/app/data/products';

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (products.length - itemsPerView + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, itemsPerView]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - itemsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) =>
      prev >= products.length - itemsPerView ? 0 : prev + 1
    );
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our extensive range of agricultural and construction products
            crafted with quality and excellence
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Previous products"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: Math.max(1, products.length - itemsPerView + 1) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlay(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-orange-500 w-8'
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                )
              )}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Next products"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Info Text */}
          <div className="text-center mt-6 text-slate-600">
            <p className="text-sm">
              Showing {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, products.length)} of {products.length} products
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-80 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-slate-600 mb-4 flex-1 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 2).map((feature, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <button className="w-full py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 mt-auto">
          Learn More
        </button>
      </div>
    </div>
  );
}
