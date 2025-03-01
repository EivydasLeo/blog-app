"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/styles/components/Header/header.module.scss";
import stylesNav from "@/app/styles/components/Navbar/navbar.module.scss";
import { NavigationLinks } from "../NavigationLinks/NavigationLinks";
import LocalSwitcher from "@/app/(site)/[locale]/localSwitcher";
import Burger from "../Burger/Burger";
import { LogoData } from "@/app/utils/dummyData/data";
import Link from "next/link";

export const Header: React.FC = () => {
    const { headerLogo } = LogoData;

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setScroll(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.container} ${scroll ? styles.sticky : ""}`}>
            <Link href={"/"} className={styles.logo}>
                {headerLogo}
            </Link>
            <nav className={stylesNav.container}>
                <NavigationLinks />
                <LocalSwitcher />
            </nav>
            <Burger />
        </header>
    );
};
