"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./main-header.module.css";

const NavLink = ({ href }) => {
  const path = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={path.startsWith(`/${href}`) ? classes.active : undefined}
      >
        {href.toUpperCase()}
      </Link>
    </li>
  );
};

export default NavLink;
