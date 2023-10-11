import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProviderChadcn from "@/components/ThemeProviderChadcn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghost UI",
  description: "libreria de componentes de UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviderChadcn
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProviderChadcn>
      </body>
    </html>
  );
}
