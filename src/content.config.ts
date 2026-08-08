import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const site = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/site' }),
  schema: z.object({
    name: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    nick: z.string(),
    email: z.string().email(),
    location: z.string().optional(),
    enable_blog: z.boolean().default(false),
    resume: z.string().optional(),
    lede: z.string(),
    links: z.array(
      z.object({
        name: z.string(),
        url: z.string().url(),
      }),
    ),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    start: z.string().optional(),
    end: z.string().optional(),
    current: z.boolean().default(false),
    order: z.number(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .default([]),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { site, experience, projects, skills, blog };
