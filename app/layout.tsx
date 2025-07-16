import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"; // adjust path if needed

export const metadata: Metadata = {
  title: "QuickConvert - Free Online Image Converter | JPG, PNG, WebP, GIF, BMP",
  description: "Free online image converter. Upload and convert images between JPG, PNG, WebP, GIF, BMP formats instantly. No registration required. Fast, secure, and privacy-focused image conversion tool.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist&family=Geist+Mono&display=swap"
          rel="stylesheet"
        />
        <meta name="keywords" content="image converter, online image converter, free image converter, JPG to PNG, PNG to JPG, WebP converter, GIF converter, BMP converter, image format converter" />
        <meta name="author" content="QuickConvert" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="QuickConvert - Free Online Image Converter" />
        <meta property="og:description" content="Upload and convert images between JPG, PNG, WebP, GIF, BMP formats instantly. No registration required." />
        <meta property="og:site_name" content="QuickConvert" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="application-name" content="QuickConvert" />
        <meta name="apple-mobile-web-app-title" content="QuickConvert" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
