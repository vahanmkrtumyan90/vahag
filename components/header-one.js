import React, { Fragment } from "react";
import { NavLinksData, TopbarInfos } from "@/data";
import Link from "@/components/link";
import { useRouter } from "next/router";

const HeaderOne = () => {
  const router = useRouter();

  return (
    <Fragment>
      <header className="header_area">
        <div className="container">
          <div className="header_social">
            <ul className="hd_social_icons"></ul>
          </div>
          <div className="header_contact text-end">
            <ul className="hd_contact">
              {TopbarInfos.map(({ icon, tagLine, text, url }, index) => (
                <li key={`header-info-${index}`}>
                  <i className={icon}></i> {tagLine}
                  <a href={url}> {text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <div className="main_menu_area">
        <div className="container">
          <div className="main_menu_area__right">
            <nav className="main_menu_area__menu">
              <ul className="nav navbar-nav navigation-box">
                {NavLinksData.map((links, index) => {
                  return (
                    <li
                      key={index}
                      className={router.pathname == links.url ? "active" : ""}
                    >
                      <Link href={links.url}>{links.name}</Link>
                      {undefined !== links.subItems ? (
                        <ul className="sub-menu">
                          {links.subItems.map((subLinks, index) => (
                            <li key={index}>
                              <Link href={subLinks.url}>{subLinks.name}</Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Link href="#contact" className="btn-yellow">
              BOOK TODAY
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderOne;
