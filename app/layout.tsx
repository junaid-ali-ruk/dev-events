import type { Metadata } from "next";
import "./globals.css";
import LightRays from "@/components/LightRays"
import Navbar from "@/components/Navbar"
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google"
export const metadata: Metadata = {
  title: "Dev Events",
  description: "DevEvents || dont miss any devloper event",
};

const SchibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotest",
  subsets: ["latin"]
})
const MartianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${SchibstedGrotesk.variable} ${MartianMono.variable}min-h-screen`}
      >

          <Navbar/>
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen"  >
          <LightRays
            raysOrigin="top-center"
            raysColor="#2cffbc"
            raysSpeed={0.5}
            lightSpread={2}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
       <main>
         {children}
       </main>
      </body>
    </html>
  );
}
