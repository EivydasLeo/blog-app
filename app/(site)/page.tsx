import React from "react";
import styles from "@/app/styles/page.module.scss";
import Image from "next/image";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import { Divider } from "../components/Divider/Divider";
import { ButtonLink } from "../components/ButtonLink/ButtonLink";
import { getAuthor } from "@/sanity/sanity.query";
import type { AuthorType } from "@/types/types";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const author: AuthorType[] = await getAuthor();

  return (
    <div className={styles.container}>
      {author &&
        author.map((data) => (
          <>
            <div key={data._id} className={styles.item}>
              <Divider text="Welcome" />
              <ArticleCard title={data.name} subtitle={data.headline} />
              <PortableText value={data.bio} />
              <ButtonLink text="Join insider" url="/studio" />
            </div>
            <div>
              <Image
                className={styles.image}
                src={data.profileImage.image}
                alt={data.profileImage.alt}
                width={500}
                height={600}
              />
            </div>
          </>
        ))}
    </div>
  );
}
