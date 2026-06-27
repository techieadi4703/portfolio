import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aditya-portfolio.vercel.app"),
  title: "Aditya Srivastava | Full Stack Engineer",
  description: "Personal developer portfolio of Aditya Srivastava, Full-Stack Software Engineer.",
  keywords: ["Aditya Srivastava", "Full Stack Engineer", "Software Developer", "React", "Node.js", "Portfolio"],
  openGraph: {
    title: "Aditya Srivastava | Full Stack Engineer",
    description: "Building scalable web applications with React, Node.js | AI Enthusiast",
    url: "https://aditya-portfolio.vercel.app",
    siteName: "Aditya Srivastava",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Srivastava | Full Stack Engineer",
    description: "Personal developer portfolio of Aditya Srivastava, Full-Stack Software Engineer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-base text-text-main`}
      >
        <div className="bg-noise"></div>
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
