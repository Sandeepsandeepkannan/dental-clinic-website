import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Navbar from "./navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body 
         className={` bg-white  antialiased min-h-screen bg-white`}
      >

        {/* Navbar inside body */}
        <Navbar />

       <main className="min-h-screen">
  {children}
</main>

      </body>
    </html>
  );
}
