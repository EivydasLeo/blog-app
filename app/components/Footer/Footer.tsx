import React from "react";
import styles from "../../scss/components/footer/footer.module.scss";
import { Links } from "../Links/Links";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { Copyright } from "../Copyright/Copyright";

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.links}>
          <Links isFooter />
        </div>
        <div className={styles.social}>
          <SocialLinks />
        </div>
      </div>
      <Copyright />
    </div>
  );
};
