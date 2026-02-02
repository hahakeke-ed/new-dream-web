import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

// 1. 폰트 설정 (구글 폰트 자동 최적화)
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

// 2. 메타데이터 설정 (검색엔진 및 SNS 공유 시 보여질 내용)
export const metadata: Metadata = {
  title: "Mind Study - 심리 상담 & 마음 성장 공간",
  description: "한국심리학회 1급 수련감독자가 운영하는 프리미엄 심리상담 센터. 성찰, 치유, 자기성장을 위한 전문 공간.",
  alternates: {
    canonical: "https://mind-study.co.kr",
  },
  openGraph: {
    title: "Mind Study - 심리 상담 & 마음 성장 공간",
    description: "전문가의 전문가, 수련감독자가 직접 진행하는 심층 심리상담.",
    url: "https://mind-study.co.kr",
    siteName: "Mind Study",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    title: "Mind Study - 프리미엄 심리 상담",
    description: "전문적이고 프라이빗한 심리 치유 공간",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 네이버 사이트 소유권 확인 태그 (기존 코드 유지) */}
        <meta
          name="naver-site-verification"
          content="451c2d7a8f96e15aec129b80d89b645ebe51b525"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {/* 모든 페이지의 내용은 이 children 안으로 들어갑니다 */}
        {children}
      </body>
    </html>
  );
}
