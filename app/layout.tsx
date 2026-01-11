import "./globals.css";
import { Shrikhand } from "next/font/google";

const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
});

export const metadata = {
  title: "SUNGWOO | Web Publisher",
  description: "Advanced Web Publisher portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${shrikhand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
