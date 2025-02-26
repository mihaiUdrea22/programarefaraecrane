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
    url: "https://www.programarefaraecrane.ro",
    siteName: "Programare Fără Ecrane",
    images: [
      {
        url: "https://www.programarefaraecrane.ro/images/programarefaraecrane.png",
        width: 1200,
        height: 630,
        alt: "Programare Fără Ecrane - Învățare Interactivă pentru Copii",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programare Fără Ecrane",
    description: "Învățare interactivă pentru copii prin jocuri educative fără ecrane!",
    images: ["https://www.programarefaraecrane.ro/images/programarefaraecrane.png"],
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
        {/* Meta tags Open Graph */}
        <meta property="og:title" content="Programare Fără Ecrane - Învățare Interactivă pentru Copii" />
        <meta property="og:description" content="Ajută-l pe copilul tău să-și dezvolte gândirea logică prin activități interactive și educative fără ecrane!" />
        <meta property="og:image" content="https://www.programarefaraecrane.ro/images/programarefaraecrane.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.programarefaraecrane.ro" />
        <meta property="og:type" content="website" />

        {/* Meta tags pentru Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Programare Fără Ecrane - Învățare Interactivă pentru Copii" />
        <meta name="twitter:description" content="Învățare interactivă pentru copii prin jocuri educative fără ecrane!" />
        <meta name="twitter:image" content="https://www.programarefaraecrane.ro/images/programarefaraecrane.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
