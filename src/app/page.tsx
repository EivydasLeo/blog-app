// import Image from "next/image";
import styles from "@/scss/app/page.module.scss";
import Button from "@/components/button/button";
import React from "react";
export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Better design for your digital products.</h1>
                <p className={styles.desc}>
                    Turning your Idea into Reality. We bring together the teams from the global tech
                    industry .
                </p>
                <Button text="See Our Works" url="/" />
            </div>
        </div>
    );
}
