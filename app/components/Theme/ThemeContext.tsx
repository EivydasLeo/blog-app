import React, { type ReactNode } from "react";
import styles from "@/app/styles/components/Theme/theme.module.scss";

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return <div className={styles.light}>{children}</div>;
};
