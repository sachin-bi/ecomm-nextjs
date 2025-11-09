import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarUser from "@/components/common/NavbarUser";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecomm Store",
  description: "Your one-stop shop for all things stylish and modern.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* add navbar */}
        <NavbarUser />
        {children}
      </body>
    </html>
  );
}
