import React from "react";
import Link from "@/components/common/Link";
import type { BlogPostForList } from "@/lib/blog";

/**
 * Microdata attributes must be lowercase in the emitted HTML.
 * React passes unknown camelCase attributes through verbatim, which produces
 * invalid `itemScope`/`itemType`, so they are spread in lowercase instead.
 */
const MICRODATA_ARTICLE = {
  itemscope: "",
  itemtype: "https://schema.org/BlogPosting",
} as const;

function sortLatestFirst(posts: BlogPostForList[]) {
  return [...posts].sort(
    (a, b) => (b.pubDate.getTime() ?? 0) - (a.pubDate.getTime() ?? 0),
  );
}

function BlogPage({
  blogData,
  backgroundColor = "#0f0f0f",
}: {
  blogData: BlogPostForList[];
  backgroundColor?: string;
}) {
  const ordered = sortLatestFirst(blogData);

  return (
    <section
      className="tz-blog-page tz-bg-neutral2 tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120"
      style={{ backgroundColor }}
    >
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="row g-4">
              {ordered.map((post) => (
                <article
                  key={post.id}
                  className="col-sm-6"
                  {...MICRODATA_ARTICLE}
                >
                  <div className="tz-blog1-card">
                    <div className="tz-blog1-card__image">
                      <img
                        src={post.image}
                        alt={post.title}
                        width={1200}
                        height={630}
                      />
                      <span className="tz-blog1-card__tag tz-text-m text-uppercase">
                        {post.category}
                      </span>
                    </div>
                    <div className="tz-blog1-card__content">
                      <p className="tz-blog1-card__date tz-text-m tz-text-neutral6 fw-light">
                        {post.pubDate.toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <h3 className="tz-blog1-card__title tz-text-neutral5">
                        <a
                          href={post.link}
                          aria-label={`Read: ${post.title}`}
                        >
                          {post.title}
                        </a>
                      </h3>
                      <p className="tz-blog1-card__desc tz-text-l tz-text-neutral6">
                        {post.description}
                      </p>
                      <div className="tz-buttons d-flex justify-content-start justify-content-md-end">
                        <Link
                          href={post.link}
                          className="tz-button text-uppercase fw-medium tz-text-m"
                        >
                          Read Article
                        </Link>
                        <Link
                          href={post.link}
                          className="tz-button-circle"
                          aria-label={`Read ${post.title}`}
                        >
                          <i className="ph ph-arrow-up-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tz-blog-page__sidebar">
              <div className="tz-section-top">
                <div className="tz-section-subtitle">
                  <span className="tz-section-subtitle__line" />
                  <h2 className="text-uppercase tz-text-primary">Search</h2>
                </div>
                <form action="/blog" method="get" className="tz-blog-search">
                  <label htmlFor="search" className="visually-hidden">
                    Search articles
                  </label>
                  <input
                    id="search"
                    name="q"
                    type="search"
                    placeholder="Search articles..."
                  />
                  <button type="submit">
                    <i className="ph ph-magnifying-glass" />
                  </button>
                </form>
              </div>
            <div className="tz-section-top">
              <div className="tz-section-subtitle">
                <span className="tz-section-subtitle__line" />
                <h2 className="text-uppercase tz-text-primary">
                  Recent Articles
                </h2>
              </div>
              <ul className="tz-recent-posts">
                {ordered.slice(0, 4).map((post) => (
                  <li key={post.id}>
                    <Link href={post.link}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}

export default BlogPage;
