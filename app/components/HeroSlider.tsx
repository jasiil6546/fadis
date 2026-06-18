"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    src: "/fadis_bites_hero_1.png",
    alt: "Fadi's Bites Samosas Packaging",
    title: "Samosas",
    description: "Crispy on the outside, flavor-packed on the inside.",
  },
  {
    id: 2,
    src: "/fadis_bites_hero_2.png",
    alt: "Fadi's Bites Spring Rolls Packaging",
    title: "Spring Rolls",
    description: "Authentic crunch and savory delight in every bite.",
  },
  {
    id: 3,
    src: "/fadis_bites_hero_3.png",
    alt: "Fadi's Bites Kebabs Packaging",
    title: "Kebabs",
    description: "Spiced to perfection with traditional recipes.",
  },
    {
    id: 4,
    src: "/fadis_bites_hero_2.png",
    alt: "Fadi's Bites Spring Rolls Packaging",
    title: "Spring Rolls",
    description: "Authentic crunch and savory delight in every bite.",
  },
    {
    id: 5,
    src: "/fadis_bites_hero_2.png",
    alt: "Fadi's Bites Spring Rolls Packaging",
    title: "Spring Rolls",
    description: "Authentic crunch and savory delight in every bite.",
  },
      {
    id: 6,
    src: "/fadis_bites_hero_2.png",
    alt: "Fadi's Bites Spring Rolls Packaging",
    title: "Spring Rolls",
    description: "Authentic crunch and savory delight in every bite.",
  },
      {
    id: 7,
    src: "/fadis_bites_hero_2.png",
    alt: "Fadi's Bites Spring Rolls Packaging",
    title: "Spring Rolls",
    description: "Authentic crunch and savory delight in every bite.",
  },
      {
    id: 8,
    src: "/fadis_bites_hero_2.png",
    alt: "Fadi's Bites Spring Rolls Packaging",
    title: "Spring Rolls",
    description: "Authentic crunch and savory delight in every bite.",
  },
      {
    id: 9,
    src: "/fadis_bites_hero_2.png",
    alt: "Fadi's Bites Spring Rolls Packaging",
    title: "Spring Rolls",
    description: "Authentic crunch and savory delight in every bite.",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with center image
  const [isZoomed, setIsZoomed] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // If zoomed in, we can use arrows to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isZoomed) return;
      if (e.key === "Escape") setIsZoomed(false);
      if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % products.length);
      if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed]);

  // Auto slide when not zoomed
  useEffect(() => {
    if (isZoomed) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [isZoomed]);

  return (
    <div 
      className={`relative w-full transition-all duration-700 ease-in-out ${isZoomed ? "fixed inset-0 z-50 bg-beige/95 backdrop-blur-sm" : "flex items-end justify-center max-w-[420px] tablet:max-w-[800px] pt-[100px] -mb-50 desktop:max-w-[1200px] mx-auto pt-10 pb-12"}`}
      ref={containerRef}
      onClick={() => isZoomed && setIsZoomed(false)}
    >
      {/* Invisible dummy to maintain container height */}
      {!isZoomed && (
        <div className="pointer-events-none opacity-0 w-[220px] tablet:w-[380px] desktop:w-[580px]">
          <Image src={products[0].src} width={972} height={1280} alt="" className="w-full h-auto" priority />
        </div>
      )}

      {products.map((product, index) => {
        const isCenter = currentIndex === index;
        const isLeft = (currentIndex - 1 + products.length) % products.length === index;
        const isRight = (currentIndex + 1) % products.length === index;
        
        let zIndex = 0;

        if (isZoomed) {
          zIndex = isCenter ? 20 : 10;
        } else {
          if (isLeft) zIndex = 1;
          else if (isCenter) zIndex = 2;
          else if (isRight) zIndex = 1;
        }

        return (
          <motion.div
            key={product.id}
            layout
            onClick={(e) => {
              e.stopPropagation();
              if (!isZoomed) {
                setCurrentIndex(index);
                setIsZoomed(true);
              } else if (!isCenter) {
                setCurrentIndex(index);
              }
            }}
            initial={{ 
              opacity: 0, 
              y: 100, 
              scale: 0.8,
              rotate: index === 0 ? -15 : index === 2 ? 15 : 0,
              x: "-50%"
            }}
            animate={{
              zIndex: zIndex,
              scale: isZoomed ? (isCenter ? 1.1 : 0.75) : (isCenter ? 1.05 : 0.85),
              rotate: !isZoomed ? (isLeft ? -15 : isRight ? 15 : 0) : 0,
              x: isZoomed ? (isCenter ? "-50%" : isLeft ? "-160%" : isRight ? "60%" : "-50%") : (isCenter ? "-50%" : isLeft ? "-130%" : isRight ? "30%" : "-50%"),
              y: isZoomed ? "-50%" : (isCenter ? -20 : 30),
              opacity: isZoomed ? (isCenter || isLeft || isRight ? 1 : 0) : (isCenter || isLeft || isRight ? 1 : 0),
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
              mass: 1.2,
              delay: !hasMounted ? index * 0.15 : 0
            }}
            whileHover={!isZoomed ? { scale: isCenter ? 1.1 : 0.9, y: isCenter ? -25 : 15 } : {}}
            className={`absolute cursor-pointer ${isZoomed ? "top-1/2 left-1/2 origin-center" : "bottom-12 left-1/2 origin-bottom"}`}
            style={{
              width: "auto"
            }}
          > 
            <div className={`relative ${isZoomed ? (isCenter ? "w-[300px] tablet:w-[450px] desktop:w-[500px]" : "w-[200px] tablet:w-[300px] desktop:w-[350px]") : (isCenter ? "w-[220px] tablet:w-[380px] desktop:w-[580px] z-10" : "w-[180px] tablet:w-[320px] desktop:w-[500px]")}`}>
              <Image
                src={product.src}
                alt={product.alt}
                width={972}
                height={1280}
                className={`w-full h-auto object-contain drop-shadow-[24px_48px_51px_rgba(0,0,0,0.25)] transition-opacity duration-500 ${isZoomed && !isCenter ? 'opacity-40 hover:opacity-80' : ''}`}
                draggable={false}
                priority
              />
            </div>

            {/* Product Info overlay when zoomed and centered */}
            <AnimatePresence>
              {isZoomed && isCenter && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: 0.1 }}
                  className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-max text-center pointer-events-none"
                >
                  <h3 className="font-display font-bold text-3xl text-green drop-shadow-sm">{product.title}</h3>
                  <p className="font-body text-green/80 text-base mt-2 drop-shadow-sm">{product.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
      
      {/* Close Button when zoomed */}
      <AnimatePresence>
        {isZoomed && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="absolute top-10 right-10 text-green/60 hover:text-green p-3 transition-colors"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
