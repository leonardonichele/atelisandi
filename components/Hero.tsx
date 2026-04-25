"use client";

import { useState, useEffect } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

const rotatingPhrases = [
  { line1: "Cada ponto é", highlight: "um ato de afeto", line2: "" },
  { line1: "Peça única e", highlight: "absolutamente sua", line2: "" },
  { line1: "Criada com", highlight: "presença e cuidado", line2: "" },
  { line1: "Do fio ao", highlight: "coração", line2: "" },
];

/* ─────────────────────────────────────────
   MAPA DE ZONAS (evita sobreposição)
   Cada elemento ocupa uma zona exclusiva:

   TOPO-ESQ   │  TOPO-DIR
   ───────────┼───────────
   MEIO-ESQ   │  MEIO-DIR
   ───────────┼───────────
   BASE-ESQ   │  BASE-DIR
───────────────────────────────────────── */

/* Zona TOPO-ESQ — Flor grande com caule */
function FloralSprig({
  style,
  size = 120,
  rotate = 0,
  opacity = 0.26,
}: {
  style?: React.CSSProperties;
  size?: number;
  rotate?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 100 100" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute pointer-events-none"
      style={{ opacity, transform: `rotate(${rotate}deg)`, ...style }}
    >
      <line x1="50" y1="92" x2="50" y2="32" stroke="#c9a96e" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="50" y1="72" x2="28" y2="56" stroke="#c9a96e" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="50" y1="60" x2="72" y2="44" stroke="#c9a96e" strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="50" y1="50" x2="30" y2="37" stroke="#c9a96e" strokeWidth="1"   strokeLinecap="round"/>
      <circle cx="50" cy="27" r="5.5" fill="#c9a96e"/>
      <ellipse cx="50" cy="17"  rx="3.8" ry="7" fill="#c9a96e"/>
      <ellipse cx="59" cy="20"  rx="3.8" ry="7" fill="#c9a96e" transform="rotate(60 59 20)"/>
      <ellipse cx="41" cy="20"  rx="3.8" ry="7" fill="#c9a96e" transform="rotate(-60 41 20)"/>
      <ellipse cx="58" cy="29"  rx="3.8" ry="7" fill="#c9a96e" transform="rotate(120 58 29)"/>
      <ellipse cx="42" cy="29"  rx="3.8" ry="7" fill="#c9a96e" transform="rotate(-120 42 29)"/>
      <ellipse cx="50" cy="35"  rx="3.8" ry="7" fill="#c9a96e" transform="rotate(180 50 35)"/>
      <circle cx="28" cy="56" r="3.5" fill="#c9a96e"/>
      <circle cx="72" cy="44" r="3.2" fill="#c9a96e"/>
      <circle cx="30" cy="37" r="2.8" fill="#c9a96e"/>
      <ellipse cx="37" cy="64" rx="4.5" ry="8" fill="#c9a96e" opacity="0.55" transform="rotate(-42 37 64)"/>
      <ellipse cx="63" cy="52" rx="4.5" ry="8" fill="#c9a96e" opacity="0.55" transform="rotate(42 63 52)"/>
    </svg>
  );
}

