import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "../data/content";
import { MagneticButton } from "./MagneticButton";
import { getGsap } from "../animations/gsap";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const { gsap } = getGsap();
    gsap.fromTo(
      "[data-nav-item]",
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.06, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/8" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary">
        <a href="#top" className="display text-lg tracking-[0.18em]" data-nav-item>
          {brand.shortName}
        </a>
        <ul className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {navLinks.map((link) => (
            <li key={link.id} data-nav-item>
              <a href={`#${link.id}`} className="transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block" data-nav-item>
          <MagneticButton href="#contact">{"Let's Build ->"}</MagneticButton>
        </div>
        <button
          type="button"
          className="rounded-full border border-white/15 p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="glass border-t border-white/8 px-6 py-8 md:hidden">
          <ul className="space-y-5 text-2xl">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-8 inline-block text-accent" onClick={() => setOpen(false)}>
            {"Let's Build ->"}
          </a>
        </div>
      ) : null}
    </header>
  );
}
