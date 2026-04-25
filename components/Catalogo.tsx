"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, ExternalLink } from "lucide-react";

type Category = "todos" | "croche" | "amigurumi" | "acessorios" | "kits";

interface Product {
  id: number;
  name: string;
  category: Category;
  tag: string;
  color: string;
  accent: string;
  description: string;
  image: string;
  objectPosition?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Raposa Amigurumi",
    category: "amigurumi",
    tag: "Amigurumi",
    color: "#f0e6f5",
    accent: "#b89ac9",
    description: "Peça com acabamento delicado e fios de alta qualidade.",
    image: "/catalogo-raposa-amigurumi.jpeg",
    objectPosition: "center 42%",
  },
  {
    id: 2,
    name: "Porta Objetos",
    category: "croche",
    tag: "Crochê",
    color: "#f5ede0",
    accent: "#c9a96e",
    description: "Organização cuidadosa para o seu dia a dia.",
    image: "/catalogo-porta-objeto-croche.jpeg",
    objectPosition: "center 56%",
  },
  {
    id: 3,
    name: "Decorativo de Porta",
    category: "acessorios",
    tag: "Acessório",
    color: "#e8f5f0",
    accent: "#6ec9a4",
    description: "Detalhe personalizado para decorar ambientes.",
    image: "/catalogo-decorativo-porta-acessorio.jpeg",
    objectPosition: "center 48%",
  },
  {
    id: 4,
    name: "Mini Corujinha Amigurumi",
    category: "acessorios",
    tag: "Acessório",
    color: "#fde8f5",
    accent: "#c96e9a",
    description: "Mini peça charmosa para presentear.",
    image: "/catalogo-mini-amigurumi-coruja-acessorio.jpeg",
    objectPosition: "center 34%",
  },
  {
    id: 5,
    name: "Kit Misto",
    category: "kits",
    tag: "Kit",
    color: "#e8f0e0",
    accent: "#8ab56e",
    description: "Composição com peças variadas em crochê.",
    image: "/catalogo-kit-misto.jpeg",
    objectPosition: "center 52%",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "Todos", value: "todos" },
  { label: "Crochê", value: "croche" },
  { label: "Amigurumi", value: "amigurumi" },
  { label: "Acessórios", value: "acessorios" },
  { label: "Kits", value: "kits" },
];

export default function Catalogo() {
  const [active, setActive] = useState<Category>("todos");
  const [liked, setLiked] = useState<number[]>([]);

  const filtered =
    active === "todos" ? products : products.filter((product) => product.category === active);

  return (
    <section
      id="catalogo"
      className="py-24 lg:py-32"
      style={{ background: "linear-gradient(180deg, #faf9f7 0%, #f5ede0 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ background: "#c9a96e" }} />
            <span
              className="text-xs font-light uppercase tracking-[0.3em] text-[#c9a96e]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Nossas criações
            </span>
            <div className="h-px w-8" style={{ background: "#c9a96e" }} />
          </div>

          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <span className="block text-4xl font-light tracking-wide text-[#2c2c2c] lg:text-5xl">
              Catálogo de
            </span>
            <span
              className="mt-1 block text-5xl font-light italic text-[#c9a96e] lg:text-6xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Peças Únicas
            </span>
          </h2>

          <p
            className="mx-auto mt-4 max-w-md font-light text-[#7a6e63]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Cada peça é criada com fios cuidadosamente selecionados e muito amor.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className="rounded-full px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                background:
                  active === filter.value
                    ? "linear-gradient(135deg, #c9a96e, #a87c3e)"
                    : "rgba(255,255,255,0.8)",
                color: active === filter.value ? "#fff" : "#7a6e63",
                border:
                  active === filter.value
                    ? "1px solid transparent"
                    : "1px solid #ddd5c8",
                boxShadow:
                  active === filter.value ? "0 4px 15px rgba(201,169,110,0.35)" : "none",
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
          {filtered.map((product, idx) => (
            <div
              key={product.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "#fff",
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                animationDelay: `${idx * 0.05}s`,
              }}
            >
              <div className="relative aspect-[5/4] overflow-hidden" style={{ background: product.color }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: product.objectPosition ?? "center" }}
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(0,0,0,0.08) 100%)",
                  }}
                />

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, ${product.accent}44 12px, transparent 13px)`,
                    backgroundSize: "56px 56px",
                  }}
                />

                <span
                  className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider"
                  style={{
                    background: product.accent + "22",
                    color: product.accent,
                    fontFamily: "'Montserrat', sans-serif",
                    border: `1px solid ${product.accent}55`,
                    backdropFilter: "blur(2px)",
                  }}
                >
                  {product.tag}
                </span>

                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    setLiked((prev) =>
                      prev.includes(product.id)
                        ? prev.filter((id) => id !== product.id)
                        : [...prev, product.id]
                    );
                  }}
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/75 backdrop-blur-sm transition-colors hover:bg-white"
                  aria-label="Favoritar"
                >
                  <Heart
                    size={14}
                    className={liked.includes(product.id) ? "fill-red-400 text-red-400" : "text-[#9a8e83]"}
                  />
                </button>

                <div className="absolute inset-0 flex items-center justify-center bg-black/12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider text-white"
                    style={{ background: "linear-gradient(135deg, #c9a96e, #a87c3e)" }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <ExternalLink size={11} />
                    Encomendar
                  </a>
                </div>
              </div>

              <div className="p-4">
                <h3
                  className="mb-0.5 text-sm font-medium text-[#2c2c2c]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-xs font-light text-[#9a8e83]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {product.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span
                    className="text-xs font-medium text-[#c9a96e]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Sob consulta
                  </span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-xs text-[#c9a96e]">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[#c9a96e]/40 px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#5a4e44] transition-all duration-300 hover:scale-105 hover:border-[#c9a96e] hover:bg-[#c9a96e] hover:text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Ver mais peças no WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
