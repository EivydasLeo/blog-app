"use client";
import React from "react";
import styles from "@/app/styles/components/links/links.module.scss";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { LogoData } from "../../utils/dummyData/data";
import { type LinksProps } from "../../utils/dummyData/props";
import { useTranslations } from "next-intl";

export const NavigationLinks: React.FC<LinksProps> = ({ isFooter = false }) => {
  const { headerLogo } = LogoData;
  const pathname = usePathname();
  const t = useTranslations("HomePage");
  const navigationKeys = Object.keys(t.raw("navigation"));

  const handleLinkActive = (path: string) =>
    pathname.startsWith(path) ? styles.active : "";

  return (
    <>
      {!isFooter ? (
        <ul className={styles.container}>
          <Link href={"/"} className={styles.logo}>
            {headerLogo}
          </Link>
          {navigationKeys.map((key) => (
            <li className={styles.links} key={key}>
              <Link
                key={key}
                href={`/${key}`}
                className={`${styles.link} ${handleLinkActive(key)}`}
              >
                {t(`navigation.${key}`).toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        navigationKeys.map((key) => (
          <li key={key}>
            <Link
              href={`/${key}`}
              className={`${styles.link} ${handleLinkActive(key)}`}
            >
              {t(`navigation.${key}`)}
            </Link>
          </li>
        ))
      )}
    </>
  );
};
