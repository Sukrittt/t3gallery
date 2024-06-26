import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

import { Navbar } from "~/app/_components/navbar";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "~/app/api/uploadthing/core";
import { CSPostHogProvider } from "~/app/_analytics/provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 Gallery",
  description: "Generated by sukrit btw.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <html lang="en">
          <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
            <Navbar />
            {children}
            {modal}
            <div id="modal-root" />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
