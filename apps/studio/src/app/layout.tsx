import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@xyflow/react/dist/style.css";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cognidesk Studio",
  description: "Operator control plane for Cognidesk SDK targets.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
