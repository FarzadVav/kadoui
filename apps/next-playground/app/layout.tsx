import type { Metadata } from "next";
import {
  Affix,
  ThemeProvider,
} from "../../../packages/kadoui-react/dist/components-exports";

import "./globals.css";
import { ChevronUpIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "KadoUI React + TailwindCSS",
  description: "KadoUI React + TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}

          <Affix
            className="btn btn-fill btn-square bottom-3 right-3"
            viewportOffset={1}
          >
            <ChevronUpIcon />
          </Affix>
        </ThemeProvider>
      </body>
    </html>
  );
}
