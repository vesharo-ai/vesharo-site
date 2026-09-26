"use client";

import React, { useEffect, useState } from "react";
import { menuSeed } from "@/seeds/menu";
import { MenuItem } from "@/seeds/types/menu";
import useWindowWidth from "@/hooks/useWindowWidth";
import Link from "@/components/common/Link";

function Nav({
  setShowOffcanvas,
}: {
  setShowOffcanvas?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const windowWidth = useWindowWidth();
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const renderSubmenu = (items: MenuItem[]) => (
    <ul className="tz-submenu submenu">
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.href} onClick={() => setShowOffcanvas?.(false)}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  const renderMegaMenu = (columns: MenuItem[][]) => (
    <div className="tz-submenu submenu tz-mega-menu tz-menu-xl">
      <div className="tz-menu-wrapper">
        <div className="row">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="col-12 col-xl-4 menu">
              <div className="menu-list mb-20">
                <nav className="tz-nav-links tz-nav-links--vertical">
                  <ul>
                    {column.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          onClick={() => setShowOffcanvas?.(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav className="tz-nav-links d-flex tz-main-menu">
      <ul className="d-inline-flex tz-ml-auto position-relative">
        {menuSeed.items.map((item, index) => (
          <li
            key={index}
            className={`${item.submenu || item.columns ? "has-dropdown" : ""} ${
              item.title === "Home" ? "has-homemenu" : ""
            }`}
          >
            <Link
              href={item.href}
              onClick={(e) => {
                if (item.submenu || item.columns) {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveMenuIndex(index === activeMenuIndex ? null : index);
                } else {
                  setShowOffcanvas?.(false);
                }
              }}
            >
              {item.title}
              {(item.submenu || item.columns) && (
                <button className="dropdown-toggle-btn">
                  <i className="ph ph-plus"></i>
                </button>
              )}
            </Link>
            {item.submenu &&
              clientReady &&
              (index === activeMenuIndex || windowWidth > 1199) &&
              renderSubmenu(item.submenu)}

            {item.columns &&
              clientReady &&
              (index === activeMenuIndex || windowWidth > 1199) &&
              renderMegaMenu(item.columns)}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
