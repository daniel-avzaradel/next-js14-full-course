"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from './main-header.module.css'

const NavLink = () => {

  const path = usePathname();

  return (
    <nav>
      <ul>
        <li></li>
        <li>
          <Link
            href={"/news"}
            className={path.startsWith("/news") ? classes.active : undefined}
          >
            NEWS
          </Link>
        </li>
        <li>
          <Link
            href={"/archive"}
            className={path.startsWith("/archive") ? classes.active : undefined}
          >
            ARCHIVE
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLink;
