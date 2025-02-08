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

export const metadata: Metadata = {
  title: "Greta SKA",
  description: "Blog",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${fraunces.variable} ${rheinmetall.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Header />
            <main className="container">{/* {children} */}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
