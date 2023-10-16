import React, { type ReactNode } from "react";
import styles from "./page.module.scss";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <h1 className={styles.mainTitle}>Our works</h1>
            {children}
        </div>
    );
};

export default Layout;
