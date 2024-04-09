import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ConvexClientProvider from "./ConvexClientProvider";

import "./globals.css";

import Header from "@/components/header/header";
import { Provider } from "@/components/providers";
import TopLoader from "@/components/ui/top-loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Save Saas",
  description: "Save literally anything",
};

export const viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)" }, { media: "(prefers-color-scheme: dark)" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, "bg-[#F6F6F3] dark:bg-[#0C0C0C]")}>
        <Provider>
          <TopLoader />
          <Header />
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </Provider>
      </body>
    </html>
  );
}
