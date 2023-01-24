import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} scroll-smooth bg-[#e7dfd5] hover:bg-yellow-200 transition-colors duration-500 delay-1000`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className="min-h-screen relative"
        // className="min-h-screen hover:bg-blue-300 transition-colors duration-500 delay-1000"
      >
        {/* className="min-h-screen hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-colors duration-700 delay-1000"
      > */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
