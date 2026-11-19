/**
 * Contenido editable del sitio de marca personal E Estrada.
 * Actualizá los placeholders de contacto, redes y proyectos en este archivo.
 */

export const CONTACT_CONFIG = {
  whatsappNumber: '[WHATSAPP_NUMBER_WITH_COUNTRY_CODE]',
  whatsappUrl: 'https://wa.me/[WHATSAPP_NUMBER_WITH_COUNTRY_CODE]',
  linkedinUrl: 'https://www.linkedin.com/in/[LINKEDIN_USERNAME]',
  behanceUrl: 'https://www.behance.net/[BEHANCE_USERNAME]',
  email: '[EMAIL_DE_CONTACTO]',
} as const;

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Qué hago', href: '#que-hago' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export const HERO_MEDIA = {
  image: '/src/assets/images/hero_editorial_composition_1795115336570.jpg',
  alt: 'Composición editorial minimalista con papel de algodón, arco de cerámica terracota, piedra travertino y lino verde botella bajo luz natural',
};

export interface CapabilityItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  pillars: string[];
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    number: '01',
    title: 'Social Media',
    subtitle: 'Presencia con criterio de plataforma',
    description:
      'Planificación de contenidos, gestión de redes y community management con foco en cómo se comporta cada plataforma y cómo conversa la audiencia.',
    pillars: [
      'Planificación y calendario editorial',
      'Gestión de redes y community management',
      'Lectura de formatos e interacción con audiencias',
    ],
  },
  {
    number: '02',
    title: 'Contenido & Creatividad',
    subtitle: 'De la idea al formato digital',
    description:
      'Desarrollo de conceptos creativos, copywriting, piezas gráficas y video corto pensados para captar atención sin perder la identidad de marca.',
    pillars: [
      'Conceptos creativos y bajada de mensajes',
      'Copywriting y guiones para redes',
      'Piezas gráficas, video corto y edición',
    ],
  },
  {
    number: '03',
    title: 'Estrategia & Marketing',
    subtitle: 'Dirección detrás de cada publicación',
    description:
      'Definición de objetivos de comunicación, lectura de audiencias, estrategia de contenido e ideas de campaña orientadas a detectar oportunidades digitales.',
    pillars: [
      'Objetivos de comunicación y diagnóstico',
      'Comprensión de audiencias y contexto',
      'Estrategia de contenido e ideas de campaña',
    ],
  },
  {
    number: '04',
    title: 'Ejecución & Resolución',
    subtitle: 'Ideas que efectivamente suceden',
    description:
      'Capacidad resolutiva y adaptabilidad para encontrar caminos viables con los recursos disponibles y transformar una propuesta en entregables concretos.',
    pillars: [
      'Resolución práctica frente a recursos reales',
      'Adaptabilidad a distintas marcas y equipos',
      'Producción y entrega de piezas concretas',
    ],
  },
];

