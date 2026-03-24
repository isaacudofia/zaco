import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Isaac's Portfolio",
  description: "Isaac's Portfolio",
  icons: {
    icon: "/profile pic.jpeg", // Point this to the file in your public folder
    shortcut: "/profile pic.jpeg",
    apple: "/profile pic.jpeg", // For iOS home screen bookmarks
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Using bg-[#000000] for the exact background from the screenshot.
        min-h-screen ensures the black covers the full height of the browser.
      */}
      <body className="bg-[#000000] min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}