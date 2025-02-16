import { Montserrat, Fraunces } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-montserrat",
});

export const fraunces = Fraunces({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-fraunces",
});

export const rheinmetall = localFont({
    src: "../../public/fonts/1952 RHEINMETALL.woff2",
    display: "swap",
    variable: "--font-rheinmetall",
});