/* Zona TOPO-DIR — Novelo de crochê/fibra */
function CrochetBall({
  style,
  size = 72,
  opacity = 0.20,
}: {
  style?: React.CSSProperties;
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 80 80" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute pointer-events-none"
      style={{ opacity, ...style }}
    >
      {/* corpo */}
      <circle cx="38" cy="42" r="26" stroke="#c9a96e" strokeWidth="1.5" fill="none"/>
      {/* linhas de fio sobre o novelo */}
      <ellipse cx="38" cy="42" rx="26" ry="13" stroke="#c9a96e" strokeWidth="1"   fill="none"/>
      <ellipse cx="38" cy="42" rx="26" ry="6"  stroke="#c9a96e" strokeWidth="0.8" fill="none"/>
      <ellipse cx="38" cy="42" rx="13" ry="26" stroke="#c9a96e" strokeWidth="1"   fill="none"/>
      <ellipse cx="38" cy="42" rx="6"  ry="26" stroke="#c9a96e" strokeWidth="0.8" fill="none"/>
      {/* fio saindo */}
      <path d="M64 28 C70 18 76 8 70 2" stroke="#c9a96e" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <path d="M70 2 C74 -2 80 2 76 6"  stroke="#c9a96e" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

/* Zona MEIO-ESQ — Agulha de crochê inclinada */
function CrochetHook({
  style,
  size = 110,
  rotate = 0,
  opacity = 0.20,
}: {
  style?: React.CSSProperties;
  size?: number;
  rotate?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size * 0.36} height={size} viewBox="0 0 36 100" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute pointer-events-none"
      style={{ opacity, transform: `rotate(${rotate}deg)`, ...style }}
    >
      {/* cabo */}
      <rect x="13" y="26" width="10" height="64" rx="5" stroke="#c9a96e" strokeWidth="1.3" fill="none"/>
      {/* pescoço */}
      <path d="M13 26 C13 18 15.5 13 18 11 C20.5 13 23 18 23 26" stroke="#c9a96e" strokeWidth="1.3" fill="none"/>
      {/* haste */}
      <line x1="18" y1="11" x2="18" y2="4"  stroke="#c9a96e" strokeWidth="1.6" strokeLinecap="round"/>
      {/* gancho */}
      <path d="M18 4 C18 1 14 0 12 2 C10 4 11.5 7 14.5 7" stroke="#c9a96e" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      {/* marcações decorativas */}
      <line x1="14" y1="56" x2="22" y2="56" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      <line x1="14" y1="68" x2="22" y2="68" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      <line x1="14" y1="80" x2="22" y2="80" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

/* Zona MEIO-DIR — Agulha de tricô / costura */
function SewingNeedle({
  style,
  size = 100,
  rotate = 0,
  opacity = 0.20,
}: {
  style?: React.CSSProperties;
  size?: number;
  rotate?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size * 0.25} height={size} viewBox="0 0 25 100" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute pointer-events-none"
      style={{ opacity, transform: `rotate(${rotate}deg)`, ...style }}
    >
      {/* haste principal */}
      <line x1="12.5" y1="8" x2="12.5" y2="90" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round"/>
      {/* olho da agulha (topo) */}
      <ellipse cx="12.5" cy="7" rx="4" ry="3" stroke="#c9a96e" strokeWidth="1.4" fill="none"/>
      <ellipse cx="12.5" cy="7" rx="2" ry="1.5" stroke="#c9a96e" strokeWidth="1" fill="none"/>
      {/* ponta */}
      <path d="M10.5 88 L12.5 96 L14.5 88" stroke="#c9a96e" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
      {/* fio enrolado na agulha */}
      <path d="M12.5 30 C16 33 16 38 12.5 41 C9 44 9 49 12.5 52"
        stroke="#c9a96e" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.7"/>
    </svg>
  );
}

/* Zona BASE-ESQ — Amigurumi (ursinho de crochê) */
function AmigurumiTeddy({
  style,
  size = 90,
  opacity = 0.22,
}: {
  style?: React.CSSProperties;
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size} height={size * 1.1} viewBox="0 0 90 100" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute pointer-events-none"
      style={{ opacity, ...style }}
    >
      {/* orelhas */}
      <circle cx="28" cy="18" r="10" stroke="#c9a96e" strokeWidth="1.4" fill="none"/>
      <circle cx="28" cy="18" r="5.5" stroke="#c9a96e" strokeWidth="1"   fill="none"/>
      <circle cx="62" cy="18" r="10" stroke="#c9a96e" strokeWidth="1.4" fill="none"/>
      <circle cx="62" cy="18" r="5.5" stroke="#c9a96e" strokeWidth="1"   fill="none"/>
      {/* cabeça */}
      <circle cx="45" cy="36" r="22" stroke="#c9a96e" strokeWidth="1.6" fill="none"/>
      {/* textura de pontos de crochê na cabeça */}
      <path d="M30 28 Q35 24 40 28 Q45 32 50 28 Q55 24 60 28"
        stroke="#c9a96e" strokeWidth="0.8" fill="none" opacity="0.5"/>
      <path d="M28 36 Q33 32 38 36 Q43 40 48 36 Q53 32 58 36 Q62 40 62 36"
        stroke="#c9a96e" strokeWidth="0.8" fill="none" opacity="0.5"/>
      {/* olhos */}
      <circle cx="37" cy="32" r="2.5" fill="#c9a96e"/>
      <circle cx="53" cy="32" r="2.5" fill="#c9a96e"/>
      {/* nariz e boca */}
      <ellipse cx="45" cy="40" rx="4" ry="2.5" fill="#c9a96e"/>
      <path d="M41 42 Q45 47 49 42" stroke="#c9a96e" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      {/* corpo */}
      <ellipse cx="45" cy="72" rx="18" ry="20" stroke="#c9a96e" strokeWidth="1.5" fill="none"/>
      {/* textura corpo */}
      <path d="M32 66 Q36 62 40 66 Q44 70 48 66 Q52 62 56 66"
        stroke="#c9a96e" strokeWidth="0.8" fill="none" opacity="0.45"/>
      {/* barriga */}
      <ellipse cx="45" cy="72" rx="10" ry="11" stroke="#c9a96e" strokeWidth="1"   fill="none"/>
      {/* braços */}
      <path d="M27 60 C18 56 14 64 18 70 C22 76 27 72 28 68"
        stroke="#c9a96e" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <path d="M63 60 C72 56 76 64 72 70 C68 76 63 72 62 68"
        stroke="#c9a96e" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      {/* pernas */}
      <path d="M34 90 C30 95 26 97 28 100" stroke="#c9a96e" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <path d="M56 90 C60 95 64 97 62 100" stroke="#c9a96e" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      {/* patinhas */}
      <ellipse cx="27"  cy="100" rx="6" ry="3" stroke="#c9a96e" strokeWidth="1.1" fill="none"/>
      <ellipse cx="63"  cy="100" rx="6" ry="3" stroke="#c9a96e" strokeWidth="1.1" fill="none"/>
    </svg>
  );
}

/* Zona BASE-DIR — Fio ondulado saindo de novelo pequeno */
function FiberCoil({
  style,
  opacity = 0.18,
}: {
  style?: React.CSSProperties;
  opacity?: number;
}) {
  return (
    <svg
      width={110} height={90} viewBox="0 0 110 90" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute pointer-events-none"
      style={{ opacity, ...style }}
    >
      {/* novelo pequeno */}
      <circle cx="20" cy="68" r="18" stroke="#c9a96e" strokeWidth="1.3" fill="none"/>
      <ellipse cx="20" cy="68" rx="18" ry="9"  stroke="#c9a96e" strokeWidth="0.9" fill="none"/>
      <ellipse cx="20" cy="68" rx="9"  ry="18" stroke="#c9a96e" strokeWidth="0.9" fill="none"/>
      {/* fio saindo e percorrendo em ondas */}
      <path
        d="M36 58 C46 50 50 40 44 34 C38 28 46 20 56 24 C66 28 68 18 80 14 C90 10 100 16 108 10"
        stroke="#c9a96e" strokeWidth="1.3" strokeLinecap="round" fill="none"
      />
      {/* segunda linha paralela do fio (espessura) */}
      <path
        d="M37 61 C47 53 51 43 45 37 C39 31 47 23 57 27 C67 31 69 21 81 17 C91 13 101 19 109 13"
        stroke="#c9a96e" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5"
      />
    </svg>
  );
}

/* Divisor floral */
function LineDivider() {
  return (
    <div className="flex items-center justify-center gap-3 w-full max-w-xs mx-auto">
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #c9a96e50)" }}/>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.8" fill="#c9a96e" opacity="0.7"/>
        {[0,60,120,180,240,300].map((a, i) => (
          <ellipse key={i}
            cx={12 + Math.cos((a*Math.PI)/180)*5.5}
            cy={12 + Math.sin((a*Math.PI)/180)*5.5}
            rx="1.8" ry="3.5" fill="#c9a96e" opacity="0.5"
            transform={`rotate(${a} ${12+Math.cos((a*Math.PI)/180)*5.5} ${12+Math.sin((a*Math.PI)/180)*5.5})`}
          />
        ))}
      </svg>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #c9a96e50)" }}/>
    </div>
  );
}

const qualities = [
  { icon: "✦", label: "100% artesanal" },
  { icon: "✦", label: "Peça única" },
  { icon: "✦", label: "Feita com afeto" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % rotatingPhrases.length);
        setVisible(true);
      }, 450);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const phrase = rotatingPhrases[index];

  return (
    <section
      id="hero"
      className="relative h-screen max-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #faf9f7 0%, #f5ede0 50%, #ede3d5 100%)" }}
    >
      {/* blobs de luz suaves */}
      <div className="absolute top-16 left-8 w-56 h-56 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a96e, transparent)" }}/>
      <div className="absolute bottom-16 right-8 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #d4b896, transparent)" }}/>

      {/*
        GRID DE POSICIONAMENTO — 3 colunas × 3 linhas
        Coluna A: left 2%–18%   B: left 30%–70%   C: right 2%–18%
        Linha 1: top 5%–30%     Linha 2: top 35%–65%    Linha 3: top 68%–90%

        A1 = Flor grande          B1 = Novelo topo-centro    C1 = Florezinha pequena
        A2 = Agulha crochê        B2 = — (texto central)     C2 = Agulha costura
        A3 = Amigurumi ursinho    B3 = Florezinha base       C3 = Fio + novelo
      */}

      {/* A1 — Flor grande com caule, topo-esquerda */}
      <FloralSprig size={150} opacity={0.30} rotate={-18}
        style={{ top: "5%", left: "3%" }}/>

      {/* B1 — Novelo, topo-centro (levemente à esquerda do centro) */}
      <CrochetBall size={78} opacity={0.22}
        style={{ top: "7%", left: "30%" }}/>

      {/* C1 — Florezinha menor, topo-direita */}
      <FloralSprig size={90} opacity={0.24} rotate={165}
        style={{ top: "6%", right: "4%" }}/>

      {/* A2 — Agulha de crochê, meio-esquerda, mais ao centro */}
      <CrochetHook size={115} opacity={0.22} rotate={-22}
        style={{ top: "38%", left: "14%" }}/>

      {/* C2 — Agulha de costura, meio-direita, mais ao centro */}
      <SewingNeedle size={110} opacity={0.21} rotate={18}
        style={{ top: "34%", right: "13%" }}/>

      {/* B2-sup — Florezinha pequena, meio-centro levemente à direita */}
      <FloralSprig size={65} opacity={0.17} rotate={-8}
        style={{ top: "28%", right: "25%" }}/>

      {/* B2-inf — Florezinha pequena, meio-centro levemente à esquerda */}
      <FloralSprig size={60} opacity={0.16} rotate={12}
        style={{ top: "52%", left: "22%" }}/>

      {/* A3 — Amigurumi ursinho, base-esquerda mais ao centro */}
      <AmigurumiTeddy size={95} opacity={0.26}
        style={{ bottom: "5%", left: "10%" }}/>

      {/* B3 — Florezinha base-centro */}
      <FloralSprig size={80} opacity={0.20} rotate={-15}
        style={{ bottom: "8%", left: "42%" }}/>

      {/* C3 — Fio ondulado + novelo, base-direita mais ao centro */}
      <FiberCoil opacity={0.21}
        style={{ bottom: "6%", right: "8%" }}/>

      {/* Extra C2-baixo — novelo secundário, entre meio e base direita */}
      <CrochetBall size={55} opacity={0.16}
        style={{ bottom: "28%", right: "22%" }}/>

      {/* ── Conteúdo central ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-16 md:px-20 text-center flex flex-col items-center gap-4">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a96e]/30 bg-white/60 backdrop-blur-sm">
          <Sparkles size={11} className="text-[#c9a96e]"/>
          <span className="text-[10px] tracking-[0.22em] uppercase text-[#8a7a6b] font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Peças que vivem com você
          </span>
          <Sparkles size={11} className="text-[#c9a96e]"/>
        </div>

        <LineDivider/>

        {/* Título animado */}
        <div
          className="transition-all duration-500 ease-in-out"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)" }}
        >
          <h1 className="leading-none select-none">
            <span className="block text-2xl md:text-[2rem] font-light tracking-[0.08em] uppercase text-[#2c2c2c]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {phrase.line1}
            </span>
            <span className="block text-5xl md:text-[4.8rem] italic font-light text-[#c9a96e] py-1 md:py-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.1 }}>
              {phrase.highlight}
            </span>
            {phrase.line2 && (
              <span className="block text-2xl md:text-[2rem] font-light tracking-[0.08em] uppercase text-[#2c2c2c]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {phrase.line2}
              </span>
            )}
          </h1>
        </div>

        {/* Dots */}
        <div className="flex gap-1.5 items-center">
          {rotatingPhrases.map((_, i) => (
            <button key={i}
              onClick={() => { setVisible(false); setTimeout(() => { setIndex(i); setVisible(true); }, 300); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? "20px" : "6px",
                height: "6px",
                background: i === index ? "#c9a96e" : "rgba(201,169,110,0.3)",
              }}
              aria-label={`Frase ${i + 1}`}
            />
          ))}
        </div>

        <LineDivider/>

        {/* Subtítulo */}
        <p className="max-w-xs mx-auto text-[#7a6e63] text-[13px] font-light leading-relaxed -mt-1"
          style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Amigurumis, porta-objetos, peças decorativas. Funcionais,
          afetivas e feitas para durar.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-xs font-medium tracking-widest uppercase text-white transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #c9a96e, #a87c3e)",
              fontFamily: "'Montserrat', sans-serif",
              boxShadow: "0 6px 22px rgba(201,169,110,0.4)",
            }}
          >
            Fazer encomenda
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <button
            onClick={() => scrollToSection("#catalogo")}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-xs font-medium tracking-widest uppercase text-[#5a4e44] border border-[#c9a96e]/40 bg-white/70 backdrop-blur-sm hover:bg-white hover:border-[#c9a96e] transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Ver catálogo
          </button>
        </div>

        {/* Pills */}
        <div className="flex items-center gap-2 flex-wrap justify-center pt-1">
          {qualities.map((q) => (
            <span key={q.label}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-light tracking-widest uppercase"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(201,169,110,0.3)",
                color: "#8a7a6b",
                backdropFilter: "blur(4px)",
              }}
            >
              <span className="text-[#c9a96e] text-[8px]">{q.icon}</span>
              {q.label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("#sobre")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 hover:opacity-60 transition-opacity animate-float"
        aria-label="Rolar para baixo"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-light text-[#9a8e83]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Explorar
        </span>
        <ArrowDown size={13} className="text-[#c9a96e]"/>
      </button>
    </section>
  );
}
