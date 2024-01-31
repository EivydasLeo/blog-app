import React from "react";
import styles from "@/scss/components/footer/footer.module.scss";
import Image from "next/image";
const Footer = () => {
    return (
        <div className={styles.container}>
            <div>© Footer. All rights reserved.</div>
            <div className={styles.social}>
                <Image
                    className={styles.icon}
                    src="/1.png"
                    height={15}
                    width={15}
                    alt="Facebook Account"
                />
                <Image
                    className={styles.icon}
                    src="/2.png"
                    height={15}
                    width={15}
                    alt="Facebook Account"
                />
                <Image
                    className={styles.icon}
                    src="/3.png"
                    height={15}
                    width={15}
                    alt="Facebook Account"
                />
                <Image
                    className={styles.icon}
                    src="/4.png"
                    height={15}
                    width={15}
                    alt="Facebook Account"
                />
            </div>
        </div>
    );
};
export default Footer;
