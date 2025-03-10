import React from "react";
import { getTranslations } from "next-intl/server";
import styles from "@/app/styles/page.module.scss";
import Image from "next/image";
import { ArticleCard } from "../../components/ArticleCard/ArticleCard";
import { Divider } from "../../components/Divider/Divider";
import { getAuthor } from "@/sanity/sanity.query";
import type { AuthorType } from "@/types/types";
import { PortableText } from "@portabletext/react";

export const revalidate = 0;

export default async function Home({
    params,
}: {
    params: { locale: string };
}): Promise<React.JSX.Element> {
    const { locale } = params;
    const author: AuthorType[] = await getAuthor(locale);
    const t = await getTranslations("HomePage");

    return (
        <>
            <Divider className={styles.divider} text={t("divider")} />
            <div className={styles.container}>
                {author?.map((data) => (
                    <>
                        <div key={data._id} className={styles.item}>
                            <ArticleCard title={data.name} subtitle={data.headline} />
                            <PortableText value={data.bio} />
                        </div>
                        <Image
                            className={styles.image}
                            src={data.profileImage.image}
                            alt={data.profileImage.alt}
                            quality={90}
                            width={400}
                            height={599}
                            priority
                            sizes="(min-width: 780px) 400px, (min-width: 340px) 220px, calc(-900vw + 3100px)"
                        />
                    </>
                ))}
            </div>
        </>
    );
}
