import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "joke website",
  description: "joke website using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
