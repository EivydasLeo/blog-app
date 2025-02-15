import React from "react";
import styles from "@/app/styles/stories/stories.module.scss";
import { getStories } from "@/sanity/sanity.query";
import type { StorieTypes } from "@/types/types";
import { Divider } from "@/app/components/Divider/Divider";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Stories({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const storie: StorieTypes[] = await getStories(locale);
  const t = await getTranslations("StoriesPage");

  return (
    <>
      <Divider text={t("divider")} />
      <div className={styles.container}>
        {storie &&
          storie.map((data) => (
            <div key={data._id} className={styles.item}>
              <h3 className={styles.title}>{data.title}</h3>
              <Link
                className={styles.link}
                href={`/${locale}/stories/${data.slug}`}
              >
                {t("readMore")}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
