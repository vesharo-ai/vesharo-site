import Link from "@/components/common/Link";
import React from "react";

function BlogDetailsTag() {
  return (
    <div className="tz-blog-details-sidebar__widget">
      <h4 className="tz-blog-details-sidebar__title">Popular Tag</h4>
      <div className="tz-blog-details-sidebar__tags">
        <Link href="#" className="tz-blog-details-sidebar__tag tz-text-l">
          Agency
        </Link>
        <Link href="#" className="tz-blog-details-sidebar__tag tz-text-l">
          Web Design
        </Link>
        <Link href="#" className="tz-blog-details-sidebar__tag tz-text-l">
          Marketing
        </Link>
        <Link href="#" className="tz-blog-details-sidebar__tag tz-text-l">
          Graphic Design
        </Link>
        <Link href="#" className="tz-blog-details-sidebar__tag tz-text-l">
          3D Design
        </Link>
      </div>
    </div>
  );
}

export default BlogDetailsTag;
