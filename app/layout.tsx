import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const roundelay = localFont({
  src: [
    {
      path: "../public/fonts/Roundelay-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Roundelay-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/Roundelay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Roundelay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Roundelay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Roundelay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Roundelay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Roundelay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Roundelay-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-roundelay",
});

export const metadata: Metadata = {
  title: "Fadi's Bites – Baked with Love, Spiced with Culture",
  description:
    "Fadi's Bites brings together authentic flavors and modern convenience to create delicious ready to cook snacks for every kitchen. Crafted with carefully selected ingredients, each product is made with a strong commitment to quality, hygiene, and great taste.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${roundelay.variable} ${roboto.variable}`} suppressHydrationWarning>
      <body className="font-body">
        {children}
        <SmoothScroll />
      </body>
    </html>
  );
}
