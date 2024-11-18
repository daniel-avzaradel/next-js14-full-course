import Link from "next/link";
import React from "react";

import classes from "./main-header.module.css";

const MainHeaderComponent = () => {
  return (
    <header className={classes.header}>
      <h1>NEXTJS NEWS APP</h1>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>HOME</Link>
          </li>
          <li>
            <Link href={"/news"}>NEWS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeaderComponent;