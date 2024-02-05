"use client";
import React from "react";
import styles from "@/scss/components/navbar/navbar.module.scss";
import Link from "next/link";
import { links } from "@/utils/dummyData/navbar";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const { status } = useSession();
    const pathname = usePathname();

    const handleLinkActive = (path: string): string => (path === pathname ? styles.active : "");

    const handleSignOut = async (): Promise<void> => {
        try {
            await signOut();
        } catch (error) {
            console.error("Error during sign out:", error);
        }
    };

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                SKA
            </Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link
                        key={link.id}
                        href={link.url}
                        className={`${styles.link} ${handleLinkActive(link.url)}`}
                    >
                        {link.title}
                    </Link>
                ))}
                {status === "authenticated" && (
                    <button
                        className={styles.logout}
                        onClick={() => {
                            void handleSignOut();
                        }}
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
