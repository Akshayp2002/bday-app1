import { Poppins, Inter, Caveat, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://happy-birthday-viba.vercel.app";
const ogImage = `${siteUrl}/og-preview.png`;

export const metadata = {
  title: "Happy Birthday Viba! 🎀",
  description: "A cute birthday wishing app made with love. Tap to open your surprise ✨",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Happy Birthday Viba! 🎀",
    description: "A little wish made with love. Tap to open your surprise ✨",
    url: siteUrl,
    siteName: "Happy Birthday Viba",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Happy Birthday Viba preview card",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Birthday Viba! 🎀",
    description: "A little wish made with love. Tap to open your surprise ✨",
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${caveat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
