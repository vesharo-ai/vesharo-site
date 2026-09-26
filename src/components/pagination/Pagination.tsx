import Link from "@/components/common/Link";
import React from "react";

function Pagination() {
  return (
    <ul className="tz-pagination list-unstyled">
      <li>
        <Link className="prev-btn" href="#">
          <span className="post-pagination__text tz-text-m">
            <i className="ph ph-caret-double-left" />
          </span>
        </Link>
      </li>
      <li>
        <Link className="tz-pagination__page" href="#">
          1
        </Link>
      </li>
      <li>
        <Link className="tz-pagination__page" href="#">
          2
        </Link>
      </li>
      <li>
        <Link className="tz-pagination__page active" href="#">
          3
        </Link>
      </li>
      <li>
        <Link className="tz-pagination__page" href="#">
          4
        </Link>
      </li>
      <li>
        <Link className="tz-pagination__page" href="#">
          4
        </Link>
      </li>
      <li className="active">
        <a className="next-btn" href="#">
          <span className="post-pagination__text tz-text-m">
            <i className="ph ph-caret-double-right" />
          </span>
        </a>
      </li>
    </ul>
  );
}

export default Pagination;
