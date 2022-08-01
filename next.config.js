const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',

})

module.exports = withNextra({
  // distDir: "dist/pc"
  assetPrefix: "/arex-front-end-docs", //加前缀
  basePath: "/arex-front-end-docs", //node
})
