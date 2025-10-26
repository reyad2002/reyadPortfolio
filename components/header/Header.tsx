"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // تغيير الخلفية عند الاسكرول
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // هايلايت القسم الحالي (بسيط يعتمد على الهاش عند النقر)
  useEffect(() => {
    const onHash = () => setActive(window.location.hash || "#home");
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // قفل المنيو عند تغيير الحجم فوق md
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navBase =
    "text-sm transition-colors";
  const navInactive = "text-slate-300 hover:text-cyan-400";
  const navActive = "text-cyan-400";

  return (
    <nav
      className={[
        "fixed top-0 z-50 w-full border-b backdrop-blur-sm transition-colors",
        scrolled ? "bg-slate-900/95 border-slate-800" : "bg-slate-900/70 border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-white">Reyad </span>
            <span className="text-cyan-400">Mohamed</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`${navBase} ${active === l.href ? navActive : navInactive}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            aria-label="Toggle Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-800/60 p-2 text-slate-200 hover:bg-slate-800"
          >
            {/* Hamburger / X */}
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 transform bg-current transition ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 transform bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-5 transform bg-current transition ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      <div
        className={`md:hidden overflow-hidden border-t border-slate-800 bg-slate-900/95 transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 space-y-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2 ${navBase} ${
                active === l.href ? navActive : navInactive
              } hover:bg-slate-800/60`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
