import React from "react";
import { getTranslations } from "next-intl/server";
import styles from "@/app/styles/page.module.scss";
import Image from "next/image";
import { ArticleCard } from "../../components/ArticleCard/ArticleCard";
import { Divider } from "../../components/Divider/Divider";
import { getAuthor } from "@/sanity/sanity.query";
import type { AuthorType } from "@/types/types";
import { PortableText } from "@portabletext/react";

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const author: AuthorType[] = await getAuthor(locale);
  const t = await getTranslations("HomePage");

  return (
    <>
      <Divider className={styles.divider} text={t("divider")} />
      <div className={styles.container}>
        {author &&
          author.map((data) => (
            <>
              <div key={data._id} className={styles.item}>
                <ArticleCard title={data.name} subtitle={data.headline} />
                <PortableText value={data.bio} />
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
    </>
  );
}
