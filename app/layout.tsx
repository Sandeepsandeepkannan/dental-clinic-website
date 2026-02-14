import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Navbar from "./navbar";

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
  title: "Luxe Dental Clinic | Expert Dental Care in Velachery & Perungudi",
  description: "Led by Dr. R. Sivaranjani, Luxe Dental Clinic offers top-tier dental treatments in Velachery and Perungudi. Book your appointment for a brighter smile today.",
  keywords: ["Dental Clinic Velachery", "Dentist in Perungudi", "Dr. Sivaranjani", "Luxe Dental"],
  openGraph: {
    title: "Luxe Dental Clinic",
    description: "Expert dental care in Chennai.",
    url: "https://dental-clinic-website-brown.vercel.app/",
    siteName: "Luxe Dental Clinic",
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
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-gray-900`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main content with proper semantics */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}