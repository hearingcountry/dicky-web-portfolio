import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dicky Surya | Home",
    description: "Welcome to the journey",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
