// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google"; // Geist 대신 Inter를 사용합니다.
import "./globals.css";

// 필기체 폰트 (기존 유지)
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

// Geist Sans/Mono 대신 사용할 표준 Sans-serif 폰트
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind Study - 심리 상담 & 마음 성장 공간",
  description: "심리 분석, 치유, 자기성 성장 자료를 제공하는 온라인 플랫폼",
  alternates: {
    canonical: "https://mind-study.co.kr",
  },
  openGraph: {
    title: "Mind Study - 심리 상담 & 마음 성장 공간",
    description: "심리 분석, 치유, 자기성장 자료를 제공하는 온라인 플랫폼",
    url: "https://mind-study.co.kr",
    siteName: "Mind Study",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    title: "Mind Study - 심리 상담 & 마음 성장 공간",
    description: "심리 분석, 치유, 자기계발 자료를 제공하는 온라인 플랫폼",
  },
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
      {/* 폰트 변수를 inter와 pacifico로 교체했습니다. */}
      <body
        className={`${inter.variable} ${pacifico.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
