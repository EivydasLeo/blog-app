import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { montserrat, fraunces, rheinmetall } from "../../fonts/font";
import "@/app/styles/globals.scss";
import { Header } from "../../_components/Header/Header";
import { Footer } from "../../_components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import styles from "@/app/styles/components/Main/main.module.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    title: "Avery Langston",
    description: "Blog Page",
};

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>): Promise<React.JSX.Element> {
    if (!routing.locales.includes(locale as never)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body
                className={`${montserrat.variable} ${fraunces.variable} ${rheinmetall.variable} light`}
            >
                <NextIntlClientProvider messages={messages}>
                    <div className="container">
                        <Header />
                        <main className={styles.container}>
                            {children}
                            <SpeedInsights />
                        </main>
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
