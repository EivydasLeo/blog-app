import styles from "@/app/styles/components/NotFound/notFound.module.scss";
import { ButtonLink } from "@/app/_components/ButtonLink/ButtonLink";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Divider } from "@/app/_components/Divider/Divider";

export default async function NotFound(): Promise<JSX.Element> {
    const t = await getTranslations("NotFoundPage");
    return (
        <>
            <Divider text="404" />
            <div className={styles.container}>
                <h1 className={styles.title}>{t("404").toUpperCase()}</h1>
                <Image
                    className={styles.image}
                    src={"/image/404.jpg"}
                    width={640}
                    height={448}
                    alt={"404"}
                    quality={100}
                />
                <ButtonLink text={t("link")} url="/" />
            </div>
        </>
    );
}
