"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

const marqueeItems = [
  "Authentic Flavors",
  "Ready to Cook",
  "Savory Snacks",
  "Carefully Selected",
  "Great Taste",
  "Homemade Comfort",
  "Spiced with Culture",
  "Quality & Hygiene",
];

const menuData = {
  samosas: {
    title: "Samosas & Pies",
    desc: "Golden-fried pockets of joy, filled with savory meats and fresh vegetables.",
    items: [
      {
        name: "Crispy Potato Samosa",
        price: "$4.99",
        image: "/fadis_bites_hero_1.png",
        badge: "Classic",
      },
      {
        name: "Spiced Chicken Samosa",
        price: "$5.99",
        image: "/fadis_bites_hero_1.png",
        badge: "Popular",
      },
      { name: "Savoury Beef Samosa", price: "$6.49", image: "/fadis_bites_hero_1.png" },
      { name: "Cheese & Jalapeño Samosa", price: "$5.49", image: "/fadis_bites_hero_1.png" },
      {
        name: "Traditional Lamb Samosa",
        price: "$6.99",
        image: "/fadis_bites_hero_1.png",
        badge: "New",
      },
      { name: "Vegetable Curry Samosa", price: "$4.99", image: "/fadis_bites_hero_1.png" },
    ],
  },
  rolls: {
    title: "Spring Rolls",
    desc: "Light and flaky wrappers encasing crunchy vegetables and seasoned proteins.",
    items: [
      {
        name: "Veggie Spring Rolls",
        price: "$5.49",
        image: "/fadis_bites_hero_2.png",
        badge: "Popular",
      },
      { name: "Spicy Chicken Rolls", price: "$5.99", image: "/fadis_bites_hero_2.png" },
      {
        name: "Crispy Shrimp Rolls",
        price: "$6.99",
        image: "/fadis_bites_hero_2.png",
        badge: "New",
      },
      { name: "Cheese & Herb Rolls", price: "$5.49", image: "/fadis_bites_hero_2.png" },
      { name: "Sweet Chili Beef Rolls", price: "$6.49", image: "/fadis_bites_hero_2.png" },
      { name: "Garlic Duck Rolls", price: "$7.49", image: "/fadis_bites_hero_2.png" },
    ],
  },
  kebabs: {
    title: "Savoury Kebabs",
    desc: "Juicy, flame-grilled skewers packed with authentic spices and fresh herbs.",
    items: [
      {
        name: "Savoury Beef Kebabs",
        price: "$6.49",
        image: "/fadis_bites_hero_3.png",
        badge: "Popular",
      },
      { name: "Spiced Chicken Kebabs", price: "$5.99", image: "/fadis_bites_hero_3.png" },
      {
        name: "Grilled Seekh Lamb Kebab",
        price: "$7.49",
        image: "/fadis_bites_hero_3.png",
        badge: "Classic",
      },
      { name: "Bihari Beef Kebab", price: "$6.99", image: "/fadis_bites_hero_3.png" },
      {
        name: "Turkish Adana Kebab",
        price: "$7.29",
        image: "/fadis_bites_hero_3.png",
        badge: "New",
      },
      { name: "Kashmiri Spiced Kebab", price: "$6.49", image: "/fadis_bites_hero_3.png" },
    ],
  },
};

