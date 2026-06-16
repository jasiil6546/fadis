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
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with center image
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
      className={`relative w-full transition-all duration-700 ease-in-out ${isZoomed ? "h-[80vh] flex items-center justify-center fixed inset-0 z-50 bg-green/95 backdrop-blur-md" : "flex items-end justify-center max-w-[420px] tablet:max-w-[800px] pt-[100px] -mb-50 desktop:max-w-[1200px] mx-auto pt-10 pb-12"}`}
      ref={containerRef}
      onClick={() => isZoomed && setIsZoomed(false)}
    >
      {products.map((product, index) => {
        const isCenter = currentIndex === index;
        const isLeft = (currentIndex - 1 + products.length) % products.length === index;
        const isRight = (currentIndex + 1) % products.length === index;
        
        let positionClass = "";
        let zIndex = 0;
        let transformStyle = "";

        if (isZoomed) {
          // Slideshow layout
          zIndex = isCenter ? 20 : 10;
          if (isCenter) transformStyle = "translateX(0) scale(1.2)";
          else if (isLeft) transformStyle = "translateX(-80%) scale(0.8) opacity(0.5)";
          else if (isRight) transformStyle = "translateX(80%) scale(0.8) opacity(0.5)";
          else transformStyle = "translateX(0) scale(0) opacity(0)";
        } else {
          // Clustered fan layout
          if (index === 0) {
            zIndex = 1;
            transformStyle = "translateX(20%) rotate(-7deg) scale(0.9)";
          } else if (index === 1) {
            zIndex = 2;
            transformStyle = "translateX(0) rotate(0deg) scale(1)";
          } else if (index === 2) {
            zIndex = 1;
            transformStyle = "translateX(-20%) rotate(7deg) scale(0.9)";
          }
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
            initial={false}
            animate={{
              zIndex: zIndex,
              scale: isZoomed ? (isCenter ? 1.1 : 0.8) : (index === 1 ? 1 : 0.85),
              rotate: !isZoomed ? (index === 0 ? -7 : index === 2 ? 7 : 0) : 0,
              x: isZoomed ? (isCenter ? 0 : isLeft ? "-60%" : isRight ? "60%" : "0") : (index === 0 ? "10%" : index === 2 ? "-10%" : "0"),
              y: isZoomed ? (isCenter ? 0 : 40) : (index === 1 ? 0 : 30),
              opacity: isZoomed && !isCenter && !isLeft && !isRight ? 0 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              mass: 1.2
            }}
            whileHover={!isZoomed ? { scale: index === 1 ? 1.05 : 0.9, y: -10 } : {}}
            className={`absolute cursor-pointer origin-bottom ${isZoomed ? "top-1/2 -mt-[250px]" : "relative"}`}
            style={{
              width: "auto" // container width handled by next/image or parent
            }}
          >
            <div className={`relative ${isZoomed ? (isCenter ? "w-[300px] tablet:w-[450px] desktop:w-[600px]" : "w-[250px] tablet:w-[350px] desktop:w-[400px]") : (index === 1 ? "w-[220px] tablet:w-[380px] desktop:w-[580px] z-10" : "w-[180px] tablet:w-[320px] desktop:w-[500px] -mx-10 tablet:-mx-20 desktop:-mx-28")}`}>
              <Image
                src={product.src}
                alt={product.alt}
                width={972}
                height={1280}
                className="w-full h-auto object-contain drop-shadow-[24px_48px_51px_rgba(0,0,0,0.25)]"
                draggable={false}
                priority
              />
            </div>

            {/* Product Info overlay when zoomed and centered */}
            <AnimatePresence>
              {isZoomed && isCenter && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.2 }}
                  className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-max text-center bg-beige-light p-4 rounded-xl shadow-xl pointer-events-none"
                >
                  <h3 className="font-display font-bold text-2xl text-green">{product.title}</h3>
                  <p className="font-body text-green-dark/80 text-sm">{product.description}</p>
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
            className="absolute top-10 right-10 bg-beige-light text-green rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
