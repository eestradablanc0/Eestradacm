import React from 'react';

export const Growth: React.FC = () => {
  return (
    <section
      aria-labelledby="growth-heading"
      className="border-t border-[#BCBCB6]/60 bg-[#ECE9DF]/65 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Text */}
          <div className="lg:col-span-8">
            <p className="text-[13px] font-medium text-[#2C4A43]">
              En evolución
            </p>
            <h2
              id="growth-heading"
              className="mt-4 font-serif text-[clamp(1.65rem,2.6vw,2.35rem)] font-normal leading-[1.3] tracking-[-0.015em] text-[#383733]"
            >
              Estoy en constante aprendizaje. Me interesa ampliar mi mirada
              sobre el marketing digital, explorar nuevas herramientas y sumar
              conocimientos que me permitan participar cada vez más en la
              estrategia y el desarrollo de campañas.
            </h2>
          </div>

          {/* Restrained Organic Geometric Exploration Graphic */}
          <div className="flex items-center lg:col-span-4 lg:justify-end">
            <div className="flex items-center gap-5 border-t border-[#BCBCB6]/70 pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <svg
                width="68"
                height="68"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0"
              >
                <circle
                  cx="34"
                  cy="34"
                  r="31"
                  stroke="#BCBCB6"
                  strokeWidth="1"
                />
                <path
                  d="M18 46C18 30 26 20 34 20C42 20 50 30 50 46"
                  stroke="#2C4A43"
                  strokeWidth="1.25"
                />
                <line
                  x1="14"
                  y1="46"
                  x2="54"
                  y2="46"
                  stroke="#383733"
                  strokeWidth="1"
                />
                <circle cx="34" cy="20" r="3.5" fill="#C65C3B" />
              </svg>
              <div>
                <p className="text-[13px] font-medium text-[#383733]">
                  Mirada en movimiento
                </p>
                <p className="mt-1 max-w-[24ch] text-[13.5px] leading-[1.55] text-[#5E5C56]">
                  Creciendo desde el hacer diario hacia el pensamiento
                  estratégico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
