import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import "@/app/globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metaacademy-calculadoras.vercel.app"),
  title: "Imperium Calculadoras",
  description: "Calculadoras 7PT y 9PT para combinaciones, ganancias y saldo en euros.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }]
  },
  openGraph: {
    title: "Imperium Calculadoras",
    description: "Calculadoras 7PT y 9PT para combinaciones, ganancias y saldo en euros.",
    images: [
      {
        url: "/imperium-share.png",
        width: 512,
        height: 512,
        alt: "Imperium"
      }
    ],
    type: "website",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Imperium Calculadoras",
    description: "Calculadoras 7PT y 9PT para combinaciones, ganancias y saldo en euros.",
    images: ["/imperium-share.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
