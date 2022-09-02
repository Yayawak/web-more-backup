const path = require('path')
const { i18n } = require('./next-i18next.config')

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
  i18n,
  images: {
    domains: ['www.science.kmitl.ac.th'],
  },
}

module.exports = nextConfig
