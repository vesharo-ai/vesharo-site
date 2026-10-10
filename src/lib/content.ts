import { getCollection } from "astro:content";
import type { ProjectCard } from "@/components/project/Project1";
import type { TestimonialSlide } from "@/components/testimonials/Testimonial1Slider";

export async function getFeaturedProjectCards(): Promise<ProjectCard[]> {
  const entries = await getCollection("portfolio", ({ data }) => data.featured);
  return entries.map(({ data }) => ({
    link: data.link,
    imageSrc: data.image,
    year: data.year,
    title: data.title,
    categories: data.tags,
  }));
}

export async function getTestimonialSlides(): Promise<TestimonialSlide[]> {
  const entries = await getCollection("testimonials");
  return entries.map(({ data }) => ({
    imageSrc: data.image,
    text: data.quote,
    title: data.company,
    designation: data.role,
  }));
}
