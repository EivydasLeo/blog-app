import React from "react";
import styles from "@/app/styles/components/Footer/footer.module.scss";
import { NavigationLinks } from "../NavigationLinks/NavigationLinks";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { Copyright } from "../Copyright/Copyright";

export const Footer: React.FC = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.body}>
                <ul className={styles.links}>
                    <NavigationLinks isFooter />
                </ul>
                <div className={styles.social}>
                    <SocialLinks />
                </div>
            </div>
            <Copyright />
        </footer>
    );
};
