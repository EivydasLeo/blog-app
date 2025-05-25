import React from "react";
import Image from "next/image";
import styles from "@/app/styles/components/SocialLinks/socialLinks.module.scss";
import { SocialLinksData } from "../../utils/dummyData/data";
import Link from "next/link";

export const SocialLinks: React.FC = () => {
    return (
        <div className={styles.container}>
            {SocialLinksData.map(({ src, alt, href }, index) => (
                <Link className={styles.link} key={index} href={href}>
                    <Image
                        className={styles.icon}
                        src={src}
                        alt={alt}
                        fill={true}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </Link>
            ))}
        </div>
    );
};
