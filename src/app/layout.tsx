import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../app/styles/root_layout.css"


//fonts from src/fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


//meta data saved for seo
export const metadata: Metadata = {
  title: "Code Editor ",
  description: "Code Editor for developers !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container`}
      >
        {children}
      </body>
    </html>
  );
}
