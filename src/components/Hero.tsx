import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { CONTACT_CONFIG, HERO_MEDIA } from '../data/content';
import { BrandMonogramMark } from './BrandLogo';
import { EditorialImage } from './EditorialImage';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28"
    >
      {/* Subtle architectural corner guide lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto max-w-[1200px] px-6 md:px-10"
      >
        <div className="h-px w-full bg-[#BCBCB6]/45" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Balanced 2-Column Editorial Split */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Typographic Hierarchy */}
          <div className="flex flex-col justify-between lg:col-span-7 lg:py-3">
            <div>
              {/* Clean unboxed identity kicker */}
              <p className="mb-7 flex flex-wrap items-center gap-2.5 text-[13px] font-medium tracking-[0.02em] text-[#2C4A43]">
                <span>Social Media</span>
                <span aria-hidden="true" className="text-[#BCBCB6]">·</span>
                <span>Contenido</span>
                <span aria-hidden="true" className="text-[#BCBCB6]">·</span>
                <span>Marketing</span>
              </p>

              {/* Editorial Display Headline */}
              <h1 className="font-serif text-[clamp(2.45rem,4.4vw,4.1rem)] font-normal leading-[1.08] tracking-[-0.025em] text-[#383733] max-w-[17ch]">
                Pienso{' '}
                <span className="italic text-[#C65C3B]">ideas</span>. Encuentro{' '}
                <span className="italic text-[#C65C3B]">caminos</span>. Las llevo
                a digital.
              </h1>

              {/* Core Positioning Statement */}
              <p className="mt-8 max-w-[54ch] text-[18px] font-medium leading-[1.55] text-[#383733] md:text-[19px]">
                Combino estrategia, creatividad y contenido para conectar marcas
                con sus audiencias.
              </p>

              {/* Short Professional Introduction */}
              <p className="mt-4 max-w-[54ch] text-[15.5px] leading-[1.7] text-[#5E5C56]">
                Soy Esme Estrada. Trabajo en Social Media y creación de
                contenido, con interés en la estrategia detrás de cada idea y en
                cómo llevarla a la práctica.
              </p>
            </div>

            {/* CTAs: Single Primary Terracotta Anchor + Secondary Bottle Green Outline */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="inline-flex min-h-[46px] items-center gap-2.5 rounded-sm bg-[#C65C3B] px-6 py-3 text-[15px] font-medium text-[#F5F3EC] transition-colors duration-200 hover:bg-[#A94A2D] whitespace-nowrap shrink-0"
              >
                <span>Conocé mis proyectos</span>
                <ArrowDownRight size={17} strokeWidth={1.75} aria-hidden="true" />
              </a>

              <a
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center gap-2.5 rounded-sm border border-[#2C4A43] px-6 py-3 text-[15px] font-medium text-[#2C4A43] transition-colors duration-200 hover:bg-[#2C4A43] hover:text-[#F5F3EC] whitespace-nowrap shrink-0"
              >
                <span>Hablemos</span>
                <ArrowUpRight size={17} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Distinctive Editorial Visual Composition */}
          <div className="relative flex flex-col lg:col-span-5">
            <div className="relative flex-1 min-h-[340px] sm:min-h-[400px] lg:min-h-[480px]">
              {/* Subtle offset geometric frame evoking exploration and structure */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-3 -right-3 bottom-5 left-5 border border-[#BCBCB6]/80"
              />

              {/* Primary Art-Directed Still Life */}
              <EditorialImage
                src={HERO_MEDIA.image}
                alt={HERO_MEDIA.alt}
                fallbackLabel="E Estrada — Estrategia + Exploración"
                priority
                className="relative z-10 h-full w-full border border-[#BCBCB6]/45"
                imgClassName="transition-transform duration-700 ease-out hover:scale-[1.02]"
              />

              {/* Restrained E Monogram Emblem anchored to bottom-left corner */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -left-5 z-20 hidden h-[88px] w-[88px] items-center justify-center rounded-full bg-[#F5F3EC] p-2.5 shadow-[0_8px_24px_rgba(56,55,51,0.06)] sm:flex"
              >
                <BrandMonogramMark className="h-full w-full" />
              </div>
            </div>

            {/* Quiet editorial caption below image */}
            <div className="mt-5 flex items-center justify-between gap-4 pl-0 sm:pl-16 text-[13px] text-[#5E5C56]">
              <span>Estrategia + Exploración</span>
              <span aria-hidden="true" className="h-px flex-1 bg-[#BCBCB6]/60" />
              <span className="font-serif italic text-[#383733]">Ideas en forma</span>
            </div>
          </div>
        </div>

        {/* Full-Width Editorial Thesis Row Below Hero Split */}
        <div className="mt-16 border-t border-[#BCBCB6]/60 pt-7 md:mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-10">
            <div>
              <p className="text-[13px] font-medium text-[#2C4A43]">
                Observación de redes
              </p>
              <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[#5E5C56]">
                Entender cómo circulan los mensajes, qué conversa la audiencia y
                dónde hay espacio real para una marca.
              </p>
            </div>
            <div>
              <p className="text-[13px] font-medium text-[#2C4A43]">
                Criterio creativo y estratégico
              </p>
              <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[#5E5C56]">
                Conectar objetivos de comunicación con ideas claras, sensibles a
                la identidad de cada proyecto.
              </p>
            </div>
            <div>
              <p className="text-[13px] font-medium text-[#2C4A43]">
                Bajada práctica
              </p>
              <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[#5E5C56]">
                Encontrar soluciones concretas con los recursos disponibles y
                llevar el pensamiento a piezas reales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
