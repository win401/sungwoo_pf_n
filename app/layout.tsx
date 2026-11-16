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
    "반응형 UI와 관제 대시보드 구현 경험을 바탕으로 GitHub Actions와 GCP 배포 흐름까지 학습하는 프론트엔드 개발자 이성우의 포트폴리오입니다.",
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
