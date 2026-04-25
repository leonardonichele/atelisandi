"use client";

import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#footer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e8e0d5]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-4">
        {/* Logo oficial */}
        <button
          onClick={() => handleNav("#hero")}
          className="group hover:opacity-80 transition-opacity text-[#0a0a0a]"
          aria-label="AteliSandi - Ir ao início"
        >
          <Logo className="h-12 w-auto" />
        </button>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-sm font-light tracking-widest uppercase text-[#5a4e44] hover:text-[#c9a96e] transition-colors duration-300 relative group"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#c9a96e] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #c9a96e, #b8924a)",
            color: "#fff",
            fontFamily: "'Montserrat', sans-serif",
            boxShadow: "0 4px 15px rgba(201,169,110,0.35)",
          }}
        >
          <Heart size={13} />
          Encomendar
        </a>

        {/* Burger mobile */}
        <button
          className="md:hidden p-2 rounded-lg text-[#5a4e44] hover:bg-[#f0ebe3] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(255,255,255,0.98)" }}
      >
        <ul className="flex flex-col px-6 pb-6 gap-1 border-t border-[#e8e0d5]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="w-full text-left py-3 text-sm font-light tracking-widest uppercase text-[#5a4e44] hover:text-[#c9a96e] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-medium tracking-widest uppercase text-white transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #c9a96e, #b8924a)" }}
            >
              <Heart size={13} />
              Encomendar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
