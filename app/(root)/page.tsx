"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import SpecialOffer from "@/components/SpecialOffer";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import Products from "@/components/Products";

export default function Home() {
  const pathname = usePathname();

  const scrollToHash = () => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 20,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    // run when page loads (direct /#about)
    scrollToHash();

    // 4un on hash change (when clicking between sections on the same page)
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return (
    <div className="font-sans">
      <section id="home">
        <Hero />
      </section>
      <section id="shop">
        <Products />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="special-offer">
        <SpecialOffer />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="blog">
        <Blog />
      </section>
    </div>
  );
}
