import React from "react";
import styles from "@/app/styles/components/ArticleCard/articleCard.module.scss";

interface ArticleCardProps {
    title?: string;
    subtitle?: string;
    text?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ title, subtitle, text }) => {
    return (
        <div className={styles.container}>
            {title !== undefined && <h1 className={styles.title}>{title}</h1>}
            {subtitle !== undefined && <h2 className={styles.subtitle}>{subtitle}</h2>}
            {text !== undefined && <p className={styles.text}>{text}</p>}
        </div>
    );
};
