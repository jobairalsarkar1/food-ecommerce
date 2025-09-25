import Blog from "@/components/Blog";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Fresh Harvest Main Body.
      </main>
      <section>
        <Reviews />
      </section>
      <section>
        <Blog />
      </section>
    </div>
  );
}
