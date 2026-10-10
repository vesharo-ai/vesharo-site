import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

// 1. Services Collection (7 Core Services)
const services = defineCollection({
  loader: file("src/content/services.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    shortDescription: z.string(),
    fullDescription: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
    deliverables: z.array(z.string()),
    order: z.number(),
  }),
});

// 2. Portfolio Collection (Real Verified Products: LockApp, NavratriOS, Wirebench)
const portfolio = defineCollection({
  loader: file("src/content/portfolio.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    tagline: z.string(),
    client: z.string(),
    year: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    metrics: z.array(z.string()),
    stack: z.array(z.string()),
    link: z.string(),
    featured: z.boolean(),
    image: z.string(),
  }),
});

// 3. Blog Collection (Seed Engineering & AI Articles)
const blog = defineCollection({
  loader: file("src/content/blog.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    author: z.string(),
    category: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    link: z.string(),
  }),
});

// 4. FAQ Collection (Vesharo Business & Technical FAQs)
const faq = defineCollection({
  loader: file("src/content/faq.json"),
  schema: z.object({
    id: z.string(),
    question: z.string(),
    answer: z.string(),
    category: z.string(),
    order: z.number(),
  }),
});

// 5. Team Collection (Leadership & Engineering)
const team = defineCollection({
  loader: file("src/content/team.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    image: z.string(),
    socials: z.object({
      linkedin: z.string().optional(),
      github: z.string().optional(),
      twitter: z.string().optional(),
    }).optional(),
    order: z.number(),
  }),
});

// 6. Testimonials Collection (Verified Client Engagements)
const testimonials = defineCollection({
  loader: file("src/content/testimonials.json"),
  schema: z.object({
    id: z.string(),
    quote: z.string(),
    author: z.string(),
    role: z.string(),
    company: z.string(),
    project: z.string(),
    image: z.string().optional(),
    rating: z.number().default(5),
  }),
});

// 7. Clients Collection (Client Verticals & Partnerships)
const clients = defineCollection({
  loader: file("src/content/clients.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    category: z.string(),
    logoText: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  services,
  portfolio,
  blog,
  faq,
  team,
  testimonials,
  clients,
};
