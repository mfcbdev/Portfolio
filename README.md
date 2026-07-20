# Portfolio · Matías Cavieres

Sitio personal de portafolio construido con **Astro 5 + TypeScript + Tailwind CSS v4**, con contenido i18n (ES/EN), dark mode sin flash y View Transitions.

**Live:** [portfolio-nu-beryl-43.vercel.app](https://portfolio-nu-beryl-43.vercel.app)

## Stack

- Astro 5 (islands architecture, content collections)
- TypeScript
- Tailwind CSS v4
- i18n manual (ES / EN)
- Deploy en Vercel (`@astrojs/vercel`)

## Estructura

- `src/content/experience/{en,es}/` — historia laboral (Zod schema en `src/content.config.ts`)
- `src/content/projects/{en,es}/` — proyectos destacados
- `src/pages/` — rutas ES en la raíz, EN bajo `/en/`
- `src/sections/` — Hero, FeaturedProjects, FeaturedExperience, etc.
- `src/components/` — Header, Footer, ProjectCard, ExperienceCard, ThemeToggle

## Proyectos destacados

- **[chile-macro-dashboard](https://github.com/mfcbdev/chile-macro-dashboard)** — Dashboard de indicadores macro de Chile (Next.js 15 + BigQuery + Cloud Run).
- **[hotel_bidasoa](https://github.com/mfcbdev/hotel_bidasoa)** — Sistema de inventario en tiempo real (React + Supabase).
- **[Habit Tracker](https://github.com/mfcbdev/Habit-Tracker)** — PWA de hábitos con rachas y gráficos (React + Supabase).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre <http://localhost:4321>.

## Build

```bash
npm run build
npm run preview
```

## Licencia

MIT — ver [LICENSE](LICENSE).
