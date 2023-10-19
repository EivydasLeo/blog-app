"use client";

import React, { useContext } from "react";
import styles from "./dark-mode.module.scss";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div
                className={styles.ball}
                style={mode === "light" ? { left: "2px" } : { right: "2px" }}
            />
        </div>
    );
};
export default DarkModeToggle;
