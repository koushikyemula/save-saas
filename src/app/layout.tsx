import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ConvexClientProvider from "./ConvexClientProvider";

import "./globals.css";

import { Providers } from "@/providers";
import { ClerkProvider } from "@clerk/nextjs";

import Header from "@/components/header/header";
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
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" suppressHydrationWarning>
        <body className={(inter.className, "bg-[#F6F6F3] dark:bg-[#0C0C0C]")}>
          <Providers>
            <TopLoader />
            <Header />
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
