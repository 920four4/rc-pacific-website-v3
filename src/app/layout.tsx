import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RC Pacific Construction | 35+ Years Building America's Biggest Brands",
  description: "Commercial construction specializing in restaurants, healthcare, retail, and corporate spaces. Trusted by Taco Bell, Krispy Kreme, Habit Burger and 15+ major brands across California, Arizona, Nevada, Washington, Texas, and Colorado.",
  keywords: ["commercial construction", "restaurant construction", "healthcare construction", "retail construction", "California contractor", "Taco Bell builder", "Krispy Kreme construction"],
  openGraph: {
    title: "RC Pacific Construction | 35+ Years Building America's Biggest Brands",
    description: "Commercial construction specializing in restaurants, healthcare, retail, and corporate spaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
