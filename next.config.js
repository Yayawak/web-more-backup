const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
    @import "./variables.scss";
    @import "./typography.scss";
    @import "./palette.scss";
    `,
  },
  i18n: {
    locales: ['th', 'en'],
    defaultLocale: 'th',
    localeDetection: false,
  },
}

module.exports = nextConfig
