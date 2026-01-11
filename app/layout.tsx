import "./globals.css";
import { Shrikhand, Abhaya_Libre } from "next/font/google";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
});

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-abhaya",
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
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${pretendard.variable} ${shrikhand.variable} ${abhaya.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
