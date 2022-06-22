const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./variables.scss";`,
  },
  i18n: {
    locales: ['th-TH', 'en-US'],
    defaultLocale: 'th-TH'
  },
};

module.exports = nextConfig;
