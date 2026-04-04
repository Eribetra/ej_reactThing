"use client";

import { useState } from "react";

export default function Contact() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section id="contato" className="bg-stone-900 py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-amber-400 uppercase tracking-widest text-sm text-center mb-2">
          Fale Conosco
        </p>
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Contato
        </h2>
        {enviado ? (
          <div className="text-center">
            <p className="text-amber-400 text-xl font-semibold mb-2">
              Mensagem enviada!
            </p>
            <p className="text-stone-400">
              Em breve nossa equipe entrará em contato com você.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <input
              name="nome"
              type="text"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              className="bg-stone-800 text-white placeholder-stone-500 rounded-none px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={handleChange}
              className="bg-stone-800 text-white placeholder-stone-500 rounded-none px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
            <textarea
              name="mensagem"
              placeholder="Sua mensagem"
              rows={5}
              value={form.mensagem}
              onChange={handleChange}
              className="bg-stone-800 text-white placeholder-stone-500 rounded-none px-5 py-3 outline-none focus:ring-2 focus:ring-amber-500 resize-none"
            />
            <button
              onClick={handleSubmit}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-none uppercase tracking-widest text-sm transition-colors duration-300"
            >
              Enviar Mensagem
            </button>
          </div>
        )}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8 text-center">
          <div>
            <p className="text-amber-400 text-sm uppercase tracking-wider mb-1">Telefone</p>
            <p className="text-stone-300">(11) 3758-0707</p>
          </div>
          <div>
            <p className="text-amber-400 text-sm uppercase tracking-wider mb-1">Instagram</p>

            <a href="https://instagram.com/pecorinobr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-amber-400 transition-colors"
            >
              @pecorinobr
            </a>
          </div>
          <div>
            <p className="text-amber-400 text-sm uppercase tracking-wider mb-1">Delivery</p>
            <p className="text-stone-300">Disponível no iFood</p>
          </div>
        </div>
      </div>
    </section>
  );
}
