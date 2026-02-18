import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Navbar from "./navbar";
import AesthetiqAIChat from "./aesthetiqchat";
import Footernew from "./footernew";
// Optimized Font Loading to fix Performance SI (Speed Index)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// FIX: Added Metadata for SEO (Score 82 -> 100)
export const metadata: Metadata = {
  title: "Aesthetiq Foundation Dental Clinic | Expert Dental Care in chennai",
  description: "Led by Dr. R. Sivaranjani, Luxe Dental Clinic offers top-tier dental treatments in Velachery and Perungudi. Book your appointment for a brighter smile today.",
  keywords: ["Dental Clinic Velachery", "Dentist in Perungudi", "Dr. Sivaranjani", "Luxe Dental"],
  openGraph: {
    title: "Luxe Dental Clinic",
    description: "Expert dental care in Chennai.",
    url: "https://dental-clinic-website-brown.vercel.app/",
    siteName: "Aesthetiq Foundation Dental Clinic",
    images: [
      {
        url: "/og-image.jpg", // Add an image in your public folder for social sharing
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-gray-900`}>
        <Navbar />

        <main id="main-content" className="min-h-screen relative">
          {children}
        </main>
        
        <Footernew />

        {/* MOVE IT HERE - At the very end of the body */}
        <AesthetiqAIChat /> 
      </body>
    </html>
  );
}