import React from "react";

export interface RecentPost {
  img: string;
  date: string;
  title: string;
  link: string;
}

function BlogDetailsRecentPost({ posts }: { posts: RecentPost[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="tz-blog-details-sidebar__widget">
      <h4 className="tz-blog-details-sidebar__title">Recent Posts</h4>
      {posts.map((post) => (
        <div className="tz-blog-details-sidebar__item" key={post.title}>
          <img src={post.img} alt="" loading="lazy" />
          <div className="tz-blog-details-sidebar__content">
            <p className="tz-blog-details-sidebar__date tz-text-m">
              {post.date}
            </p>
            <a href={post.link}>
              <h5 className="tz-blog-details-sidebar__meta">{post.title}</h5>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogDetailsRecentPost;
