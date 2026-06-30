export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const ui = {
  es: {
    'site.title': 'Matías Cavieres — Ingeniero en Informática',
    'site.description':
      'Portafolio de Matías Cavieres. Ingeniero en Informática especializado en desarrollo web con React, TypeScript y soluciones en la nube.',
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'lang.toggle': 'EN',
    'lang.toggleAria': 'Switch to English',
    'home.greeting': 'Hola, soy Matías',
    'home.role': 'Ingeniero en Informática',
    'home.tagline':
      'Diseño y construyo soluciones web que entregan resultados medibles — desde sistemas de inventario en tiempo real hasta dashboards que mueven decisiones.',
    'home.cta.projects': 'Ver proyectos',
    'home.cta.contact': 'Hablemos',
    'home.featured': 'Proyectos destacados',
    'home.viewAll': 'Ver todos los proyectos »',
    'projects.title': 'Proyectos',
    'projects.intro':
      'Una selección de trabajo profesional y experimentos personales. Para detalle completo, descarga mi CV o escríbeme.',
    'projects.viewCase': 'Leer caso de estudio »',
    'about.title': 'Sobre mí',
    'about.bioHeading': 'Resumen',
    'about.educationHeading': 'Educación',
    'about.certsHeading': 'Certificaciones',
    'about.skillsHeading': 'Habilidades',
    'about.languagesHeading': 'Idiomas',
    'contact.title': 'Contacto',
    'contact.intro':
      '¿Tienes un proyecto, una vacante o solo quieres conversar? Escríbeme directo y te respondo en menos de 24 horas.',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.location.value': 'Providencia, Santiago, Chile',
    'cta.downloadCV': 'Descargar CV',
    'footer.built': 'Hecho con Astro. Hospedado en Vercel.',
    'footer.copyright': '© 2026 Matías Cavieres.',
    'meta.projects.title': 'Proyectos — Matías Cavieres',
    'meta.projects.description':
      'Casos de estudio de Matías Cavieres: Hotel Bidasoa, Banco BICE y más.',
    'meta.about.title': 'Sobre mí — Matías Cavieres',
    'meta.about.description':
      'Biografía, educación y habilidades de Matías Cavieres, Ingeniero en Informática.',
    'meta.contact.title': 'Contacto — Matías Cavieres',
    'meta.contact.description':
      'Contacta a Matías Cavieres: correo, LinkedIn, GitHub y teléfono.',
  },
  en: {
    'site.title': 'Matías Cavieres — Software Engineer',
    'site.description':
      "Portfolio of Matías Cavieres. Software Engineer building web products with React, TypeScript and cloud services.",
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'lang.toggle': 'ES',
    'lang.toggleAria': 'Cambiar a español',
    'home.greeting': "Hi, I'm Matías",
    'home.role': 'Software Engineer',
    'home.tagline':
      'I design and build web solutions that ship measurable outcomes — from real-time inventory systems to dashboards that move decisions.',
    'home.cta.projects': 'See projects',
    'home.cta.contact': "Let's talk",
    'home.featured': 'Featured work',
    'home.viewAll': 'See all projects »',
    'projects.title': 'Projects',
    'projects.intro':
      'A selection of professional work and personal experiments. For full detail, grab my CV or drop me a line.',
    'projects.viewCase': 'Read case study »',
    'about.title': 'About',
    'about.bioHeading': 'Summary',
    'about.educationHeading': 'Education',
    'about.certsHeading': 'Certifications',
    'about.skillsHeading': 'Skills',
    'about.languagesHeading': 'Languages',
    'contact.title': 'Contact',
    'contact.intro':
      "Got a project, an opening, or just want to chat? Write me directly — I reply within 24 hours.",
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.location.value': 'Providencia, Santiago, Chile',
    'cta.downloadCV': 'Download CV',
    'footer.built': 'Built with Astro. Hosted on Vercel.',
    'footer.copyright': '© 2026 Matías Cavieres.',
    'meta.projects.title': 'Projects — Matías Cavieres',
    'meta.projects.description':
      'Case studies by Matías Cavieres: Hotel Bidasoa, Banco BICE and more.',
    'meta.about.title': 'About — Matías Cavieres',
    'meta.about.description':
      'Biography, education and skills of Matías Cavieres, Software Engineer.',
    'meta.contact.title': 'Contact — Matías Cavieres',
    'meta.contact.description':
      'Get in touch with Matías Cavieres: email, LinkedIn, GitHub and phone.',
  },
} as const;

export type TranslationKey = keyof (typeof ui)['es'];
