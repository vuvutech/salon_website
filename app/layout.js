import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeModeScript, DarkThemeToggle, Flowbite } from "flowbite-react";
import { NextSeo, DefaultSeo } from "next-seo";
import Head from "next/head";
import { keywords } from "@/components/SEO"; // Assuming SEO.js is in components folder

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Elsie Hair Salon",
  description:
    "Elsie Hair Salon in sandton, Johannesburg offers a wide range of hair services, including blowouts, weaves, braids, treatments, and more.",
  keywords: keywords.join(", "), 
  siteName: "Elsie Hair Salon", 
  author: "Pius Opoku-Fofie", 
  image: "../public/hair-tools.jpg", 
  url: "https://www.elsiehairsalon.co.za", 
  type: "website", 
  locale: "en_US", 
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.elsiehairsalon.co.za",
    title: "Elsie Hair Salon",
    description:
      "Discover the best hair services at Elsie Hair Salon in Johannesburg. From stylish blowouts to trendy weaves and braids, we've got your hair needs covered.",
      image: "../public/hair-tools.jpg", 
      site_name: "Elsie Hair Salon",
  },
  // Add more specific Twitter Card tags for Twitter sharing
  // twitter: {
  //   cardType: "summary_large_image",
  //   handle: "@yourtwitterhandle",
  // },
};

export default function RootLayout({ children }) {
  return (
    <Flowbite>
      <html lang="en">
        <Head>
          <ThemeModeScript />
          <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        </Head>
        <body className={inter.className}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </Flowbite>
  );
}
