import React from "react";
import { recentPosts } from "../../seeds/RecentPost.seeds";

function BlogDetailsRecentPost() {
  return (
    <div className="tz-blog-details-sidebar__widget">
      <h4 className="tz-blog-details-sidebar__title">Recent Posts</h4>
      {recentPosts.map((post, idx) => (
        <div className="tz-blog-details-sidebar__item" key={idx}>
          <img src={post.img} alt="img" />
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
