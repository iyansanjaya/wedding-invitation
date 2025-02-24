import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/template/theme-provider";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";

const go3v2 = localFont({
  src: "../../public/fonts/go3v2.ttf",
  display: "swap",
});

const chineseShangai = localFont({
  src: "../../public/fonts/ChineseShangaiDemoVersionRegular-p7Eyy.ttf",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weding Invitation",
  description:
    "Join us in celebrating our special day with a beautiful wedding invitation. Find all the details about the event, RSVP, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${go3v2.className} ${chineseShangai.className} antialiased font-[family-name:var(--font-geist-sans)] bg-[#830101]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
