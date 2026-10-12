import { getCollection } from "astro:content";
import { siteConfig } from "@/config/site";

export async function GET() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const rssItems = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.data.excerpt}]]></description>
      <link>${siteConfig.url}/blog/${post.data.id}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${post.data.id}</guid>
      <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
      <category>${post.data.category}</category>
      <author>${siteConfig.contact.email} (${post.data.author})</author>
    </item>`
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name} — Technical &amp; Engineering Blog</title>
    <description>${siteConfig.description}</description>
    <link>${siteConfig.url}/blog</link>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
