import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KyWavyyy",
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
          
        <main className="mt-8 max-md:mt-16">
          
            {children}
          </main>
            </body>
    </html>
  );
}
