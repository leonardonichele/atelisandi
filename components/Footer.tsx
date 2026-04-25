"use client";

import Image from "next/image";
import { Heart, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const footerLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a160f 0%, #251e13 100%)" }}
    >
      {/* Linha decorativa topo */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(to right, transparent, #c9a96e, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Coluna 1 - Marca */}
          <div className="lg:col-span-2">
            {/* Logo oficial */}
            <div className="text-white mb-4">
              <Logo className="h-14 w-auto" />
            </div>

            <p
              className="text-[#9a8e83] font-light leading-relaxed text-sm mb-6 max-w-xs"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Artesanato feito com amor e dedicação. Peças únicas em crochê, fibra,
              amigurumis e muito mais, criadas ponto a ponto para encantar sua vida.
            </p>

            {/* Redes sociais */}
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/atelisandi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#E1306C",
                }}
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/atelisandi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#1877F2",
                }}
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#25D366",
                }}
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#E60023",
                }}
                aria-label="Pinterest"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2 - Navegação */}
          <div>
            <h4
              className="text-white text-xs tracking-[0.25em] uppercase font-medium mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-[#9a8e83] text-sm font-light hover:text-[#c9a96e] transition-colors duration-200 text-left"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4
              className="text-white text-xs tracking-[0.25em] uppercase font-medium mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
                <span
                  className="text-[#9a8e83] text-sm font-light leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Brasil - atendimento <br /> em todo o país
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#c9a96e] flex-shrink-0" />
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9a8e83] text-sm font-light hover:text-[#c9a96e] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  (00) 00000-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#c9a96e] flex-shrink-0" />
                <a
                  href="mailto:contato@atelisandi.com.br"
                  className="text-[#9a8e83] text-sm font-light hover:text-[#c9a96e] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  contato@atelisandi.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div
          className="w-full h-px mb-8"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#5a5048] text-xs font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            CNPJ: 00.000.000/0001-00 - Ateli Sandi ME
          </p>

          <p
            className="text-[#5a5048] text-xs font-light flex items-center gap-1.5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Feito com{" "}
            <Heart size={11} className="text-[#c9a96e]" />
            {" "}© {new Date().getFullYear()} AteliSandi. Todos os direitos reservados.
          </p>

          <a
            href="https://insintese.com.br"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Insíntese Tecnologia"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <Image
              src="/insintese-logo.png"
              alt="Insíntese"
              width={184}
              height={24}
              className="h-6 w-auto object-contain"
            />
          </a>
        </div>
      </div>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
        style={{ background: "#25D366" }}
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}
