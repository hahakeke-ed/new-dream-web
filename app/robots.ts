import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // 원장님의 도메인 주소입니다.
  const baseUrl = "https://mind-study.co.kr";

  return {
    rules: [
      {
        userAgent: "*", // 모든 로봇에게
        allow: "/",     // 모든 페이지 접근을 허용합니다.
      },
    ],
    // 사이트맵(지도) 위치를 알려줍니다.
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
