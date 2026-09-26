import Link from "@/components/common/Link";
import React from "react";

const BlogDetailsTopCategory = React.memo(function BlogDetailsTopCategory() {
  return (
    <div className="tz-blog-details-sidebar__widget">
      <h4 className="tz-blog-details-sidebar__title">Top Category</h4>
      <div className="tz-blog-details-sidebar__blog-list">
        <Link
          href="/blog-details"
          className="tz-blog-details-sidebar__blog-item tz-text-m"
        >
          UI/UX design <span>(03)</span>
        </Link>
        <Link
          href="/blog-details"
          className="tz-blog-details-sidebar__blog-item tz-text-m"
        >
          Web development <span>(07)</span>
        </Link>
        <Link
          href="/blog-details"
          className="tz-blog-details-sidebar__blog-item tz-text-m"
        >
          3D designs <span>(09)</span>
        </Link>
        <Link
          href="/blog-details"
          className="tz-blog-details-sidebar__blog-item tz-text-m"
        >
          Digital marketing design <span>(02)</span>
        </Link>
        <Link
          href="/blog-details"
          className="tz-blog-details-sidebar__service-item tz-text-m"
        >
          Logos &amp; branding <span>(01)</span>
        </Link>
      </div>
    </div>
  );
});

export default BlogDetailsTopCategory;
