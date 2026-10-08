import { getCollection } from "astro:content";

export type BlogPostForList = {
  id: string;
  title: string;
  description: string;
  pubDate: Date;
  category: string;
  image: string;
  tags: string[];
  link: string;
};


/** Newest-first blog posts shaped for both the blog listing and the home page. */
export async function getBlogPosts(limit?: number): Promise<BlogPostForList[]> {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  const shaped: BlogPostForList[] = posts.map((p) => ({
    id: p.id,
    title: p.data.title,
    description: p.data.description,
    pubDate: p.data.pubDate,
    category: p.data.category,
    image: p.data.image,
    tags: p.data.tags,
    link: `/blog/${p.id}`,
  }));

  return limit ? shaped.slice(0, limit) : shaped;
}
