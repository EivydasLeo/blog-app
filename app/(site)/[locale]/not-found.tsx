import styles from "@/app/styles/components/NotFound/notFound.module.scss";
import { ButtonLink } from "@/app/components/ButtonLink/ButtonLink";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Divider } from "@/app/components/Divider/Divider";

export default async function NotFound() {
  const t = await getTranslations("NotFoundPage");
  return (
    <div className={styles.container}>
      <Divider text="404" />
      <h1 className={styles.title}>{t("404")}</h1>
      <Image
        className={styles.image}
        src={"/image/404.jpg"}
        width={640}
        height={448}
        alt={"404"}
      />
      <ButtonLink text={t("link")} url="/" />
    </div>
  );
}