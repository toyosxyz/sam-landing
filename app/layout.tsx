import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono, Newsreader } from "next/font/google";
import { JsonLd } from "@/components/site/JsonLd";
import { organizationJsonLd } from "@/lib/json-ld";
import { homeSeo, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: homeSeo.title,
  description: homeSeo.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sam",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <JsonLd data={organizationJsonLd()} />
        {children}
      </body>
    </html>
  );
}
