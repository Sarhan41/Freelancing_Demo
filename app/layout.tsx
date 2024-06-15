import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KyWayyy",
  description: "Kyle Howerton's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black dark text-white">
      <body className={inter.className}>
        
        <Header />
          
          {children}</body>
    </html>
  );
}
