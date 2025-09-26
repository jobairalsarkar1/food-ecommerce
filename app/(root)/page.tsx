import AboutUs from "@/components/AboutUs";
import SpecialOffer from "@/components/SpecialOffer";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Fresh Harvest Main Body.
      </main>
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
