import Header from "@/components/header";
import Hero from "@/components/hero";
import Categories from "@/components/categories";
import PopularItems from "@/components/popular-items";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
// import Locations from "@/components/locations";
import Blog from "@/components/blog";
// import Delivery from "@/components/delivery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <PopularItems />
      <About />
      <Testimonials />
      {/* <Locations /> */}
      <Blog />                    
      {/* <Delivery />  */}
      <Footer />
    </>
  );
}
