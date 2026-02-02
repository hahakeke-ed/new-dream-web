/** @type {import('next').NextConfig} */
const nextConfig = {
  // 리액트의 엄격 모드를 켜서 잠재적인 문제를 감지합니다.
  reactStrictMode: true,
  
  // 외부 링크 이미지(Readdy AI 등)를 사용할 수 있도록 허용하는 설정입니다.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 모든 HTTPS 이미지 소스를 허용
      },
    ],
  },
};

export default nextConfig;
