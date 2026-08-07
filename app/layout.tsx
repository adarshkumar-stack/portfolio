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
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex justify-center bg-neutral-200">
        <div className="min-h-full w-7xl bg-white overflow-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
