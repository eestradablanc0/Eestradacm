import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export const Process: React.FC = () => {
  return (
    <section
      id="proceso"
      className="scroll-mt-20 border-t border-[#BCBCB6]/60 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Heading Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[13px] font-medium text-[#2C4A43]">
              Estrategia + Exploración
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,3.3vw,3rem)] font-normal leading-[1.12] tracking-[-0.02em] text-[#383733]">
              Cómo abordo un desafío
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15.5px] leading-[1.7] text-[#5E5C56]">
              Un recorrido simple y flexible para pensar antes de producir,
              encontrar un punto de vista claro y llevarlo a la práctica.
            </p>
          </div>
        </div>

        {/* Editorial Connected Timeline Visual System */}
        <div className="relative mt-16">
          {/* Desktop Horizontal Connecting Graphic Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:block absolute top-[23px] right-0 left-0"
          >
            <svg
              viewBox="0 0 1120 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-full"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="10"
                x2="1120"
                y2="10"
                stroke="#BCBCB6"
                strokeWidth="1"
              />
              <path
                d="M140 10 C 260 2, 300 18, 420 10 C 540 2, 580 18, 700 10 C 820 2, 860 18, 980 10"
                stroke="#C65C3B"
                strokeWidth="1"
                strokeOpacity="0.45"
              />
            </svg>
          </div>

          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.number} className="relative flex flex-col">
                {/* Editorial Geometric Step Marker */}
                <div className="flex items-center gap-4">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center border border-[#BCBCB6] bg-[#F5F3EC]">
                    <span className="font-serif text-[16px] font-medium text-[#C65C3B] tabular-nums">
                      {step.number}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-[#BCBCB6]/60 lg:hidden"
                  />
                </div>

                <div className="mt-7">
                  <h3 className="font-serif text-[24px] font-normal leading-[1.2] text-[#383733]">
                    <span className="sr-only">{step.number} — </span>
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#5E5C56]">
                    {step.description}
                  </p>
                </div>

                {/* Subtle organic step index accent */}
                <div
                  aria-hidden="true"
                  className="mt-6 flex items-center gap-2 text-[12px] text-[#5E5C56]/80"
                >
                  <span
                    className={`h-[2px] ${
                      index === 3 ? 'w-10 bg-[#C65C3B]' : 'w-6 bg-[#2C4A43]/60'
                    }`}
                  />
                  <span className="tabular-nums">
                    Paso {index + 1} de {PROCESS_STEPS.length}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
