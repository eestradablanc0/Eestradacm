import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/content';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(CONTACT_CONFIG.email);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contacto"
      className="scroll-mt-20 border-t border-[#BCBCB6]/60 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Primary Closing Statement & WhatsApp CTA */}
          <div className="lg:col-span-7">
            <p className="text-[13px] font-medium text-[#2C4A43]">Hablemos</p>
            <h2 className="mt-4 font-serif text-[clamp(2.25rem,4vw,3.6rem)] font-normal leading-[1.08] tracking-[-0.025em] text-[#383733]">
              ¿Tenés un desafío en{' '}
              <span className="italic text-[#C65C3B]">mente</span>?
            </h2>

            <p className="mt-6 max-w-[50ch] text-[16.5px] leading-[1.7] text-[#5E5C56]">
              Estoy abierta a nuevas oportunidades laborales, proyectos y
              colaboraciones en Social Media, Contenido y Marketing Digital.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center gap-2.5 rounded-sm bg-[#C65C3B] px-7 py-3.5 text-[15.5px] font-medium text-[#F5F3EC] transition-colors duration-200 hover:bg-[#A94A2D] whitespace-nowrap shrink-0"
              >
                <MessageCircle size={18} strokeWidth={1.75} aria-hidden="true" />
                <span>Escribime por WhatsApp</span>
                <ArrowUpRight size={17} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Direct Channels Editorial Directory */}
          <div className="flex flex-col justify-end lg:col-span-5">
            <div className="border-t border-[#BCBCB6]/75">
              {/* LinkedIn */}
              <a
                href={CONTACT_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[68px] items-center justify-between gap-4 border-b border-[#BCBCB6]/60 py-5 transition-colors duration-200 hover:border-[#383733]"
              >
                <div>
                  <span className="block text-[13px] text-[#5E5C56]">
                    Perfil profesional
                  </span>
                  <span className="mt-0.5 block font-serif text-[21px] text-[#383733] transition-colors duration-200 group-hover:text-[#C65C3B]">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                  aria-hidden="true"
                  className="shrink-0 text-[#2C4A43] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C65C3B]"
                />
              </a>

              {/* Behance */}
              <a
                href={CONTACT_CONFIG.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[68px] items-center justify-between gap-4 border-b border-[#BCBCB6]/60 py-5 transition-colors duration-200 hover:border-[#383733]"
              >
                <div>
                  <span className="block text-[13px] text-[#5E5C56]">
                    Portfolio visual
                  </span>
                  <span className="mt-0.5 block font-serif text-[21px] text-[#383733] transition-colors duration-200 group-hover:text-[#C65C3B]">
                    Behance
                  </span>
                </div>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                  aria-hidden="true"
                  className="shrink-0 text-[#2C4A43] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C65C3B]"
                />
              </a>

              {/* Email */}
              <div className="flex min-h-[68px] flex-wrap items-center justify-between gap-4 border-b border-[#BCBCB6]/60 py-5">
                <div className="min-w-0">
                  <span className="block text-[13px] text-[#5E5C56]">
                    Correo directo
                  </span>
                  <a
                    href={`mailto:${CONTACT_CONFIG.email}`}
                    className="mt-0.5 inline-flex items-center gap-2 font-serif text-[19px] text-[#383733] transition-colors duration-200 hover:text-[#C65C3B] break-all"
                  >
                    <Mail
                      size={16}
                      strokeWidth={1.6}
                      aria-hidden="true"
                      className="shrink-0 text-[#2C4A43]"
                    />
                    <span>{CONTACT_CONFIG.email}</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copiar dirección de correo"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-sm border border-[#BCBCB6] px-3 py-1.5 text-[13px] font-medium text-[#383733] transition-colors duration-200 hover:border-[#2C4A43] hover:text-[#2C4A43] whitespace-nowrap shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={14} strokeWidth={2} aria-hidden="true" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} strokeWidth={1.75} aria-hidden="true" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
