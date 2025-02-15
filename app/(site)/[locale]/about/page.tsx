import React from "react";
import styles from "@/app/styles/about/about.module.scss";
import { Divider } from "@/app/components/Divider/Divider";
import { getSlide } from "@/sanity/sanity.query";
import { SlideType } from "@/types/types";
import ProfileSlider from "@/app/components/ProfileSlider/ProfileSlider";
import { getAbout } from "@/sanity/sanity.query";
import type { AboutType } from "@/types/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function About({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const about: AboutType[] = await getAbout(locale);
  const slides: SlideType[] = await getSlide();
  const t = await getTranslations("AboutPage");

  return (
    <>
      <Divider className={styles.divider} text={t("divider")} />
      <div className={styles.container}>
        <div className={styles.item}>
          {about &&
            about.map((data) => (
              <div key={data._id} className={styles.bio}>
                <PortableText value={data.bio} />
                <PortableText value={data.writing} />
                {data.books.map((book) => (
                  <Link
                    key={book._key}
                    href={book.link}
                    className={styles.link}
                  >
                    {book.title}
                  </Link>
                ))}
                {data.articles.map((article) => (
                  <Link
                    className={styles.link}
                    key={article._key}
                    href={article.link}
                  >
                    {article.title}
                  </Link>
                ))}
              </div>
            ))}
        </div>
        {slides.map((data) => (
          <div className={styles.slider} key={data._id}>
            <ProfileSlider slides={data.slides} _id={data._id} />
          </div>
        ))}
      </div>
    </>
  );
}
