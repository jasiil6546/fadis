import Image from "next/image";

const testimonials = [
  {
    quote:
      "Fadi's Bites has spoiled other snack brands for me – in the best way. Crispy samosas, fresh ingredients, and a taste that makes you feel the homemade love.",
    name: "Patrick M.",
    title: "Samosa Lover",
    image: "/samosa_dip.png"
  },
  {
    quote:
      "I stock up every week before our family gatherings, and it's the best decision. The spicy kebabs are my go-to, but honestly, everything is handcrafted and full of flavor.",
    name: "Jordan T.",
    title: "Kebab Enthusiast",
    image: "/spring_rolls_plate.png"
  },
  {
    quote:
      "Always a warm, crispy bite — perfect for a quick snack or a family platter. The veggie spring rolls? Totally addictive.",
    name: "Sofia R.",
    title: "Spring Roll Fan",
    image: "/kebab_plating.png"
  },
];

export default function Testimonials() {
  return (
    <section className="bg-beige-light py-16 desktop:py-20" id="testimonials">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-red-600 mb-4">
            Customer Stories
          </span>
          <h2 className="font-display text-[44px] md:text-[54px] font-extrabold leading-[1.2] tracking-tight text-black">
            What People Love About Us
          </h2>
        </div>

        {/* Minimalist 3-Column Grid */}
        <div className="grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-3 items-start">
          {testimonials.map((t, idx) => (
            <div key={`${t.name}-${idx}`} className="group flex flex-col w-full">
              
              {/* Text Block Area */}
              <div className="flex flex-col items-start w-full mb-8 min-h-[180px] justify-between">
                <p className="font-body text-base md:text-lg leading-relaxed text-neutral-800 tracking-wide">
                  &ldquo;{t.quote}&rdquo;
                </p>
                
                <div className="mt-6 w-full">
                  {/* Fine Separator Line */}
                  <div className="w-full h-[1px] bg-neutral-200/60 mb-3 transition-colors duration-300 group-hover:bg-red-600" />
                  <div className="flex justify-between items-baseline px-1">
                    <h4 className="font-display text-base text-neutral-900">{t.name}</h4>
                    <span className="font-body text-xs font-bold uppercase text-neutral-400 tracking-wider">{t.title}</span>
                  </div>
                </div>
              </div>

              {/* Framed Photography Display Component */}
              <div className="w-full aspect-[4/5] relative overflow-hidden rounded-2xl bg-stone-50 border border-stone-200/40 shadow-sm transition-all duration-500 ease-out group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.02)]">
                <Image
                  src={t.image}
                  alt={t.quote}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>

            </div>
          ))}
        </div>

        {/* Primary Layout Action Button */}
        <div className="mt-20 text-center">
          <a
            href="#testimonials"
            className="inline-block rounded-full border border-neutral-900 bg-neutral-900 px-10 py-3.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-neutral-900"
          >
            All Reviews
          </a>
        </div>

      </div>
    </section>
  );
}