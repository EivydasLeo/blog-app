import React from "react";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/app/_components/ContactForm/ContactForm";
import { Divider } from "@/app/_components/Divider/Divider";
import styles from "@/app/styles/contact/contact.module.scss";

export const metadata = {
    title: "Contact",
    description: "This is contact page",
};

export default async function ContactPage({
    params,
}: {
    params: { locale: string };
}): Promise<React.JSX.Element> {
    const t = await getTranslations("ContactPage");

    const translations = {
        divider: t("divider"),
        cardTitle: t("cardTitle"),
        cardDescription: t("cardDescription"),
        messageSent: t("messageSent"),
        firstName: t("firstName"),
        lastName: t("lastName"),
        firstNamePlaceholder: t("firstNamePlaceholder"),
        lastNamePlaceholder: t("lastNamePlaceholder"),
        email: t("email"),
        emailPlaceholder: t("emailPlaceholder"),
        message: t("message"),
        messagePlaceholder: t("messagePlaceholder"),
        sending: t("sending"),
        sendMessage: t("sendMessage"),
    };

    return (
        <>
            <Divider text={translations.divider} />
            <div className={styles.container}>
                <ContactForm locale={params.locale} translations={translations} />
            </div>
        </>
    );
}
