export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const ui = {
  es: {
    'site.title': 'Matías Cavieres — Ingeniero en Informática',
    'site.description':
      'Portafolio de Matías Cavieres. Ingeniero en Informática especializado en desarrollo web con React, TypeScript y soluciones en la nube.',
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'lang.toggle': 'EN',
    'lang.toggleAria': 'Switch to English',
    'home.greeting': 'Hola, soy Matías',
    'home.role': 'Ingeniero en Informática',
    'home.tagline':
      'Diseño y construyo soluciones web que entregan resultados medibles — desde sistemas de inventario en tiempo real hasta dashboards que mueven decisiones.',
    'home.cta.experience': 'Ver experiencia',
    'home.cta.projects': 'Ver proyectos',
    'home.cta.contact': 'Hablemos',
    'home.featuredExperience': 'Experiencia destacada',
    'home.featuredProjects': 'Proyectos destacados',
    'home.viewAllExperience': 'Ver toda la experiencia »',
    'home.viewAllProjects': 'Ver todos los proyectos »',
    'experience.title': 'Experiencia',
    'experience.intro':
      'Roles profesionales recientes y el impacto que generé en cada uno.',
    'experience.viewCase': 'Leer caso de estudio »',
    'projects.title': 'Proyectos',
    'projects.intro':
      'Selección de proyectos personales y de cliente publicados en GitHub. Código abierto cuando es posible.',
    'projects.code': 'Código',
    'projects.live': 'Demo',
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
    'meta.experience.title': 'Experiencia — Matías Cavieres',
    'meta.experience.description':
      'Experiencia profesional de Matías Cavieres: Hotel Bidasoa, Banco BICE y más.',
    'meta.projects.title': 'Proyectos — Matías Cavieres',
    'meta.projects.description':
      'Proyectos de código de Matías Cavieres en GitHub: Hotel Bidasoa, Habit Tracker y más.',
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
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'lang.toggle': 'ES',
    'lang.toggleAria': 'Cambiar a español',
    'home.greeting': "Hi, I'm Matías",
    'home.role': 'Software Engineer',
    'home.tagline':
      'I design and build web solutions that ship measurable outcomes — from real-time inventory systems to dashboards that move decisions.',
    'home.cta.experience': 'See experience',
    'home.cta.projects': 'See projects',
    'home.cta.contact': "Let's talk",
    'home.featuredExperience': 'Featured experience',
    'home.featuredProjects': 'Featured projects',
    'home.viewAllExperience': 'See all experience »',
    'home.viewAllProjects': 'See all projects »',
    'experience.title': 'Experience',
    'experience.intro':
      'Recent professional roles and the impact I shipped in each.',
    'experience.viewCase': 'Read case study »',
    'projects.title': 'Projects',
    'projects.intro':
      'A selection of personal and client projects published on GitHub. Open source where possible.',
    'projects.code': 'Code',
    'projects.live': 'Live demo',
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
    'meta.experience.title': 'Experience — Matías Cavieres',
    'meta.experience.description':
      'Professional experience of Matías Cavieres: Hotel Bidasoa, Banco BICE and more.',
    'meta.projects.title': 'Projects — Matías Cavieres',
    'meta.projects.description':
      'Code projects by Matías Cavieres on GitHub: Hotel Bidasoa, Habit Tracker and more.',
    'meta.about.title': 'About — Matías Cavieres',
    'meta.about.description':
      'Biography, education and skills of Matías Cavieres, Software Engineer.',
    'meta.contact.title': 'Contact — Matías Cavieres',
    'meta.contact.description':
      'Get in touch with Matías Cavieres: email, LinkedIn, GitHub and phone.',
  },
} as const;

export type TranslationKey = keyof (typeof ui)['es'];
