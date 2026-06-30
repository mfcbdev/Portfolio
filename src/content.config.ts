import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    slug: z.string(),
    locale: z.enum(['es', 'en']),
    title: z.string(),
    role: z.string(),
    period: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    metrics: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    url: z.string().url().optional(),
  }),
});

export const collections = { projects };
