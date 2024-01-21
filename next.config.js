/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.alchemyapi.io",
      "assets.coingecko.com",
      "nft-cdn.alchemy.com",
      "d257b89266utxb.cloudfront.net",
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    config.externals.push("pino-pretty", "lokijs", "encoding")
    return config
  },
}

module.exports = nextConfig
