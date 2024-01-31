"use client";
import React from "react";
import styles from "@/scss/components/navbar/navbar.module.scss";
import Link from "next/link";
import { links } from "@/utils/dummyData/navbar";
import DarkModeToggle from "@/components/darkModeToggle/darkModeToggle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const session = useSession();
    return (
        <div className={styles.container}>
            <Link className={styles.logo} href="/">SKA</Link>
            <div className={styles.links}>
          
                {links.map((link) => (
                    <Link className={styles.link} key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
                {session.status === "authenticated" && <button className={styles.logout} onClick={signOut}>Logout</button>}
                <DarkModeToggle />
            </div>
        </div>
    );
};
export default Navbar;
