import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dicky Surya | Home",
    description: "Welcome to the journey",
    icons: {
        icon: [{ url: "/favicon.ico?v=2", sizes: "32x32", type: "image/x-icon" }],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} pt-16`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
