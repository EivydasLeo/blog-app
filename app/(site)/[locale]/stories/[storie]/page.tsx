import React from "react";
import styles from "@/app/styles/stories/stories.module.scss";
import { getSingleStorie } from "@/sanity/sanity.query";
import type { StorieTypes } from "@/types/types";
import { PortableText } from "@portabletext/react";
import { Divider } from "@/app/components/Divider/Divider";
import { getTranslations } from "next-intl/server";

export default async function Storie({
  params,
}: {
  params: { locale: string; storie: string };
}) {
  const { locale, storie } = params;
  const data: StorieTypes = await getSingleStorie(locale, storie);
  const t = await getTranslations("SingleStoriePage");

  return (
    <>
      <Divider text={t("divider")} />
      <div className={styles.container}>
        {data && (
          <div key={data._id} className={styles.item}>
            <h3 className={styles.title}>{data.title}</h3>
            <div className={styles.text}>
              <PortableText value={data.storie} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
