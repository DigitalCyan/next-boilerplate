import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import IChildrenProps from "@/interfaces/children-props";
import classNames from "@/util/classNames";
import Menu from "@/components/_core/menu";

const inter = Inter({subsets: ['latin']});

const appName = "local.interloper's Boilerplate"
const description = "A set of tools designed to be used in conjunction with Next.js to speed up development."
const baseUrl = "https://local.interloper.me"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: appName,
  description,
  generator: "Next.js",
  applicationName: appName,
  keywords: ["Boilerplate"],
  creator: "local.interloper",
  publisher: "Vercel",
  authors: [{
    name: "local.interloper",
    url: "https://local.interloper.me"
  }],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/"
    }
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "apple-touch-icon-precompressed",
      url: "/logo.png"
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      nocache: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    url: baseUrl,
    title: appName,
    description: description,
    images: [
      {url: "/logo.png", width: 192, height: 192, alt: "App logo"}
    ],
    locale: "en_US",
    type: "website"
  },
};

const RootLayout = ({children}: IChildrenProps) => {
  return (
    <html lang="en">
    <body
      className={classNames(
        "w-screen h-[100svh] bg-background-dark text-text",
        inter.className
      )}
    >
    <Menu />
    {children}
    </body>
    </html>
  );
};

export default RootLayout;