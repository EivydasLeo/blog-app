import React from "react";
import styles from "@/app/styles/stories/stories.module.scss";
import { getStories } from "@/sanity/sanity.query";
import type { StorieTypes } from "@/types/types";
import { Divider } from "@/app/_components/Divider/Divider";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { PortableText } from "next-sanity";

export default async function Stories({
    params,
}: {
    params: { locale: string };
}): Promise<React.JSX.Element> {
    const { locale } = params;
    const storie: StorieTypes[] = await getStories(locale);
    const t = await getTranslations("StoriesPage");

    return (
        <>
            <Divider text={t("divider")} />
            <div className={styles.container}>
                {storie?.map((data) => (
                    <div key={data._id} className={styles.item}>
                        <h1 className={styles.title}>{data.title}</h1>
                        <div className={`${styles.text} ${styles.mask}`}>
                            <PortableText value={data.storie} />
                        </div>
                        <Link className={styles.linkNext} href={`/${locale}/stories/${data.slug}`}>
                            {t("readMore").toUpperCase()}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
