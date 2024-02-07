import React from "react";
import Image from "next/image";
import styles from "@/scss/components/SocialLinks/social_links.module.scss";
import { socialLinks } from "@/utils/dummyData/data";
import Link from "next/link";

const SocialLinks: React.FC = () => {
    return (
        <div className={styles.social_container}>
            {socialLinks.map(({ src, alt, href }, index) => (
                <Link className={styles.social_link} key={index} href={href}>
                    <Image
                        className={styles.social_icon}
                        src={src}
                        alt={alt}
                        fill={true}
                        loading="lazy"
                    />
                </Link>
            ))}
        </div>
    );
};

export default SocialLinks;
