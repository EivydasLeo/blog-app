import React from "react";
import styles from "@/scss/components/links/links.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoData, LinksData } from "@/utils/dummyData/data";
import { type LinksProps } from "@/utils/dummyData/props";

export const Links: React.FC<LinksProps> = ({ isFooter = false, isAuthenticated }) => {
    const { headerLogo } = LogoData;
    const pathname = usePathname();

    const handleLinkActive = (path: string): string => (path === pathname ? styles.active : "");

    const filteredLinks = isAuthenticated
        ? LinksData
        : LinksData.filter((link) => link.isHidden === undefined || !link.isHidden);

    return (
        <>
            {!isFooter ? (
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        {headerLogo}
                    </Link>
                    <div className={styles.links}>
                        {filteredLinks.map(({ id, url, title }) => (
                            <Link
                                key={id}
                                href={url}
                                className={`${styles.link} ${handleLinkActive(url)}`}
                            >
                                {title.toUpperCase()}
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                filteredLinks.map(({ id, url, title }) => (
                    <Link key={id} href={url} className={`${styles.link} ${handleLinkActive(url)}`}>
                        {title}
                    </Link>
                ))
            )}
        </>
    );
};
