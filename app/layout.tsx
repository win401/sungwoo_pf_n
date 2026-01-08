import "./globals.css";

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
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
