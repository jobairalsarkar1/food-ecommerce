import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import SpecialOffer from "@/components/SpecialOffer";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="font-sans">
      <section>
        <Hero />
      </section>
      <section>
        <Products />
      </section>
      <section>
        <AboutUs />
      </section>
      <SpecialOffer />
      <section>
        <Reviews />
      </section>
      <section>
        <Blog />
      </section>
    </div>
  );
}
