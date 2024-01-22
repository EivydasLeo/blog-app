"use client";
import React from "react";
import Link from "next/link";
import { links } from "@/utils/dummyData/navbar";
import styles from "./navbar.module.scss";
import DarkModeToggle from "@/components/DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
    const session = useSession();
    return (
        <div className={styles.container}>
            <Link className={styles.logo} href="/">
                HomePage
            </Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map((link) => (
                    <Link className={styles.link} key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
                {session.status === "authenticated" && (
                    <button className={styles.logout} onClick={signOut}>
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};
export default Navbar;
