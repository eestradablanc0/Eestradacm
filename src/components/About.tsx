import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/content';

const ABOUT_PILLARS = [
  'Comprensión de las redes sociales, sus códigos y la manera en que conversan las audiencias.',
  'Pensamiento estratégico aplicado a objetivos reales y planificación de contenidos.',
  'Ideas creativas con criterio visual y narrativo para que cada pieza tenga intención.',
  'Ejecución práctica y resolución de problemas para llevar conceptos a entregables concretos.',
  'Adaptabilidad a distintas marcas, rubros, objetivos y recursos disponibles.',
];

export const About: React.FC = () => {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 border-t border-[#BCBCB6]/60 bg-[#ECE9DF]/45 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Editorial Column */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-[13px] font-medium text-[#2C4A43]">Sobre mí</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,3.3vw,3rem)] font-normal leading-[1.12] tracking-[-0.02em] text-[#383733]">
                Un poco de cómo pienso y trabajo.
              </h2>

              <p className="mt-6 max-w-[38ch] font-serif text-[19px] italic leading-[1.5] text-[#5E5C56]">
                “Explorar distintos enfoques hasta encontrar la idea que conecta
                y el camino para hacerla posible.”
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-[#BCBCB6]/60">
              <a
                href={CONTACT_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-[#2C4A43] transition-colors duration-200 hover:text-[#C65C3B] whitespace-nowrap"
              >
                <span className="border-b border-[#2C4A43]/40 pb-0.5 transition-colors duration-200 group-hover:border-[#C65C3B]">
                  Conocé mi recorrido en LinkedIn
                </span>
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* Right Narrative & Editorial List Column */}
          <div className="lg:col-span-7">
            <div className="space-y-5 text-[16px] leading-[1.75] text-[#383733]">
              <p>
                Soy <strong className="font-semibold">Esme Estrada</strong>,
                Community Manager y creadora de contenido en desarrollo hacia{' '}
                <span className="font-medium text-[#2C4A43]">
                  Social Media Strategy y Marketing Digital
                </span>
                . Me interesa el cruce entre entender cómo funcionan las redes y
                pensar qué sentido tiene lo que una marca elige decir.
              </p>

              <p className="text-[#5E5C56]">
                Valoro mucho observar antes de proponer: explorar distintos
                enfoques, detectar oportunidades que a primera vista no parecen
                obvias y transformar una idea en una propuesta concreta, cuidada
                y realizable. No busco fórmulas repetidas, sino soluciones que
                encajen con cada marca y con el momento en el que está.
              </p>
            </div>

            {/* Structured Unboxed Pillars Separated by Hairlines */}
            <div className="mt-10 border-t border-[#BCBCB6]/70 pt-6">
              <p className="mb-4 text-[13px] font-medium text-[#5E5C56]">
                Lo que combino en mi trabajo diario
              </p>
              <ul className="divide-y divide-[#BCBCB6]/50">
                {ABOUT_PILLARS.map((pillar, index) => (
                  <li
                    key={index}
                    className="grid grid-cols-12 items-baseline gap-4 py-3.5"
                  >
                    <span className="col-span-2 font-serif text-[14px] text-[#C65C3B] tabular-nums sm:col-span-1">
                      0{index + 1}
                    </span>
                    <span className="col-span-10 text-[15px] leading-[1.6] text-[#383733] sm:col-span-11">
                      {pillar}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
