"use client";
import React, { useEffect } from "react";
import styles from "@/scss/app/dashboard/(auth)/login/login.module.scss";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.status === "authenticated") {
            router?.push("/dashboard");
        }
    }, [session.status, router]);

    return (
        <div className={styles.container}>
            <button onClick={async () => await signIn("google")}>Login with Google</button>
        </div>
    );
};

export default Login;
