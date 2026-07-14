import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fitness-buddy.example"),
  title: { default: "Fitness Buddy | Personalized cardio guidance", template: "%s | Fitness Buddy" },
  description: "Personalized cardio planning, progress tracking, motivation, and AI-supported fitness guidance.",
  icons: { icon: "/images/fitness-buddy-icon.jpeg" },
  openGraph: {
    title: "Fitness Buddy | Personalized cardio guidance",
    description: "Personalized cardio guidance that moves with you.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Fitness Buddy" }],
  },
  twitter: { card: "summary_large_image", title: "Fitness Buddy", description: "Personalized cardio guidance that moves with you.", images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#f4511e", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}>{children}</body></html>;
}
