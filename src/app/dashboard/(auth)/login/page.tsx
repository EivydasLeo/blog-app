"use client";
import React, { useEffect } from "react";
import styles from "@/scss/app/dashboard/login/login.module.scss";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button/Button";

const Login: React.FC = () => {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router?.push("/dashboard");
        }
    }, [status, router]);

    const handleSignIn = async (): Promise<void> => {
        try {
            await signIn("google");
        } catch (error) {
            console.error("Error during sign in:", error);
        }
    };

    return (
        <div className={styles.container}>
            <Button
                title="Login with Google"
                text="Login with Google"
                handleClick={() => {
                    void handleSignIn();
                }}
            />
        </div>
    );
};

export default Login;
