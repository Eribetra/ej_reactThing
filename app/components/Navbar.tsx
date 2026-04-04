"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [aberto, setAberto] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-stone-900/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Image
          src="/nav_logo.svg"
          alt="Pecorino Logo"
          width={160}
          height={40}
          className="object-contain"
        />

        {/* Menu desktop */}
        <div className="hidden md:flex gap-8">
          <a href="#cardapio" className="text-stone-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider">
            Cardápio
          </a>
          <a href="#localizacao" className="text-stone-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider">
            Localização
          </a>
          <a href="#contato" className="text-stone-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider">
            Contato
          </a>
        </div>

        {/* Botão hamburguer mobile */}
        <button
          className="md:hidden text-white flex flex-col gap-1.5"
          onClick={() => setAberto(!aberto)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${aberto ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${aberto ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${aberto ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Menu mobile */}
      {aberto && (
        <div className="md:hidden bg-stone-900 px-6 pb-6 flex flex-col gap-4">
          <a href="#cardapio" onClick={() => setAberto(false)} className="text-stone-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider">
            Cardápio
          </a>
          <a href="#localizacao" onClick={() => setAberto(false)} className="text-stone-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider">
            Localização
          </a>
          <a href="#contato" onClick={() => setAberto(false)} className="text-stone-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider">
            Contato
          </a>
        </div>
      )}
    </nav>
  );
}
