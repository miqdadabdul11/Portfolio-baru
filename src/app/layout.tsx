import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Muhammad Miqdad - Portfolio",
  description: "Personal Portfolio of Muhammad Miqdad Abdul Aziz, Electrical Engineering Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-[#0f172a] text-slate-100 antialiased relative`}
      >
        <ParticlesBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
