import type { Metadata } from "next";
import { Noto_Sans_KR, Geist, Geist_Mono, Pacifico } from "next/font/google"; // Noto_Sans_KR 추가
import "./globals.css";

// 1. 한글 폰트 설정 (고딕 스타일)
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 보통, 중간, 굵은 굵기 사용
  variable: "--font-noto-sans",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind Study - 심리 상담 & 마음 성장 공간",
  description: "심리 분석, 치유, 자기성장 자료를 제공하는 온라인 플랫폼",
  // ... (기존 메타데이터 유지)
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta
          name="naver-site-verification"
          content="451c2d7a8f96e15aec129b80d89b645ebe51b525"
        />
      </head>
      <body
        // 폰트 변수를 body에 추가하여 사이트 전체에 적용
        className={`${notoSansKr.variable} ${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
