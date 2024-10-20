import React from "react";
import styles from "@/app/styles/stories/stories.module.scss";
import { getStorie } from "@/sanity/sanity.query";
import type { StorieType } from "@/types/types";
import { PortableText } from "@portabletext/react";
import { Divider } from "@/app/components/Divider/Divider";

export default async function Stories() {
  const storie: StorieType[] = await getStorie();

  return (
    <div className={styles.container}>
      <Divider text="Short Stories" />
      {storie &&
        storie.map((data) => (
          <div key={data._id} className={styles.item}>
            <h3 className={styles.title}>{data.title}</h3>
            <div className={styles.text}>
              <PortableText value={data.storie} />
            </div>
          </div>
        ))}
    </div>
  );
}
