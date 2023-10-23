import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProviderChadcn from "@/components/chadcn/ThemeProviderChadcn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghost UI",
  description: "libreria de componentes de UI",
  themeColor: '#020202'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="absolute h-screen w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
        <ThemeProviderChadcn
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProviderChadcn>
      </body>
    </html>
  );
}
