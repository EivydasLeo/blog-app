import React from "react";
import styles from "../../scss/components/ArticleCard/articleCard.module.scss";

interface ArticleCardProps {
    title: string;
    subtitle: string;
    text: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ title, subtitle, text }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    );
};
