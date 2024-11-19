import Link from "next/link";
import React from "react";

import classes from "./main-header.module.css";

const MainHeaderComponent = () => {
  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <h1>NEXTJS NEWS APP</h1>
      </Link>
      <nav>
        <ul>
          <li>
          </li>
          <li>
            <Link href={"/news"}>NEWS</Link>
          </li>
          <li>
            <Link href={"/archive"}>ARCHIVE</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeaderComponent;