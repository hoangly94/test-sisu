const i18n = require("./next-i18next.config");

const nextConfig = {
  // target: "serverless",
  // reactStrictMode: true,
  swcMinify: true,
  i18n,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:any*',
  //       destination: '/',
  //     },
  //   ];
  // },
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
  },
}

module.exports = nextConfig