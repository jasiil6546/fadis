import Image from "next/image";
import HeroSlider from "./HeroSlider";

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

export default function Hero() {
  return (
    <section id="hero" className="relative -mt-[0px] overflow-hidden bg-green pt-[120px] md:pt-[180px] min-h-[100svh] flex flex-col justify-between">
      <div className="container-custom flex flex-col items-center gap-1 flex-1">
        <div className="flex w-full max-w-[550px] flex-col items-center gap-5 text-center">
          <div className="flex flex-col items-center gap-5 ">
            <h1 className="font-display text-[38px] md:text-[64px] lg:text-[80px] desktop:text-[100px] font-extrabold leading-[0.9] tracking-normal text-beige-light px-2">
              Taste That Hits Different
            </h1>
            <p className="max-w-full text-[18px] md:text-[22px] font-body leading-[1.3] text-beige-light px-4">
              Fadi&apos;s Bites makes ready-to-cook snacks with real flavors for quick, tasty moments.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2.5 mt-1 desktop:flex-row">
            <a
              href="/menu"
              className="inline-flex items-center justify-center rounded-pill border border-beige-light bg-beige-light px-6 py-4 font-body text-base leading-none tracking-[0.02em] text-green transition-opacity hover:opacity-90"
            >
              Explore Menu
            </a>
            <a
              href="/#testimonials"
              className="inline-flex items-center justify-center rounded-pill border border-beige-[20px] bg-transparent px-6 py-4 font-body text-base leading-none tracking-[0.02em] text-beige-light transition-colors hover:bg-beige-light/10"
            >
              Customer Reviews
            </a>
          </div>
        </div>

        <HeroSlider />
      </div>

      <div className="relative z-10 mt-0 w-full overflow-hidden border-y border-green-border bg-beige py-3">
        <div className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={`${item}-${idx}`} className="flex shrink-0 items-center gap-6">
              <span className="font-body text-lg uppercase tracking-[0.03em] text-green">
                {item}
              </span>
              <Image
                src="https://framerusercontent.com/images/F5Co7hXZI1kGwrVLVKzWeo6eU.svg"
                alt=""
                width={30}
                height={30}
                className="size-10 opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
