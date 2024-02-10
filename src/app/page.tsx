import React from "react";
import styles from "@/scss/app/page.module.scss";
import { Button } from "@/components/Button/Button";
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { PersonData } from "@/utils/dummyData/data";
import { Divider } from "@/components/Divider/Divider";
import Image from "next/image";

const Home: React.FC = (): React.ReactNode => {
    const { title, subtitle, text } = PersonData;
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Divider text="Welcome" />
                <ArticleCard title={title} subtitle={subtitle} text={text} />
                <Button text="Join insider" url="/dashboard/login" />
            </div>
            <Image src="/image/blogger.jpg" alt="blogger" width={550} height={550} />
        </div>
    );
};

export default Home;
