"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.scrollY * 0.4);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // <- executa imediatamente ao montar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-stone-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/56/bd/52/caption.jpg')",
          transform: `translateY(${offset}px)`,
        }}
      />
      <div className="relative z-10 text-center px-6">
        <Image
          src="/logo.svg"
          alt="Pecorino Logo"
          width={700}
          height={120}
          className="object-contain mx-auto mb-6"
        />
        <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">
          Bar & Trattoria — Morumbi Town
        </p>
        <p className="text-stone-300 text-lg max-w-xl mx-auto mb-10">
          O melhor da cozinha italiana tradicional, com ingredientes de primeira
          qualidade, na sua maioria importados diretamente da Itália.
        </p>

        <a href="#cardapio"
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-none uppercase tracking-widest text-sm transition-colors duration-300"
        >
          Ver Cardápio
        </a>
      </div>
    </section>
  );
}
