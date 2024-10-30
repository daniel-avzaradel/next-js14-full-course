"use client"

import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

const MainHeader = () => {

  let path = usePathname()

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            width={200}
            height={200}
            src={logoImg.src}
            alt="A plate with food on it"
          />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link>
            </li>
            <li>
              <Link href="/community" className={path = '/community' ? classes.active : undefined}>Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
