import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CONTACT_CONFIG, NAV_LINKS } from '../data/content';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled || mobileOpen
          ? 'bg-[#F5F3EC]/95 border-b border-[#BCBCB6]/60 backdrop-blur-sm'
          : 'bg-[#F5F3EC]/85 border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4 md:px-10">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#inicio"
          aria-label="E Estrada — Ir al inicio"
          className="inline-flex items-center whitespace-nowrap shrink-0 transition-opacity duration-200 hover:opacity-80"
        >
          <BrandLogo />
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-[14px] font-medium text-[#383733]/85 transition-colors duration-200 hover:text-[#383733] whitespace-nowrap shrink-0"
            >
              <span>{link.label}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-[1.5px] origin-left scale-x-0 bg-[#C65C3B] transition-transform duration-200 ease-out group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={CONTACT_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-sm bg-[#C65C3B] px-5 py-2.5 text-[14px] font-medium text-[#F5F3EC] transition-colors duration-200 hover:bg-[#A94A2D] whitespace-nowrap shrink-0"
          >
            Hablemos
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-11 w-11 items-center justify-center text-[#383733] transition-colors duration-200 hover:text-[#C65C3B] md:hidden"
          >
            {mobileOpen ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="border-t border-[#BCBCB6]/60 bg-[#F5F3EC] px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-[16px] font-medium text-[#383733] border-b border-[#BCBCB6]/35 transition-colors duration-200 hover:text-[#C65C3B]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-5">
            <a
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-sm bg-[#C65C3B] px-6 py-3.5 text-[15px] font-medium text-[#F5F3EC] transition-colors duration-200 hover:bg-[#A94A2D]"
            >
              Hablemos por WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
