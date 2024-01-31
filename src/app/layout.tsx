import "../scss/global/globals.scss";
import { Inter, Roboto_Mono } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/context/themeContext";
import AuthProvider from "@/components/authProvider/authProvider";

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
    title: "Blog App",
    description: "This is description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
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
