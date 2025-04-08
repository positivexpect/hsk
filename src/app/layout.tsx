import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hitthespotkitchen.com'),
  title: {
    default: "Hit The Spot Kitchen - Authentic Puerto Rican Cuisine in Fredericksburg, VA",
    template: "%s | Hit The Spot Kitchen"
  },
  description: "Experience authentic Puerto Rican cuisine at Hit The Spot Kitchen in Fredericksburg, VA. Food truck, restaurant, and private chef services featuring traditional family recipes.",
  keywords: ["Puerto Rican food", "Fredericksburg VA", "Hit The Spot Kitchen", "food truck", "private chef", "mofongo", "arroz con gandules", "authentic cuisine", "catering", "events"],
  authors: [{ name: "Maria" }],
  creator: "Hit The Spot Kitchen",
  publisher: "Hit The Spot Kitchen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.png",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hitthespotkitchen.com",
    title: "Hit The Spot Kitchen - Authentic Puerto Rican Cuisine",
    description: "Experience authentic Puerto Rican cuisine at Hit The Spot Kitchen in Fredericksburg, VA. Food truck, restaurant, and private chef services featuring traditional family recipes.",
    siteName: "Hit The Spot Kitchen",
    images: [{
      url: "/logo.png",
      width: 800,
      height: 800,
      alt: "Hit The Spot Kitchen Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hit The Spot Kitchen - Authentic Puerto Rican Cuisine",
    description: "Experience authentic Puerto Rican cuisine at Hit The Spot Kitchen in Fredericksburg, VA. Food truck, restaurant, and private chef services.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
