import React from "react";
import styles from "../scss/app/page.module.scss";
import Image from "next/image";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import { PersonData } from "../utils/dummyData/data";
import { Divider } from "../components/Divider/Divider";
import { ButtonLink } from "../components/ButtonLink/ButtonLink";

const Home: React.FC = (): React.ReactNode => {
  const { title, subtitle, text } = PersonData;
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Divider text="Welcome" />
        <ArticleCard title={title} subtitle={subtitle} text={text} />
        <ButtonLink text="Join insider" url="/studio" />
      </div>
      <Image
        src="/image/429684424_354750824134135_6874683522594106779_n.jpg"
        alt="blogger"
        width={550}
        height={550}
      />
    </div>
  );
};

export default Home;
