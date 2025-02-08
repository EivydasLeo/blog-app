import React from "react";
import styles from "@/app/styles/components/Header/header.module.scss";
import stylesNav from "@/app/styles/components/Navbar/navbar.module.scss";
import { NavigationLinks } from "../NavigationLinks/NavigationLinks";
import LocalSwitcher from "@/app/(site)/[locale]/localSwitcher";
import Burger from "../Burger/Burger";
import { LogoData } from "@/app/utils/dummyData/data";
import Link from "next/link";

export const Header: React.FC = () => {
  const { headerLogo } = LogoData;

  return (
    <header className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        {headerLogo}
      </Link>
      <nav className={stylesNav.container}>
        <NavigationLinks />
        <LocalSwitcher />
      </nav>
      <Burger />
    </header>
  );
};
