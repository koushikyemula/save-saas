import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ConvexClientProvider from "./ConvexClientProvider";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import TopLoader from "@/components/ui/top-loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Save Saas",
  description: "Save literally anything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, "bg-black")}>
        <TopLoader />
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
