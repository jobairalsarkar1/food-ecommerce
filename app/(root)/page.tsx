import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Fresh Harvest Main Body.
      </main>
      <section>
        <Blog />
      </section>
    </div>
  );
}
