import React from "react";
import styles from "@/app/styles/components/Navbar/navbar.module.scss";
import { Links } from "../Links/Links";

export const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <Links />
    </div>
  );
};
