import type { Metadata } from "next";
import { ThemeProvider } from "@kadoui/react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KadoUI Documentation",
    template: "%s | KadoUI Docs",
  },
  description:
    "Complete documentation for @kadoui/react and @kadoui/tailwindcss — primitives, utilities, theming, and customization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
