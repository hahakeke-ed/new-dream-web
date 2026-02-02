import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";

// 1. 폰트 설정: Geist 대신 안정적인 Inter 폰트 사용
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 2. 메타데이터 설정
export const metadata: Metadata = {
  title: "Mind Study - 심리 상담 & 마음 성장 공간",
  description: "한국심리학회 1급 수련감독자가 운영하는 프리미엄 심리상담 센터.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta
          name="naver-site-verification"
          content="451c2d7a8f96e15aec129b80d89b645ebe51b525"
        />
      </head>
      {/* 폰트 변수 적용 부분 수정됨: geist -> inter */}
      <body
        className={`${inter.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
