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
  projects: { es: '/proyectos', en: '/en/projects' },
  about: { es: '/sobre-mi', en: '/en/about' },
  contact: { es: '/contacto', en: '/en/contact' },
} as const;

export type RouteKey = keyof typeof routeMap;

export function path(route: RouteKey, locale: Locale): string {
  return routeMap[route][locale];
}

export function projectPath(slug: string, locale: Locale): string {
  return locale === 'en' ? `/en/projects/${slug}` : `/proyectos/${slug}`;
}

export function alternateUrl(url: URL, locale: Locale): string {
  const segments = url.pathname.split('/').filter(Boolean);
  const isEn = segments[0] === 'en';
  const stripped = isEn ? segments.slice(1) : segments;
  const first = stripped[0];
  const rest = stripped.slice(1).join('/');

  let key: RouteKey | null = null;
  if (!first) key = 'home';
  else if (first === 'proyectos' || first === 'projects') key = 'projects';
  else if (first === 'sobre-mi' || first === 'about') key = 'about';
  else if (first === 'contacto' || first === 'contact') key = 'contact';

  if (key) {
    const base = path(key, locale);
    if (key === 'projects' && rest) return `${base}/${rest}`;
    return base;
  }
  return locale === 'en' ? '/en/' : '/';
}

export const locales: Locale[] = ['es', 'en'];
