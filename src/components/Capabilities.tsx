import React from 'react';
import { CAPABILITIES } from '../data/content';

export const Capabilities: React.FC = () => {
  return (
    <section
      id="que-hago"
      className="scroll-mt-20 border-t border-[#BCBCB6]/60 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="text-[13px] font-medium text-[#2C4A43]">Qué hago</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,3.3vw,3rem)] font-normal leading-[1.12] tracking-[-0.02em] text-[#383733]">
              Qué puedo aportar
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="max-w-[54ch] text-[15.5px] leading-[1.7] text-[#5E5C56]">
              Estas cuatro áreas no funcionan por separado: se complementan
              dentro de un mismo proceso de comunicación, desde leer una
              oportunidad hasta resolver la pieza final.
            </p>
          </div>
        </div>

        {/* Architectural Editorial 2x2 Hairline Grid (No Generic Cards) */}
        <div className="mt-14 border-t border-[#BCBCB6]/75">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {CAPABILITIES.map((item, idx) => {
              const isRightColumn = idx % 2 === 1;
              const isBottomRow = idx >= 2;
              return (
                <article
                  key={item.number}
                  className={`flex flex-col justify-between py-9 md:py-11 ${
                    isRightColumn
                      ? 'md:border-l md:border-[#BCBCB6]/65 md:pl-10 lg:pl-12'
                      : 'md:pr-10 lg:pr-12'
                  } ${
                    isBottomRow
                      ? 'border-t border-[#BCBCB6]/65'
                      : idx > 0
                        ? 'border-t border-[#BCBCB6]/65 md:border-t-0'
                        : ''
                  }`}
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-serif text-[15px] text-[#C65C3B] tabular-nums">
                        {item.number}.
                      </span>
                      <span className="text-[13px] text-[#5E5C56]">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-[26px] font-normal leading-[1.2] tracking-[-0.015em] text-[#383733]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[1.7] text-[#5E5C56]">
                      {item.description}
                    </p>
                  </div>

                  {/* Clean Unboxed Focus Lines */}
                  <ul className="mt-7 space-y-2 border-t border-[#BCBCB6]/40 pt-5">
                    {item.pillars.map((pillar) => (
                      <li
                        key={pillar}
                        className="flex items-start gap-2.5 text-[14px] text-[#383733]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-px w-3 shrink-0 bg-[#C65C3B]"
                        />
                        <span>{pillar}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>

        {/* Connected Process Thread Strip */}
        <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#BCBCB6]/75 pt-6 text-[13.5px] text-[#5E5C56]">
          <span className="font-medium text-[#383733]">
            Un proceso integrado
          </span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#2C4A43]">
            <span>Lectura estratégica</span>
            <span aria-hidden="true" className="text-[#BCBCB6]">→</span>
            <span>Dirección creativa</span>
            <span aria-hidden="true" className="text-[#BCBCB6]">→</span>
            <span>Producción de contenido</span>
            <span aria-hidden="true" className="text-[#BCBCB6]">→</span>
            <span>Presencia en redes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
