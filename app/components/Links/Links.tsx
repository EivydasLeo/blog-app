"use client";
import React from "react";
import styles from "/app/scss/components/links/links.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoData, LinksData } from "../../utils/dummyData/data";
import { type LinksProps } from "../../utils/dummyData/props";

export const Links: React.FC<LinksProps> = ({ isFooter = false }) => {
  const { headerLogo } = LogoData;
  const pathname = usePathname();

  const handleLinkActive = (path: string): string =>
    path === pathname ? styles.active : "";

  const filteredLinks = LinksData.filter((link) => link);

  return (
    <>
      {!isFooter ? (
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            {headerLogo}
          </Link>
          <div className={styles.links}>
            {LinksData.map(({ id, url, title }) => (
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
          <Link
            key={id}
            href={url}
            className={`${styles.link} ${handleLinkActive(url)}`}
          >
            {title}
          </Link>
        ))
      )}
    </>
  );
};
