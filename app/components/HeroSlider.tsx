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
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative w-full transition-all duration-700 ease-in-out mt-auto flex items-end justify-center max-w-[420px] tablet:max-w-[800px] -mb-16 tablet:-mb-24 desktop:-mb-40 desktop:max-w-[1200px] mx-auto pt-10 pb-0 md:pb-8"
      ref={containerRef}
    >
      {/* Invisible dummy to maintain container height */}
      <div className="pointer-events-none opacity-0 w-[260px] tablet:w-[380px] desktop:w-[420px]">
        <Image src={products[0].src} width={972} height={1280} alt="" className="w-full h-auto" priority />
      </div>

      {products.map((product, index) => {
        const isCenter = currentIndex === index;
        const isLeft = (currentIndex - 1 + products.length) % products.length === index;
        const isRight = (currentIndex + 1) % products.length === index;
        
        let zIndex = 0;
        if (isLeft) zIndex = 1;
        else if (isCenter) zIndex = 2;
        else if (isRight) zIndex = 1;

        return (
          <motion.div
            key={product.id}
            layout
            onClick={(e) => {
              e.stopPropagation();
              if (!isCenter) {
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
              scale: isCenter ? 1.05 : 0.85,
              rotate: isLeft ? -15 : isRight ? 15 : 0,
              x: isCenter ? "-50%" : isLeft ? "-130%" : isRight ? "30%" : "-50%",
              y: isCenter ? -20 : 30,
              opacity: isCenter || isLeft || isRight ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
              mass: 1.2,
              delay: !hasMounted ? index * 0.15 : 0
            }}
            whileHover={{ scale: isCenter ? 1.1 : 0.9, y: isCenter ? -25 : 15 }}
            className="absolute cursor-pointer bottom-2 md:bottom-12 left-1/2 origin-bottom"
            style={{
              width: "auto"
            }}
          > 
            <div className={`relative ${isCenter ? "w-[260px] tablet:w-[380px] desktop:w-[420px] z-10" : "w-[210px] tablet:w-[320px] desktop:w-[360px]"}`}>
              <Image
                src={product.src}
                alt={product.alt}
                width={972}
                height={1280}
                className="w-full h-auto object-contain drop-shadow-[24px_48px_51px_rgba(0,0,0,0.25)] transition-opacity duration-500"
                draggable={false}
                priority
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
