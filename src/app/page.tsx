"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Header from "@/components/header";
import SideMenu from "@/components/SideMenu";
import Inicial from "./Inicial";
import Habilidades from "./Habilidades";
import Experiencia from "./Experiencia";
import Projetos from "./Projetos";

export default function Home() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        console.log("scrollY:", window.scrollY);
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main className="container-bg flex flex-col lg:flex-row lg:justify-between p-5 gap-2 w-h-[100vh]">
        <SideMenu className="lg:sticky lg:top-0 lg:self-start" />
        <div className="flex flex-col gap-10 w-full">
          <div id="inicial">
            <Inicial />
          </div>
          <div id="habilidades">
            <Habilidades />
          </div>
          <div id="experiencia">
            <Experiencia />
          </div>
          <div id="projetos">
            <Projetos />
          </div>
        </div>
      </main>
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 rounded-full bg-[#9C42AB]  text-white p-3 shadow-lg flex items-center justify-center lg:hidden"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
}
