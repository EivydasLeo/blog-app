import React from "react";
import styles from "@/app/styles/books/books.module.scss";
import { getBook } from "@/sanity/sanity.query";
import type { BookType } from "@/types/types";
import { PortableText } from "@portabletext/react";
import { Divider } from "@/app/components/Divider/Divider";
import Image from "next/image";
import Link from "next/link";

export default async function Books() {
  const book: BookType[] = await getBook();

  return (
    <div className={styles.container}>
      <Divider text="Books" />
      {book &&
        book.map((data) => (
          <div key={data._id} className={styles.item}>
            <Image
              src={data.bookImage.image}
              alt={data.bookImage.alt}
              width={300}
              height={300}
            />
            <div className={styles.description}>
              <PortableText value={data.description} />
              <Link href={data.link}>Publishers website</Link>
            </div>
          </div>
        ))}
    </div>
  );
}
