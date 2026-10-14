import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legend RolePlay",
  description: "Official Legend RolePlay website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
