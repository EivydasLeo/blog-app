import styles from "@/scss/app/page.module.scss";
import Button from "@/components/Button/Button";
import React from "react";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { PersonData } from "@/utils/dummyData/data";

const Home: React.FC = (): React.ReactNode => {
    const { title, subtitle, text } = PersonData;
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <span>------Welcome</span>
                <ArticleCard title={title} subtitle={subtitle} text={text} />
                <Button text="Join insider" url="/" />
            </div>
        </div>
    );
};

export default Home;
