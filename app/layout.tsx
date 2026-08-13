import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Adarsh Kumar Singh portfolio",
  description: "This is Adarsh's portfolio website where all can see my professional journey ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-neutral-600 antialiased">
        <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
