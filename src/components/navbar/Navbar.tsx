"use client";
import React from "react";
import styles from "@/scss/components/navbar/navbar.module.scss";
import { signOut, useSession } from "next-auth/react";
import { Links } from "../Links/Links";
import { Button } from "../Button/Button";

export const Navbar: React.FC = () => {
    const { status } = useSession();

    const handleSignOut = async (): Promise<void> => {
        try {
            await signOut();
        } catch (error) {
            console.error("Error during sign out:", error);
        }
    };

    return (
        <div className={styles.container}>
            <Links isAuthenticated={status === "authenticated"} />
            {status === "authenticated" && (
                <Button
                    text="Logout"
                    title="Logout"
                    variant="small"
                    handleClick={() => {
                        void handleSignOut();
                    }}
                />
            )}
        </div>
    );
};