export type ProjectCategory =
  | 'Todos'
  | 'Campañas de Social Media'
  | 'Creación de Contenido'
  | 'Comunicación de Marca'
  | 'Conceptos Creativos'
  | 'Marketing Digital';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Todos'>;
  shortDescription: string;
  contextNote: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  externalUrl: string;
  linkLabel: string;
  featured?: boolean;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Todos',
  'Campañas de Social Media',
  'Creación de Contenido',
  'Comunicación de Marca',
  'Conceptos Creativos',
  'Marketing Digital',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'campana-social-media',
    title: 'Campaña de Social Media — [Nombre del proyecto]',
    category: 'Campañas de Social Media',
    shortDescription:
      'Espacio reservado para presentar una campaña integral en redes: enfoque estratégico, bajada creativa y sistema de piezas pensado para conectar con la audiencia.',
    contextNote:
      'Proyecto editable. Reemplazá este texto con el objetivo de la campaña, el rol que cumpliste y cómo se resolvió la bajada en redes.',
    deliverables: ['Estrategia de campaña', 'Grilla editorial', 'Piezas de lanzamiento'],
    image: '/src/assets/images/project_social_campaign_1795115334988.jpg',
    imageAlt: 'Bodegón editorial en tonos tierra, vidrio ámbar y piedra travertino como portada editable de Campaña de Social Media',
    externalUrl: 'https://www.behance.net/[BEHANCE_PROYECTO_01]',
    linkLabel: 'Ver caso en Behance',
    featured: true,
  },
  {
    id: 'creacion-contenido',
    title: 'Creación de Contenido — [Nombre del proyecto]',
    category: 'Creación de Contenido',
    shortDescription:
      'Espacio editable para mostrar producción de contenido audiovisual, video corto, edición y dirección visual adaptada a los códigos actuales de cada plataforma.',
    contextNote:
      'Proyecto editable. Sumá aquí el tipo de marca, los formatos producidos (Reels, carruseles, piezas estáticas) y el criterio creativo detrás de la propuesta.',
    deliverables: ['Guion y concepto', 'Video corto y edición', 'Adaptación multiformato'],
    image: '/src/assets/images/project_content_creation_1795115334763.jpg',
    imageAlt: 'Composición editorial de lino natural, piedra y cerámica terracota como portada editable de Creación de Contenido',
    externalUrl: 'https://www.behance.net/[BEHANCE_PROYECTO_02]',
    linkLabel: 'Ver piezas en Behance',
  },
  {
    id: 'comunicacion-marca',
    title: 'Comunicación de Marca — [Nombre del proyecto]',
    category: 'Comunicación de Marca',
    shortDescription:
      'Espacio editable para detallar tono de voz, pilares narrativos y coherencia visual aplicados a la presencia digital de una marca.',
    contextNote:
      'Proyecto editable. Describí el punto de partida de la marca, la oportunidad detectada y cómo se tradujo en mensajes claros y reconocibles.',
    deliverables: ['Pilares de comunicación', 'Copywriting de marca', 'Lineamientos de contenido'],
    image: '/src/assets/images/project_brand_communication_1795115334915.jpg',
    imageAlt: 'Papelería editorial minimalista sobre papel de algodón con acento terracota y cordón verde botella como portada editable de Comunicación de Marca',
    externalUrl: 'https://www.behance.net/[BEHANCE_PROYECTO_03]',
    linkLabel: 'Explorar proyecto',
  },
  {
    id: 'concepto-creativo',
    title: 'Concepto Creativo — [Nombre del proyecto]',
    category: 'Conceptos Creativos',
    shortDescription:
      'Espacio editable para compartir la exploración conceptual de una idea: desde la observación inicial hasta el territorio visual y narrativo.',
    contextNote:
      'Proyecto editable. Ideal para mostrar propuestas conceptuales, ejercicios de dirección creativa o campañas especulativas con mirada estratégica.',
    deliverables: ['Exploración conceptual', 'Territorio narrativo', 'Propuesta de piezas'],
    image: '/src/assets/images/project_creative_concept_1795115334562.jpg',
    imageAlt: 'Composición escultórica de piedra arenisca, esfera de terracota y prisma de vidrio como portada editable de Concepto Creativo',
    externalUrl: 'https://www.behance.net/[BEHANCE_PROYECTO_04]',
    linkLabel: 'Ver desarrollo',
  },
  {
    id: 'marketing-digital',
    title: 'Proyecto de Marketing Digital — [Nombre del proyecto]',
    category: 'Marketing Digital',
    shortDescription:
      'Espacio editable para presentar un abordaje de marketing digital: análisis de audiencia, objetivos de comunicación y plan de acción en canales digitales.',
    contextNote:
      'Proyecto editable. Completá con el desafío comunicacional, los canales priorizados y cómo se articuló estrategia con ejecución.',
    deliverables: ['Análisis de contexto', 'Plan de contenidos', 'Enfoque de canales digitales'],
    image: '/src/assets/images/project_digital_marketing_1795115334408.jpg',
    imageAlt: 'Mesa de trabajo editorial con cuaderno de papel algodón, muestras textiles verde botella y taza terracota como portada editable de Marketing Digital',
    externalUrl: 'https://www.behance.net/[BEHANCE_PROYECTO_05]',
    linkLabel: 'Ver proyecto completo',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Observar',
    description:
      'Entender la marca, su audiencia, su contexto y las necesidades reales detrás del pedido.',
  },
  {
    number: '02',
    title: 'Explorar',
    description:
      'Investigar posibilidades, detectar oportunidades de comunicación y considerar distintos enfoques.',
  },
  {
    number: '03',
    title: 'Conectar',
    description:
      'Encontrar la idea, el mensaje y la dirección creativa que tengan sentido para el objetivo.',
  },
  {
    number: '04',
    title: 'Resolver',
    description:
      'Transformar la propuesta en contenido concreto y comunicación digital realizable.',
  },
];
