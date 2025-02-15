import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { montserrat, fraunces, rheinmetall } from "../../fonts/font";
import "@/app/styles/globals.scss";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ThemeProvider } from "../../components/Theme/ThemeContext";
import { NextIntlClientProvider } from "next-intl";
import styles from "@/app/styles/components/Main/main.module.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Greta SKA",
  description: "Blog Page",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${fraunces.variable} ${rheinmetall.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="container">
              <Header />
              <main className={styles.container}>
                {children}
                <SpeedInsights />
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
