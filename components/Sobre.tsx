"use client";

import Image from "next/image";
import { Heart, Award, Scissors, Star } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Feito com Amor",
    desc: "Cada ponto dado é pensado com carinho para quem vai receber.",
  },
  {
    icon: Scissors,
    title: "Artesanato Puro",
    desc: "Técnicas tradicionais e modernas combinadas em peças únicas.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    desc: "Materiais selecionados que garantem durabilidade e beleza.",
  },
  {
    icon: Star,
    title: "Personalização",
    desc: "Peças exclusivas feitas sob medida para o seu gosto.",
  },
];

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "#faf9f7" }}
    >
      <div
        className="absolute left-0 top-0 h-full w-1"
        style={{ background: "linear-gradient(to bottom, transparent, #c9a96e, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute -left-4 -top-4 h-full w-full rounded-3xl"
                style={{ border: "2px solid #c9a96e", opacity: 0.3 }}
              />

              <div className="relative mx-auto w-full max-w-[540px]">
                <div
                  className="absolute -inset-2 rounded-[34px]"
                  style={{
                    background:
                      "linear-gradient(140deg, rgba(237,218,184,0.5), rgba(255,255,255,0.72))",
                  }}
                />

                <div
                  className="relative aspect-[9/10] overflow-hidden rounded-[30px] border border-[#e4cfaa] bg-[#ece7f2] p-5"
                  style={{
                    boxShadow:
                      "0 20px 60px rgba(123,96,58,0.18), inset 0 0 0 1px rgba(255,255,255,0.45)",
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/70">
                    <Image
                      src="/debora-sandi-hq.jpg"
                      alt="Débora Sandi, artesã e criadora"
                      fill
                      priority
                      quality={100}
                      sizes="(min-width: 1024px) 500px, 88vw"
                      className="scale-[0.92] object-cover object-center"
                    />

                    <div
                      className="absolute inset-0 rounded-[22px]"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(23,17,10,0.02) 36%, rgba(23,17,10,0.3) 100%)",
                      }}
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-[10px] rounded-[24px] border border-[#d8bc8a]/55" />

                  <div
                    className="absolute right-3 top-3 h-16 w-16 rounded-full border border-[#d8bc8a]"
                    style={{ background: "linear-gradient(145deg, #f4e9d5, #dfc08a)" }}
                  />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div
                      className="inline-flex flex-col rounded-2xl border border-white/35 px-4 py-3 backdrop-blur-[2px]"
                      style={{ background: "rgba(35, 25, 14, 0.34)" }}
                    >
                      <p
                        className="text-3xl font-light italic text-white"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        Débora Sandi
                      </p>
                      <p
                        className="mt-1 text-[11px] font-light uppercase tracking-[0.24em] text-white/90"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Artesã e criadora
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#c9a96e" }} />
              <span
                className="text-xs font-light uppercase tracking-[0.3em] text-[#c9a96e]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Nossa essência
              </span>
            </div>

            <h2 className="mb-6 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <span className="block text-4xl font-light tracking-wide text-[#2c2c2c] lg:text-5xl">
                Uma paixão
              </span>
              <span
                className="mt-1 block text-5xl font-light italic text-[#c9a96e] lg:text-6xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                transformada em arte
              </span>
            </h2>

            <div
              className="mb-10 space-y-4 font-light leading-relaxed text-[#6e6258]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                Transformamos linhas, fibras e fios em peças artesanais únicas,
                feitas ponto a ponto com dedicação e carinho.
              </p>
              <p>
                Cada peça conta uma história, seja um amigurumi cheio de personalidade, um tapete
                aconchegante em crochê ou uma bolsa artesanal repleta de detalhes. Aqui, o
                artesanato é tratado como arte, e você como parte dessa história.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-[#e8e0d5] p-4 transition-all duration-300 hover:border-[#c9a96e]/40 hover:bg-[#fdf9f4]"
                >
                  <div
                    className="mb-3 flex h-9 w-9 items-center justify-center rounded-full"
                    style={{ background: "linear-gradient(135deg, #f5ede0, #eaddc6)" }}
                  >
                    <Icon size={16} className="text-[#c9a96e]" />
                  </div>
                  <p
                    className="mb-1 text-sm font-medium text-[#3a3330]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-xs font-light leading-relaxed text-[#8a7a6b]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