export default function MenuPage() {
  const handleAddToCart = (product: { name: string; price: string; image: string }) => {
    window.dispatchEvent(new CustomEvent("add-to-cart", { detail: product }));
  };

  return (
    <>
      <Header />

      {/* Banner Section */}
      <section className="relative overflow-hidden bg-green pt-[180px] pb-0 text-center">
        <div className="container-custom flex flex-col items-center gap-6">
          <h1 className="font-display h1-menu leading-[110%] tracking-tight text-beige-light">
            Our Menu
          </h1>
          <p className="max-w-[500px] font-body text-lg leading-[140%] tracking-[0.02em] text-beige-light/80">
            Authentic ready-to-cook snacks, prepared with fresh ingredients and traditional recipes.
          </p>

          {/* Quick Scroll Anchors */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-pill border border-beige-light/20 bg-transparent px-5 py-2 font-body text-sm font-bold tracking-[0.02em] text-beige-light transition-all hover:bg-beige-light/10 hover:border-beige-light"
            >
              About
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-pill border border-beige-light/20 bg-transparent px-5 py-2 font-body text-sm font-bold tracking-[0.02em] text-beige-light transition-all hover:bg-beige-light/10 hover:border-beige-light"
            >
              Cart
            </a>
          </div>
        </div>

        {/* Marquee scroll bar */}
        <div className="relative z-10 mt-16 w-full overflow-hidden border-y border-green-border bg-beige-light py-3">
          <div className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={`${item}-${idx}`} className="flex shrink-0 items-center gap-6">
                <span className="font-body text-lg font-bold uppercase tracking-[0.03em] text-green">
                  {item}
                </span>
                <Image
                  src="https://framerusercontent.com/images/F5Co7hXZI1kGwrVLVKzWeo6eU.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Menu Grid / Purchase layout */}
      <section className="bg-beige py-20 min-h-screen">
        <div className="container-custom grid grid-cols-1 desktop:grid-cols-4 gap-12 items-start">
          {/* Left Column: Category Navigation Sidebar */}
          <div className="desktop:col-span-1 sticky top-[130px] hidden desktop:flex flex-col gap-5 pt-2">
            <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-green/50 px-3">
              Categories
            </span>
            <div className="flex flex-col gap-2">
              {/* Samosas */}
              <a
                href="#samosas"
                className="group flex items-center gap-3.5 rounded-2xl bg-beige-light/20 hover:bg-beige-light/50 border border-green-border/10 p-3.5 transition-all duration-300"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-green overflow-hidden p-1 group-hover:scale-105 transition-transform">
                  <Image
                    src="/fadis_bites_hero_1.png"
                    alt="Samosa icon"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <span className="font-display text-[17px] font-bold text-green">
                  Samosas & Pies
                </span>
              </a>

              {/* Spring Rolls */}
              <a
                href="#spring-rolls"
                className="group flex items-center gap-3.5 rounded-2xl bg-beige-light/20 hover:bg-beige-light/50 border border-green-border/10 p-3.5 transition-all duration-300"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-green overflow-hidden p-1 group-hover:scale-105 transition-transform">
                  <Image
                    src="/fadis_bites_hero_2.png"
                    alt="Spring Roll icon"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <span className="font-display text-[17px] font-bold text-green">Spring Rolls</span>
              </a>

              {/* Kebabs */}
              <a
                href="#kebabs"
                className="group flex items-center gap-3.5 rounded-2xl bg-beige-light/20 hover:bg-beige-light/50 border border-green-border/10 p-3.5 transition-all duration-300"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-green overflow-hidden p-1 group-hover:scale-105 transition-transform">
                  <Image
                    src="/fadis_bites_hero_3.png"
                    alt="Kebab icon"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <span className="font-display text-[17px] font-bold text-green">
                  Savoury Kebabs
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Product Grids */}
          <div className="desktop:col-span-3 flex flex-col gap-20 w-full">
            {/* Category: Samosas */}
            <div id="samosas" className="scroll-mt-[130px]">
              <div className="mb-8 border-b border-green-border/20 pb-4">
                <h2 className="font-display h2-menu text-green">
                  {menuData.samosas.title}
                </h2>
                <p className="mt-2 font-body text-base text-green-muted max-w-[600px]">
                  {menuData.samosas.desc}
                </p>
              </div>
              <div className="grid gap-6 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
                {menuData.samosas.items.map((item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className="group relative rounded-card bg-green-card p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(201,0,10,0.25)]"
                  >
                    {item.badge && (
                      <div className="absolute top-8 left-8 z-10 flex px-3 py-1 items-center justify-center rounded-full bg-beige-light text-green text-xs font-bold font-body shadow-sm uppercase tracking-wider">
                        {item.badge}
                      </div>
                    )}
                    <div className="overflow-hidden rounded-[16px] bg-green-image-bg flex items-center justify-center p-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={270}
                        height={200}
                        className="w-full aspect-[4/3] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-5 text-center flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display h3 leading-[124%] tracking-[0.01em] text-beige-light">
                          {item.name}
                        </h3>
                        <p className="mt-1 font-body text-base tracking-[0.02em] text-beige-light/75">
                          {item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="mt-4 w-full rounded-pill bg-beige-light px-4 py-2 font-body text-sm font-bold tracking-[0.02em] text-green transition-all hover:bg-beige-hover hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category: Spring Rolls */}
            <div id="spring-rolls" className="scroll-mt-[130px]">
              <div className="mb-8 border-b border-green-border/20 pb-4">
                <h2 className="font-display h2-menu text-green">
                  {menuData.rolls.title}
                </h2>
                <p className="mt-2 font-body text-base text-green-muted max-w-[600px]">
                  {menuData.rolls.desc}
                </p>
              </div>
              <div className="grid gap-6 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
                {menuData.rolls.items.map((item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className="group relative rounded-card bg-green-card p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(201,0,10,0.25)]"
                  >
                    {item.badge && (
                      <div className="absolute top-8 left-8 z-10 flex px-3 py-1 items-center justify-center rounded-full bg-beige-light text-green text-xs font-bold font-body shadow-sm uppercase tracking-wider">
                        {item.badge}
                      </div>
                    )}
                    <div className="overflow-hidden rounded-[16px] bg-green-image-bg flex items-center justify-center p-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={270}
                        height={200}
                        className="w-full aspect-[4/3] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-5 text-center flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display h3 leading-[124%] tracking-[0.01em] text-beige-light">
                          {item.name}
                        </h3>
                        <p className="mt-1 font-body text-base tracking-[0.02em] text-beige-light/75">
                          {item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="mt-4 w-full rounded-pill bg-beige-light px-4 py-2 font-body text-sm font-bold tracking-[0.02em] text-green transition-all hover:bg-beige-hover hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category: Kebabs */}
            <div id="kebabs" className="scroll-mt-[130px]">
              <div className="mb-8 border-b border-green-border/20 pb-4">
                <h2 className="font-display h2-menu text-green">
                  {menuData.kebabs.title}
                </h2>
                <p className="mt-2 font-body text-base text-green-muted max-w-[600px]">
                  {menuData.kebabs.desc}
                </p>
              </div>
              <div className="grid gap-6 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
                {menuData.kebabs.items.map((item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className="group relative rounded-card bg-green-card p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(201,0,10,0.25)]"
                  >
                    {item.badge && (
                      <div className="absolute top-8 left-8 z-10 flex px-3 py-1 items-center justify-center rounded-full bg-beige-light text-green text-xs font-bold font-body shadow-sm uppercase tracking-wider">
                        {item.badge}
                      </div>
                    )}
                    <div className="overflow-hidden rounded-[16px] bg-green-image-bg flex items-center justify-center p-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={270}
                        height={200}
                        className="w-full aspect-[4/3] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-5 text-center flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display h3 leading-[124%] tracking-[0.01em] text-beige-light">
                          {item.name}
                        </h3>
                        <p className="mt-1 font-body text-base tracking-[0.02em] text-beige-light/75">
                          {item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="mt-4 w-full rounded-pill bg-beige-light px-4 py-2 font-body text-sm font-bold tracking-[0.02em] text-green transition-all hover:bg-beige-hover hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
