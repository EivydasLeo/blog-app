"use client";
import "@/scss/global/global.scss";
import React from "react";
import { ThemeProvider } from "@/context/themeContext";
import AuthProvider from "@/components/authProvider/authProvider";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export const metadata = {
    title: "Blog App",
    description: "This is description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <AuthProvider>
                        <div className="container">
                            <Navbar />
                            {children}
                            <Footer />
                        </div>
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
