import { getCollection } from "astro:content";
import type { ProjectCard } from "@/components/project/Project1";
import type { TestimonialSlide } from "@/components/testimonials/Testimonial1Slider";
import { isReviewMode } from "./reviewMode";
import { isPubliclyPublishable } from "./publication";

export async function getFeaturedProjectCards(): Promise<ProjectCard[]> {
  const review = isReviewMode();
  const entries = await getCollection("portfolio", ({ data }) => {
    if (!data.featured) return false;
    if (!isPubliclyPublishable(data, { reviewMode: review })) return false;
    return true;
  });
  return entries.map(({ data }) => ({
    link: data.link,
    imageSrc: data.image,
    year: data.year,
    title: data.title,
    categories: data.tags,
  }));
}

export async function getTestimonialSlides(): Promise<TestimonialSlide[]> {
  const review = isReviewMode();
  const entries = await getCollection("testimonials", ({ data }) => {
    if (!review && data.placeholder) return false;
    return true;
  });
  return entries.map(({ data }) => ({
    imageSrc: data.image,
    text: data.quote,
    title: data.company,
    designation: data.role,
    placeholder: data.placeholder ?? false,
  }));
}

export async function getClientsList() {
  const review = isReviewMode();
  return await getCollection("clients", ({ data }) => {
    if (!review && data.placeholder) return false;
    return true;
  });
}

export async function getTeamList() {
  const review = isReviewMode();
  const list = await getCollection("team", ({ data }) => {
    if (!review && data.placeholder) return false;
    return true;
  });
  return list.sort((a, b) => a.data.order - b.data.order);
}
