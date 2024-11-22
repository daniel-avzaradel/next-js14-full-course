"use client";

import Link from "next/link";
import React from "react";

import classes from "./main-header.module.css";
import { usePathname } from "next/navigation";

const MainHeaderComponent = () => {

  const path = usePathname();

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
            <Link href={"/news"} className={path.startsWith('/news') ? classes.active : undefined}>NEWS</Link>
          </li>
          <li>
            <Link href={"/archive"} className={path.startsWith('/archive') ? classes.active : undefined}>ARCHIVE</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeaderComponent;