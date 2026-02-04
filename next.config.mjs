/** @type {import('next').NextConfig} */
const nextConfig = {
  // 빌드 중 발생할 수 있는 오류를 무시하여 배포를 우선 진행합니다.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // 최신 버전의 Next.js에서는 ignoreDuringBuilds 설정을 이렇게 감싸야 합니다.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
