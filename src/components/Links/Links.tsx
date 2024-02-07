import React from "react";
import styles from "@/scss/components/links/links.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoData, linksData } from "@/utils/dummyData/data";

interface LinksProps {
    isFooter: boolean;
    isAuthenticated: boolean;
}

export const Links: React.FC<LinksProps> = ({ isFooter, isAuthenticated }) => {
    const { headerLogo } = LogoData;
    const pathname = usePathname();

    const handleLinkActive = (path: string): string => (path === pathname ? styles.active : "");

    const filteredLinks = isAuthenticated
        ? linksData
        : linksData.filter((link) => link.isHidden === undefined || !link.isHidden);

    return (
        <div className={isFooter ? styles.footer_container : styles.container}>
            <Link href="/" className={styles.logo}>
                {headerLogo}
            </Link>

            <div className={isFooter ? styles.footer_links : styles.links}>
                {filteredLinks.map(({ id, url, title }) => (
                    <Link
                        key={id}
                        href={url}
                        className={`${isFooter ? styles.footer_link : styles.link} ${handleLinkActive(url)}`}
                    >
                        {isFooter ? title : title.toUpperCase()}
                    </Link>
                ))}
            </div>
        </div>
    );
};
