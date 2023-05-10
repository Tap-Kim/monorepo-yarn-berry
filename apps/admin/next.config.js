/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@wanted/ui'], // @wanted/web에서 javascript로 변환(transpile) 해줘야 한다. (Next 13.1 부터 내장 됨)
};

module.exports = nextConfig;
