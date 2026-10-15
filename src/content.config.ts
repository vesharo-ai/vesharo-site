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
    problemStatement: z.string().optional(),
    useCases: z.array(z.string()).optional(),
    process: z.array(z.object({ step: z.string(), desc: z.string() })).optional(),
    techStack: z.array(z.string()).optional(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
    relatedCaseStudyId: z.string().optional(),
    relatedServiceIds: z.array(z.string()).optional(),
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
    challenge: z.string().optional(),
    solution: z.string().optional(),
    architecture: z.array(z.string()).optional(),
    role: z.string().optional(),
    status: z.string().optional(),
    audience: z.string().optional(),
    constraints: z.array(z.string()).optional(),
    whatWeBuilt: z.array(z.string()).optional(),
    approach: z.string().optional(),
    deliverables: z.array(z.string()).optional(),
    verifiedOutcomes: z.array(z.string()).optional(),
    nextStep: z.string().optional(),
    placeholder: z.boolean().default(false),
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
    updatedDate: z.string().optional(),
    author: z.string(),
    authorRole: z.string().optional(),
    category: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    featured: z.boolean().default(false),
    summary: z.string().optional(),
    sections: z.array(
      z.object({
        id: z.string(),
        heading: z.string(),
        paragraphs: z.array(z.string()),
        callout: z.string().optional(),
        bulletPoints: z.array(z.string()).optional(),
        codeSnippet: z
          .object({
            lang: z.string(),
            code: z.string(),
          })
          .optional(),
      })
    ),
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
    initials: z.string().optional(),
    image: z.string().optional(),
    socials: z.object({
      linkedin: z.string().optional(),
      github: z.string().optional(),
      twitter: z.string().optional(),
    }).optional(),
    order: z.number(),
    placeholder: z.boolean().optional(),
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
    placeholder: z.boolean().default(false),
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
    placeholder: z.boolean().default(false),
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
