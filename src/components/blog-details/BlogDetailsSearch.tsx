import React from "react";

function BlogDetailsSearch() {
  return (
    <div className="tz-blog-details-sidebar__widget">
      <div className="tz-blog-details-sidebar__search">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <i className="ph ph-magnifying-glass" />
        </button>
      </div>
    </div>
  );
}

export default BlogDetailsSearch;
