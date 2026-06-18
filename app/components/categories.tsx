import Image from "next/image";

const categories = [
  {
    name: "Cutlets",
    image: "/fadis_bites_hero_1.png",
    href: "/menu#samosas",
  },
  {
    name: "Unnakai",
    image: "/fadis_bites_hero_2.png",
    href: "/menu#spring-rolls",
  },
  {
    name: "Samosa",
    image: "/fadis_bites_hero_3.png",
    href: "/menu#kebabs",
  },
  {
    name: "Irachi Ada",
    image: "/fadis_bites_hero_3.png",
    href: "/menu#kebabs",
  },
];

export default function Categories() {
  return (
    <section className="bg-beige-light pb-16 pt-20 md:pt-40 desktop:pt-32 desktop:pb-12">
      <div className="container-custom">
        {/* Section Heading */}
        <h2 className="mb-8 md:mb-12 text-center font-extrabold leading-[1.2] text-[36px] md:text-[54px] font-display tracking-tight text-black">
          Explore the Bites <br></br>
That Hit Different
        </h2>

        {/* Structured Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="group flex flex-col focus:outline-none w-full"
            >
              {/* Product Image Box with Solid Brand Red BG */}
              <div className="w-full aspect-square flex items-center justify-center bg-red-600 rounded-2xl overflow-hidden relative mb-3 md:mb-4 p-4 md:p-8 transition-transform duration-500 ease-out group-hover:scale-[1.02] shadow-sm group-hover:shadow-md">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={320}
                  height={320}
                  className="w-[85%] md:w-[78%] h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                />
              </div>

              {/* Typography & Arrow Label Section - Sitting cleanly below the red block */}
              
                <h3 className="font-display text-[18px] md:text-[24px] text-center font-normal text-neutral-900 transition-colors duration-300 group-hover:text-red-600">
                  {cat.name}
                </h3>
                
 
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}