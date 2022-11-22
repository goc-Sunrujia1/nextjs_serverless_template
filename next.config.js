/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // ----缩减项目体积---------
  // nextjs官网：https://nextjs.org/docs/advanced-features/output-file-tracing
  output:'standalone',
  // next12.0.8版本需要变成才会打包至standalone
  // experimental: {
  //   outputStandalone: true
  // },
  // ----从cdn读取资源---------
  // nextjs官网：https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
  assetPrefix: process.env.cosBuketUrl
}

module.exports = nextConfig