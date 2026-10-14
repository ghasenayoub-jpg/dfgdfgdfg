
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legend RolePlay",
  description: "Welcome to Legend RolePlay",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
