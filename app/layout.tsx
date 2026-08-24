import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glass UI – App Store",
  description: "VisionOS-style glassmorphism interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
