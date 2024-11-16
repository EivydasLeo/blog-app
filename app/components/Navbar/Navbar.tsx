import React from "react";
import styles from "@/app/styles/components/Navbar/navbar.module.scss";
import { NavigationLinks } from "../NavigationLinks/NavigationLinks";
import LocalSwitcher from "@/app/(site)/[locale]/localSwitcher";

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.container}>
      <NavigationLinks />
      <LocalSwitcher />
    </nav>
  );
};
