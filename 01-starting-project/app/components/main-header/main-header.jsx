import Link from "next/link";
import React from "react";

import classes from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeaderComponent = () => {
  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <h1>NEXTJS NEWS APP</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink href={"news"} />
          </li>
          <li>
            <NavLink href={"archive"} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeaderComponent;
