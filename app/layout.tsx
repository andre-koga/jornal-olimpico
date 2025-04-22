import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jornal Olimpico - Portal de Olimpíadas Científicas",
  description:
    "Seu portal de notícias e recursos para olimpíadas científicas brasileiras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
