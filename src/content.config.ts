import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().default(true),
  featured: z.boolean().default(false),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  translationKey: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog/en' }),
  schema: postSchema,
});

const blogZh = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog/zh' }),
  schema: postSchema,
});

export const collections = { blogEn, blogZh };
