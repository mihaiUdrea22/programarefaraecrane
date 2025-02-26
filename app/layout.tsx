import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Programare Fără Ecrane - Învățare Interactivă pentru Copii",
  description: "Ajută-l pe copilul tău să-și dezvolte gândirea logică prin activități interactive și educative fără ecrane!",
  openGraph: {
    title: "Programare Fără Ecrane - Învățare Interactivă pentru Copii",
    description: "Descoperă cum putem ajuta copiii să învețe fără ecrane!",
    url: "https://programarefaraecrane.ro",
    siteName: "Programare Fără Ecrane",
    images: [
      {
        url: "/programarefaraecrane.png", // Imaginea pe care ai pus-o în public/
        width: 1200,
        height: 1080,
        alt: "Programare Fără Ecrane - Învățare Interactivă pentru Copii",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programare Fără Ecrane",
    description: "Învățare interactivă pentru copii prin jocuri educative fără ecrane!",
    images: ["/programarefaraecrane.png"], // Aceeași imagine și pentru Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="/og-image.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
