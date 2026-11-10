import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The hub for every dev event you shouldn't miss",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        <Navbar />

        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.2}
            noiseAmount={0.0}
            distortion={0.01}
          />
        </div>

        <main> {children}</main>
      </body>
    </html>
  );
}
