import React from "react";
import styles from "@/scss/components/links/links.module.scss";
import { links } from "@/utils/dummyData/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logo } from "@/utils/dummyData/data";

interface LinksProps {
    isFooter?: boolean;
    isAuthenticated: boolean;
}

const Links: React.FC<LinksProps> = ({ isFooter = false, isAuthenticated }) => {
    const pathname = usePathname();

    const handleLinkActive = (path: string): string => (path === pathname ? styles.active : "");

    const filteredLinks = isAuthenticated
        ? links
        : links.filter((link) => link.isHidden === undefined || !link.isHidden);

    return (
        <div className={isFooter ? styles.footer_container : styles.container}>
            <Link href="/" className={styles.logo}>
                {logo.header_logo}
            </Link>
            <div className={isFooter ? styles.footer_links : styles.links}>
                {filteredLinks.map(({ id, url, title }) => (
                    <Link
                        key={id}
                        href={url}
                        className={`${isFooter ? styles.footer_link : styles.link} ${handleLinkActive(url)}`}
                    >
                        {title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Links;
