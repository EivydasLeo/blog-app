import React from "react";
import styles from "@/app/styles/components/Copyright/copyright.module.scss";
import { CopyrightData } from "../../utils/dummyData/data";
import { getTranslations } from "next-intl/server";

export const Copyright: React.FC = async () => {
    const { copyrightDate } = CopyrightData;
    const t = await getTranslations("CopyrightPage");
    return (
        <div className={styles.container}>
            <span className={styles.text}>
                {copyrightDate}
                {t("copyright")}
            </span>
        </div>
    );
};
