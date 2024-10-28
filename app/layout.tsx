import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Header from "@/components/Header";

import { Providers } from "@/app/providers";

import "@/app/globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Baggage",
  description: "Find the perfect bag for you"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
