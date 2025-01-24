import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/client/navbar/navbar";

const montserrat = Montserrat({
  variable: "--font-family-primary",
  weight: ['400', '700'],
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-family-secondary",
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Identity Lab",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lora.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}