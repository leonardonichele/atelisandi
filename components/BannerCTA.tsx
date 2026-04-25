import { Sparkles } from "lucide-react";

export default function BannerCTA() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f5ede0 0%, #ead9c4 50%, #f0e4d0 100%)" }}
    >
      {/* Ornamentos */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #c9a96e, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #d4b896, transparent)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-[#c9a96e]/20">
          <Sparkles size={12} className="text-[#c9a96e]" />
          <span
            className="text-xs tracking-[0.2em] uppercase text-[#8a7a6b] font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Encomendas abertas
          </span>
        </div>

        <h2 className="mb-4">
          <span
            className="block text-3xl md:text-4xl font-light text-[#2c2c2c] tracking-wide"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Quer uma peça
          </span>
          <span
            className="block text-4xl md:text-5xl italic font-light text-[#c9a96e] mt-1"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            exclusiva para você?
          </span>
        </h2>

        <p
          className="text-[#7a6e63] font-light text-base mb-8 max-w-lg mx-auto"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Faço peças personalizadas sob encomenda. Me conta sua ideia e juntas
          criamos algo único e especial!
        </p>

        <a
          href="https://wa.me/5500000000000?text=Olá%20Sandi!%20Gostaria%20de%20encomendar%20uma%20peça%20personalizada."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-medium tracking-widest uppercase text-white transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl"
          style={{
            background: "linear-gradient(135deg, #c9a96e, #a87c3e)",
            fontFamily: "'Montserrat', sans-serif",
            boxShadow: "0 6px 25px rgba(201,169,110,0.4)",
          }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Encomendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
