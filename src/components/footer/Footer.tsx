import React from "react";
import styles from "@/scss/components/footer/footer.module.scss";
import Image from "next/image";
import Links from "../Links/Links";

const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <Links isFooter />
            <div className={styles.social}>
                <Image
                    className={styles.icon}
                    src="/1.png"
                    height={15}
                    width={15}
                    alt="Facebook Account"
                />
            </div>
        </div>
    );
};
export default Footer;
