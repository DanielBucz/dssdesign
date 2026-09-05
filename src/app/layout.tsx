import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dobrze się składa. | Studio kreatywne",
    template: "%s | Dobrze się składa.",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    siteName: siteConfig.name,
    title: "Dobrze się składa. | Studio kreatywne",
    description:
      "Strategia, design i technologia. Złożone w całość, żeby działało, wyglądało i sprzedawało.",
    type: "website",
    locale: "pl_PL",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
