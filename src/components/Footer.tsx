import React from 'react';
import { BrandLogo } from './BrandLogo';
import { CONTACT_CONFIG } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#BCBCB6]/70 bg-[#F5F3EC] py-10 md:py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <a
            href="#inicio"
            aria-label="Volver arriba — E Estrada"
            className="inline-flex items-center whitespace-nowrap shrink-0"
          >
            <BrandLogo />
          </a>
          <span
            aria-hidden="true"
            className="hidden h-4 w-px bg-[#BCBCB6] sm:inline-block"
          />
          <p className="text-[13.5px] text-[#5E5C56]">
            Social Media · Contenido · Marketing
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-[#5E5C56]">
          <a
            href={CONTACT_CONFIG.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#C65C3B] whitespace-nowrap"
          >
            LinkedIn
          </a>
          <a
            href={CONTACT_CONFIG.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#C65C3B] whitespace-nowrap"
          >
            Behance
          </a>
          <span aria-hidden="true" className="text-[#BCBCB6]">
            ·
          </span>
          <p className="tabular-nums">© {currentYear} E Estrada</p>
        </div>
      </div>
    </footer>
  );
};
