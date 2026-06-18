"use client";
import { useRef } from "react";
import Image from "next/image";

const items = [
  {
    name: "Crispy Potato Samosa",
    price: "$4.99",
    image: "/fadis_bites_hero_1.png",
  },
  {
    name: "Veggie Spring Rolls",
    price: "$5.49",
    image: "/fadis_bites_hero_2.png",
  },
  {
    name: "Spiced Chicken Samosa",
    price: "$5.99",
    image: "/fadis_bites_hero_1.png",
  },
  {
    name: "Savoury Beef Kebabs",
    price: "$6.49",
    image: "/fadis_bites_hero_3.png",
  },
  {
    name: "Veggie Spring Rolls",
    price: "$5.49",
    image: "/fadis_bites_hero_2.png",
  },
  {
    name: "Spiced Chicken Samosa",
    price: "$5.99",
    image: "/fadis_bites_hero_1.png",
  },
  {
    name: "Savoury Beef Kebabs",
    price: "$6.49",
    image: "/fadis_bites_hero_3.png",
  },
  {
    name: "Veggie Spring Rolls",
    price: "$5.49",
    image: "/fadis_bites_hero_2.png",
  },
  {
    name: "Spiced Chicken Samosa",
    price: "$5.99",
    image: "/fadis_bites_hero_1.png",
  },
  {
    name: "Savoury Beef Kebabs",
    price: "$6.49",
    image: "/fadis_bites_hero_3.png",
  },
];

export default function PopularItems() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-beige-light py-12 md:py-16 desktop:py-20" id="menu">
      <div className="container-custom">

        {/* Section Header */}
        <div className="mb-10 md:mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-[36px] md:text-[54px] font-extrabold leading-[1.2] tracking-tight text-black">
              Loved by Locals
            </h2>
            <p className="mt-1 font-body text-base md:text-[18px] text-neutral-500 ">
              Our bestselling ready-to-cook snacks, packed with rich flavor.
            </p>
          </div>

          {/* Minimalist Slider Navigation Controls */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="flex w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 transition-all hover:text-white hover:bg-red-600 hover:border-neutral-300 active:scale-95 cursor-pointer"
              aria-label="Previous Slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 transition-all hover:text-white hover:bg-red-600 hover:border-neutral-300 active:scale-95 cursor-pointer"
              aria-label="Next Slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Cards Grid Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 px-1 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="group relative min-w-[260px] w-[260px] md:min-w-[320px] md:w-[320px] shrink-0 snap-start rounded-2xl bg-white border border-stone-200/60 p-4 md:p-5 transition-all duration-500 ease-out hover:border-stone-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.04)]"
            >
              {/* Product Image Canvas Container */}
              <div className="overflow-hidden rounded-xl bg-stone-50 flex items-center justify-center p-8 md:p-12 aspect-[1/1] relative">
                {/* Absolute Popular Badge */}
                <div className="absolute top-3 left-3 bg-yellow-400 text-neutral-900 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  POPULAR
                </div>

                <Image
                  src={item.image}
                  alt={item.name}
                  width={270}
                  height={200}
                  className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Product Details & Content Wrapper */}
              <div className="mt-5 md:mt-6 text-center flex flex-col items-center">
                <h3 className="font-display text-[18px] md:text-[22px] font-normal text-neutral-900 line-clamp-1">
                  {item.name}
                </h3>
                <p className="mt-1 font-body text-[15px] md:text-base font-normal text-neutral-900">
                  {item.price}
                </p>

                {/* Modern Pill Button Action */}
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("add-to-cart", { detail: item }));
                  }}
                  className="mt-4 md:mt-5 w-full py-2.5 bg-red-600 text-white font-body text-xs font-bold rounded-full transition-all duration-300 hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm shadow-red-600/10"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Primary Action Layout Link */}
        <div className="mt-8 md:mt-12 text-center">
          <a
            href="/menu"
            className="inline-block rounded-full border border-neutral-900 bg-neutral-900 px-8 py-3 md:px-10 md:py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-neutral-900"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
}