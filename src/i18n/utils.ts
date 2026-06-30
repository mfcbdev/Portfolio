import { ui, defaultLocale, type Locale, type TranslationKey } from './ui';

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale === 'en') return 'en';
  return 'es';
}

export function useTranslations(locale: Locale) {
  return function t(key: TranslationKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

const routeMap = {
  home: { es: '/', en: '/en/' },
  experience: { es: '/experiencia', en: '/en/experience' },
  projects: { es: '/proyectos', en: '/en/projects' },
  about: { es: '/sobre-mi', en: '/en/about' },
  contact: { es: '/contacto', en: '/en/contact' },
} as const;

export type RouteKey = keyof typeof routeMap;

export function path(route: RouteKey, locale: Locale): string {
  return routeMap[route][locale];
}

export function experiencePath(slug: string, locale: Locale): string {
  return locale === 'en' ? `/en/experience/${slug}` : `/experiencia/${slug}`;
}

const firstSegmentToRoute: Record<string, RouteKey> = {
  '': 'home',
  experiencia: 'experience',
  experience: 'experience',
  proyectos: 'projects',
  projects: 'projects',
  'sobre-mi': 'about',
  about: 'about',
  contacto: 'contact',
  contact: 'contact',
};

export function alternateUrl(url: URL, locale: Locale): string {
  const segments = url.pathname.split('/').filter(Boolean);
  const isEn = segments[0] === 'en';
  const stripped = isEn ? segments.slice(1) : segments;
  const first = stripped[0] ?? '';
  const rest = stripped.slice(1).join('/');

  const key = firstSegmentToRoute[first] ?? 'home';
  const base = path(key, locale);
  if ((key === 'experience' || key === 'projects') && rest) {
    return `${base}/${rest}`;
  }
  return base;
}

export const locales: Locale[] = ['es', 'en'];
