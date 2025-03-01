import React from "react";
import styles from "@/app/styles/books/books.module.scss";
import { getBook } from "@/sanity/sanity.query";
import type { BookType } from "@/types/types";
import { PortableText } from "@portabletext/react";
import { Divider } from "@/app/components/Divider/Divider";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Books({
    params,
}: {
    params: { locale: string };
}): Promise<React.JSX.Element> {
    const { locale } = params;
    const book: BookType[] = await getBook(locale);
    const t = await getTranslations("BooksPage");

    return (
        <>
            <Divider text={t("divider")} />
            <div className={styles.container}>
                {book?.map((data) => (
                    <div key={data._id} className={styles.item}>
                        <Image
                            src={data.bookImage.image}
                            alt={data.bookImage.alt}
                            width={300}
                            height={300}
                            quality={100}
                        />
                        <div className={styles.description}>
                            <PortableText value={data.description} />
                            {data.link !== "" && (
                                <Link className={styles.link} href={data.link}>
                                    {t("linkTitle")}
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
