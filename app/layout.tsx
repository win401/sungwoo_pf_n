import "./globals.css";
import { Shrikhand, Abhaya_Libre } from "next/font/google";
import localFont from "next/font/local";
import AOSInit from "@/components/AOSInit";

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
  title: "SUNGWOO | Frontend Developer",
  description:
    "React와 Next.js를 기반으로 서비스 UI, AI 기능, 데이터 대시보드를 구현하는 프론트엔드 개발자 이성우의 포트폴리오입니다.",
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
      <body>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
