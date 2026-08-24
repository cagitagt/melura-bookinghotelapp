import type { Metadata } from "next";
import { Raleway, Lato, Playfair_Display } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Book Hotel",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${raleway.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-lato">
        <Navbar />
        <main className="bg-taupe-50 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
