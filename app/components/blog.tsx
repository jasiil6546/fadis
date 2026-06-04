import Image from "next/image";

const posts = [
  {
    title: "Introducing Our Brand New Line of Premium Ready-to-Cook Frozen Samosas",
    date: "May 24, 2026",
    image: "/news_samosa_sharing.png",
  },
  {
    title: "Fadi's Bites Flushing Outlet Grand Opening Event This Weekend",
    date: "May 18, 2026",
    image: "/news_store_opening.png",
  },
  {
    title: "The Secret Behind Our Traditional Recipe and Culturally-Rich Spices",
    date: "May 10, 2026",
    image: "/news_spice_heritage.png",
  },
];

export default function Blog() {
  return (
    <section className="bg-beige-light py-16 desktop:py-20" id="blog">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="mb-16 flex items-end justify-between border-b border-neutral-200 pb-6">
          <h2 className="font-display text-[44px] md:text-[54px] font-extrabold leading-[1.2] tracking-tight text-black">
            Latest from Our Blog
          </h2>
          <a
            href="#blog"
            className="hidden font-body text-sm font-semibold tracking-wider uppercase text-neutral-800 transition-colors hover:text-red-600 sm:block"
          >
            View All Articles &rarr;
          </a>
        </div>

        {/* Minimalist Editorial Grid */}
        <div className="grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-3">
          {posts.map((post) => (
            <a key={post.title} href="#blog" className="group flex flex-col w-full">
              
              {/* Cover Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-stone-50 border border-stone-200/40 w-full aspect-[1.4] mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Editorial Design Signature Line */}
              <div className="w-full h-[1px] bg-neutral-200/60 mb-4 transition-colors duration-300 group-hover:bg-red-600" />
              
              {/* Title Content */}
              <h3 className="font-display text-xl md:text-2xl text-neutral-900 transition-colors duration-300 group-hover:text-red-600 leading-snug line-clamp-2">
                {post.title}
              </h3>

              {/* Timestamp Metabar */}
              <p className="mt-3 font-body text-xs font-bold tracking-wide uppercase text-neutral-400">
                {post.date}
              </p>
              
            </a>
          ))}
        </div>

        {/* Fallback Mobile Action Link */}
        <div className="mt-12 text-center sm:hidden">
          <a
            href="#blog"
            className="inline-block font-body text-sm font-bold tracking-wider uppercase text-red-600"
          >
            View All Articles &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}