import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | QR code component",
  description:
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} !scroll-smooth bg-primary-gray `}>
        {children}
      </body>
    </html>
  );
}
