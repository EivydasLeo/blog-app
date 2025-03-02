/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import styles from "@/app/styles/stories/stories.module.scss";
import { getSingleStorie } from "@/sanity/sanity.query";
import type { StorieTypes } from "@/types/types";
import { PortableText } from "@portabletext/react";

import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Storie({
    params,
}: {
    params: { locale: string; storie: string };
}): Promise<React.JSX.Element> {
    const { locale, storie } = params;
    const data: StorieTypes = await getSingleStorie(locale, storie);

    if (!data) {
        notFound();
    }

    return (
        <>
            <div className={styles.container}>
                <Link className={styles.linkBack} href={`/${locale}/stories/`} />
                {data && (
                    <div key={data._id} className={styles.item}>
                        <h1 className={styles.title}>{data.title}</h1>
                        <div className={styles.text}>
                            <PortableText value={data.storie} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
