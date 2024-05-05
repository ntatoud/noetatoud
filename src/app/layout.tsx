import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noé Tatoud",
  description: "Portfolio of Noé Tatoud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "antialised relative flex flex-col min-h-screen flex-grow bg-gray-950 font-sans tracking-tight text-white",
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
