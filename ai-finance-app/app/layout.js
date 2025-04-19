import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welth",
  description: "One stop FInance Plateform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header></Header>
        <main className="min-h-screen">        {children}
        </main>
        <footer className="bg-red-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-900">
            <p>
              Made with ♥ by RoadsideCoder
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
