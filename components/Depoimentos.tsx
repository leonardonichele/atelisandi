"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Leonardo Nichele",
    role: "Cliente fiel",
    initials: "LN",
    color: "#c9a96e",
    stars: 5,
    text: "As peças AteliSandi são simplesmente incríveis, a delicadeza e o cuidado em cada detalhe são evidentes. Recomendo a todos que buscam algo único e feito com amor.",
  }
];

export default function Depoimentos() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section
      id="depoimentos"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #2c2416 0%, #3d3220 50%, #2c2416 100%)" }}
    >
      {/* Ornamentos de fundo */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #c9a96e, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
        style={{ background: "radial-gradient(circle, #e8c87a, transparent)" }}
      />

      {/* Padrão decorativo */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a96e' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='8' fill='none' stroke='%23c9a96e' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "#c9a96e" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              O que dizem de nós
            </span>
            <div className="w-8 h-px" style={{ background: "#c9a96e" }} />
          </div>

          <h2>
            <span
              className="block text-4xl lg:text-5xl font-light text-white tracking-wide"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Palavras que
            </span>
            <span
              className="block text-5xl lg:text-6xl italic font-light text-[#c9a96e] mt-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              aquecem o coração
            </span>
          </h2>
        </div>

        {/* Card de depoimento */}
        <div className="relative">
          <div
            className="relative rounded-3xl p-8 md:p-12 transition-all duration-500"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(201,169,110,0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Ícone de citação */}
            <div
              className="absolute -top-5 left-10 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a96e, #a87c3e)" }}
            >
              <Quote size={18} className="text-white" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-light"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {t.initials}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex-1">
                {/* Estrelas */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-[#c9a96e] text-base">★</span>
                  ))}
                </div>

                <p
                  className="text-white/80 font-light leading-relaxed text-base md:text-lg mb-6 italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                <div>
                  <p
                    className="font-medium text-white text-sm tracking-wide"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs text-[#c9a96e] font-light tracking-wider mt-0.5 uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "#c9a96e" : "rgba(201,169,110,0.3)",
                  }}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            {/* Setas */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(201,169,110,0.3)",
                  color: "#c9a96e",
                }}
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #c9a96e, #a87c3e)",
                  color: "#fff",
                }}
                aria-label="Próximo"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Contador */}
        <p
          className="text-center mt-6 text-[#7a6e63] text-xs tracking-widest uppercase font-light"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {current + 1} de {testimonials.length} depoimentos
        </p>
      </div>
    </section>
  );
}
