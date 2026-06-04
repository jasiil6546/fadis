import Image from "next/image";

const highlights = [
  { title: "Authentic Flavor", desc: "Traditional family recipes with rich native spices." },
  { title: "Ready to Cook", desc: "Quick preparation straight from freezer to kitchen." },
  { title: "Premium Sourcing", desc: "Carefully selected ingredients and absolute food safety." }
];

export default function About() {
  return (
    <section className="bg-beige-light py-16 desktop:py-20" id="about">
      {/* Kept exactly within your layout requirements */}
      <div className="container-custom grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
        
        {/* Left Side: Editorial Typography & Content (Spans 5 Columns) */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-red-600 mb-4">
            Our Story
          </span>
          <h2 className="font-display text-[44px] md:text-[54px] font-extrabold leading-[1.2] text-black tracking-tight mb-6">
            Baked with Love, <br />Spiced with Culture
          </h2>
          <p className="font-body text-[17px] leading-relaxed text-neutral-700 mb-12">
            Fadi&apos;s Bites brings together authentic culinary heritage and modern convenience. Inspired by traditional recipes, each snack delivers the warm comfort of homemade food with the ease of quick preparation.
          </p>

          {/* Clean Stacked List (Replacing the heavy grid) */}
          <div className="flex flex-col gap-6 w-full border-t border-neutral-200/60 pt-8">
            {highlights.map((item) => (
              <div key={item.title} className="group flex flex-col sm:flex-row sm:items-baseline gap-2">
                <h3 className="font-display text-xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-red-600">
                  {item.title}
                </h3>
                <span className="text-yellow-500 font-bold hidden sm:inline">/</span>
                <p className="font-body text-base text-neutral-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Space Gutter Spacer (Spans 1 Column) */}
        <div className="hidden md:block md:col-span-1" />

        {/* Right Side: Single Stunning Hero Image Canvas (Spans 6 Columns) */}
        <div className="md:col-span-6 w-full flex flex-col group cursor-pointer">
          <div className="w-full aspect-[4/5] relative overflow-hidden rounded-2xl bg-stone-50 border border-stone-200/40 mb-6">
            <Image
              src="/samosa_bento.png" // Replace with whichever signature imagery you want as main highlight
              alt="Fadi's Bites Showcase"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              priority
            />
          </div>

          {/* Minimalist Signature Layout Line matching Categories section */}
          <div className="w-full border-t border-black/10 pt-4 flex items-center justify-between transition-colors duration-300 group-hover:border-yellow-500 px-1">
            <h3 className="font-display text-xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-red-600">
              The Signature Malabar Range
            </h3>
            <span className="font-body text-xs text-neutral-400 font-bold uppercase tracking-wider">
              Premium Taste
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}