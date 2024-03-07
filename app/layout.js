import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeModeScript, DarkThemeToggle, Flowbite } from "flowbite-react";
import Head from "next/head";
import { keywords } from "@/components/SEO"; // Assuming SEO.js is in components folder
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  metadataBase: new URL('https://www.elsiehairsalon.co.za'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    },
  },
  formatDetection: {
    email: "info@ElsieHairSalon.co.za",
    address: "7 Deodar St, Mayberry Park, Alberton, 1481, South Africa",
    telephone: "+27 633 817 805",
  },
  title: {
    default: 'Elsie Hair Salon',
  },
  description:
    "Elsie Hair Salon in sandton, Johannesburg offers a wide range of hair services, including blowouts, weaves, braids, treatments, and more.",
  keywords: keywords.join(", "),
  siteName: "Elsie Hair Salon",
  authors: [
    { name: 'Alexander Darko'},
    { name: 'Pius Opoku-Fofie'}
  ],

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
        </Head>
        <body className={inter.className}>
          <Navigation />
          {children}
          <Footer />
        </body>
        {/* Wrap Google analytics this in cookie banner */}
        <GoogleAnalytics gtmId="G-8SB8D3YWB1" />
      </html>
    </Flowbite>
  );
}
