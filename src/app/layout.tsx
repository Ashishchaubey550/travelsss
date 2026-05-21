import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const notoSerif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Global Concierge | High-End Luxury Travel India",
  description:
    "From the snow-capped Himalayas to the sun-kissed shores of Goa, experience the grandeur of Bharat through the lens of ultimate luxury. Tailor-made itineraries, elite fleet, 24/7 concierge.",
  keywords: [
    "luxury travel India",
    "private tours India",
    "concierge travel",
    "heritage tours",
    "luxury fleet India",
  ],
  openGraph: {
    title: "The Global Concierge | High-End Luxury Travel India",
    description:
      "Experience the grandeur of India through ultimate luxury. Tailor-made itineraries, elite fleet, 24/7 concierge.",
    type: "website",
  },
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@300..400,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Toaster 
          position="top-center" 
          toastOptions={{
            duration: 4000,
            style: {
              background: '#0f172a', // slate-900 to match dark luxurious theme
              color: '#ffffff',
              border: '1px solid #e9c349', // gold accent
              padding: '16px 24px',
              fontSize: '16px',
              fontWeight: 500,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
            },
            success: {
              iconTheme: {
                primary: '#10b981', // emerald-500
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444', // red-500
                secondary: '#ffffff',
              },
            },
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
