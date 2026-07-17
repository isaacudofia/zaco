import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Isaac's Portfolio",
  description: "Isaac's Portfolio",
  icons: {
    icon: "/profile pic.png",
    shortcut: "/profile pic.png",
    apple: "/profile pic.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var s=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=t||s}catch(e){document.documentElement.dataset.theme='dark'}})()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-grow pt-2 sm:pt-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
