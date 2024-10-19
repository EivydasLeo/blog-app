import type { Metadata } from "next";
import { montserrat, fraunces, rheinmetall } from "../fonts/font";
import "@/app/styles/globals.scss";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { ThemeProvider } from "../components/Theme/ThemeContext";

export const metadata: Metadata = {
  title: "Greta SKA",
  description: "Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${fraunces.variable} ${rheinmetall.variable}`}
      >
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
