import React, { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import {
  CONTACT_CONFIG,
  PROJECT_CATEGORIES,
  PROJECTS,
  type ProjectCategory,
  type ProjectItem,
} from '../data/content';
import { EditorialImage } from './EditorialImage';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  const filteredProjects =
    activeCategory === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="proyectos"
      className="scroll-mt-20 border-t border-[#BCBCB6]/60 bg-[#ECE9DF]/35 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Portfolio Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[13px] font-medium text-[#2C4A43]">Proyectos</p>
            <h2 className="mt-4 font-serif text-[clamp(2.15rem,3.6vw,3.35rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[#383733]">
              Ideas que toman forma.
            </h2>
            <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.7] text-[#5E5C56]">
              Una selección de proyectos, campañas y experiencias que muestran
              cómo pienso, creo y llevo ideas a la práctica.
            </p>
          </div>

          <div className="flex lg:col-span-5 lg:justify-end">
            <a
              href={CONTACT_CONFIG.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2.5 rounded-sm border border-[#2C4A43] px-5 py-3 text-[14.5px] font-medium text-[#2C4A43] transition-colors duration-200 hover:bg-[#2C4A43] hover:text-[#F5F3EC] whitespace-nowrap shrink-0"
            >
              <span>Ver portfolio en Behance</span>
              <ArrowUpRight size={17} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Interactive Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filtrar proyectos por categoría"
          className="mt-12 flex items-center gap-2 overflow-x-auto border-b border-[#BCBCB6]/60 pb-3"
        >
          {PROJECT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-[40px] px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#383733] text-[#F5F3EC] rounded-sm'
                    : 'text-[#5E5C56] hover:text-[#383733]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Portfolio Gallery */}
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          {filteredProjects.map((project, index) => {
            const isHeroLead = activeCategory === 'Todos' && index === 0;
            const colSpanClass = isHeroLead
              ? 'md:col-span-12'
              : 'md:col-span-6';

            return (
              <article
                key={project.id}
                className={`group flex flex-col border-b border-[#BCBCB6]/55 pb-8 ${colSpanClass}`}
              >
                {isHeroLead ? (
                  /* Featured Editorial Lead Layout */
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`Abrir vista previa de ${project.title}`}
                      className="relative block w-full overflow-hidden text-left lg:col-span-7"
                    >
                      <EditorialImage
                        src={project.image}
                        alt={project.imageAlt}
                        fallbackLabel={project.category}
                        className="aspect-[4/3] w-full border border-[#BCBCB6]/50"
                        imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </button>

                    <div className="flex flex-col justify-between lg:col-span-5 lg:pl-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#5E5C56]">
                          <span className="font-medium text-[#2C4A43]">
                            {project.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>Espacio editable</span>
                        </div>

                        <h3 className="mt-3 font-serif text-[clamp(1.65rem,2.4vw,2.15rem)] font-normal leading-[1.2] tracking-[-0.015em] text-[#383733]">
                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="text-left transition-colors duration-200 hover:text-[#C65C3B]"
                          >
                            {project.title}
                          </button>
                        </h3>

                        <p className="mt-4 text-[15.5px] leading-[1.7] text-[#5E5C56]">
                          {project.shortDescription}
                        </p>

                        <p className="mt-5 text-[13px] text-[#5E5C56]">
                          {project.deliverables.join(' · ')}
                        </p>
                      </div>

                      <div className="mt-7 flex flex-wrap items-center gap-6">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="min-h-[40px] text-[14.5px] font-medium text-[#383733] underline decoration-[#BCBCB6] underline-offset-4 transition-colors duration-200 hover:text-[#C65C3B] hover:decoration-[#C65C3B] whitespace-nowrap"
                        >
                          Ver detalle
                        </button>
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-1.5 text-[14.5px] font-medium text-[#A94A2D] transition-colors duration-200 hover:text-[#383733] whitespace-nowrap"
                        >
                          <span>{project.linkLabel}</span>
                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Editorial Gallery Card */
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Abrir vista previa de ${project.title}`}
                        className="block w-full overflow-hidden text-left"
                      >
                        <EditorialImage
                          src={project.image}
                          alt={project.imageAlt}
                          fallbackLabel={project.category}
                          className="aspect-[4/3] w-full border border-[#BCBCB6]/50"
                          imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                      </button>

                      <div className="mt-5 flex flex-wrap items-center gap-2 text-[13px] text-[#5E5C56]">
                        <span className="font-medium text-[#2C4A43]">
                          {project.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>Espacio editable</span>
                      </div>

                      <h3 className="mt-2.5 font-serif text-[23px] font-normal leading-[1.25] tracking-[-0.015em] text-[#383733]">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="text-left transition-colors duration-200 hover:text-[#C65C3B]"
                        >
                          {project.title}
                        </button>
                      </h3>

                      <p className="mt-3 text-[15px] leading-[1.65] text-[#5E5C56]">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="min-h-[40px] text-[14px] font-medium text-[#383733] underline decoration-[#BCBCB6] underline-offset-4 transition-colors duration-200 hover:text-[#C65C3B] hover:decoration-[#C65C3B] whitespace-nowrap"
                      >
                        Ver detalle
                      </button>
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] items-center gap-1.5 text-[14px] font-medium text-[#A94A2D] transition-colors duration-200 hover:text-[#383733] whitespace-nowrap"
                      >
                        <span>{project.linkLabel}</span>
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Editorial Portfolio Footer Note + Behance Link */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-[54ch] text-[14px] leading-[1.6] text-[#5E5C56]">
            Esta galería está estructurada con proyectos editables listos para
            incorporar casos reales, imágenes y enlaces directos a Behance.
          </p>
          <a
            href={CONTACT_CONFIG.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center gap-2 rounded-sm bg-[#2C4A43] px-6 py-3 text-[14.5px] font-medium text-[#F5F3EC] transition-colors duration-200 hover:bg-[#213933] whitespace-nowrap shrink-0"
          >
            <span>Explorar Behance completo</span>
            <ArrowUpRight size={17} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Editorial Project Lightbox / Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#383733]/70 p-4 sm:p-6 backdrop-blur-[2px]"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-[#BCBCB6] bg-[#F5F3EC] p-6 sm:p-8 md:p-10 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[13px] font-medium text-[#2C4A43]">
                  {selectedProject.category}{' '}
                  <span aria-hidden="true" className="text-[#BCBCB6]">
                    ·
                  </span>{' '}
                  <span className="font-normal text-[#5E5C56]">
                    Ficha editable
                  </span>
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-2 font-serif text-[26px] font-normal leading-[1.2] text-[#383733] sm:text-[30px]"
                >
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar vista previa del proyecto"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[#BCBCB6]/70 text-[#383733] transition-colors duration-200 hover:border-[#383733] hover:text-[#C65C3B]"
              >
                <X size={20} strokeWidth={1.6} />
              </button>
            </div>

            <EditorialImage
              src={selectedProject.image}
              alt={selectedProject.imageAlt}
              fallbackLabel={selectedProject.category}
              className="mt-6 aspect-[4/3] w-full border border-[#BCBCB6]/50"
            />

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="space-y-3 md:col-span-8">
                <p className="text-[15.5px] leading-[1.7] text-[#383733]">
                  {selectedProject.shortDescription}
                </p>
                <p className="text-[14.5px] leading-[1.7] text-[#5E5C56]">
                  {selectedProject.contextNote}
                </p>
              </div>
              <div className="border-t border-[#BCBCB6]/55 pt-4 md:col-span-4 md:border-t-0 md:border-l md:pt-0 md:pl-6">
                <p className="text-[13px] font-medium text-[#2C4A43]">
                  Foco del proyecto
                </p>
                <ul className="mt-3 space-y-2 text-[14px] text-[#383733]">
                  {selectedProject.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-px w-2.5 shrink-0 bg-[#C65C3B]"
                      />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#BCBCB6]/60 pt-6">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="min-h-[42px] text-[14px] font-medium text-[#5E5C56] transition-colors duration-200 hover:text-[#383733]"
              >
                Volver a la galería
              </button>
              <a
                href={selectedProject.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[#C65C3B] px-5 py-2.5 text-[14.5px] font-medium text-[#F5F3EC] transition-colors duration-200 hover:bg-[#A94A2D] whitespace-nowrap"
              >
                <span>{selectedProject.linkLabel}</span>
                <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
