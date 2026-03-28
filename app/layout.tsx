import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zero to Conviction",
    template: "%s — Zero to Conviction",
  },
  description:
    "Observations, Insights, and Everything in Between. By Mrigank",
  openGraph: {
    siteName: "Zero to Conviction",
    title: "Zero to Conviction",
    description: "Observations, Insights, and Everything in Between. By Mrigank",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero to Conviction",
    description: "Observations, Insights, and Everything in Between. By Mrigank",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${newsreader.variable} ${inter.variable}`}>
      <body className='bg-surface text-on-surface font-body antialiased min-h-screen'>
        <Nav />
        <main className='pt-24'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
