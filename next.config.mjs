/** @type {import('next').NextConfig} */
const nextConfig = {
  // 빌드 중 ESLint 오류가 있어도 실패하지 않게
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 빌드 중 TS 오류가 있어도 실패하지 않게
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
