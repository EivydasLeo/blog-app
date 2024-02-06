"use client";
import "@/scss/global/global.scss";
import React from "react";
import { ThemeProvider } from "@/Context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

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
