const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
module.exports = {
  mode: 'universal',
  dev: (process.env.NODE_ENV !== 'production'),
  env: {
    baseUrl: process.env.NODE_ENV === 'production'? 'http://api.kaoshimao.com': (process.env.BASE_URL || 'http://develop.api.kaoshimao.com')
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '蚂蚁库' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    'assets/styles/element-variables.scss',
    'assets/styles/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    { src: '@/plugins/localStorage.js', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': { target: 'http://develop.api.kaoshimao.com', pathRewrite: {'^/api/': ''} }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    //   config.plugins.push(new HtmlWebpackPlugin({
    //  })),
    //   config.plugins.push(new SkeletonWebpackPlugin({
    //     webpackConfig: {
    //       entry: {
    //         app: path.join(__dirname, './Skeleton.js'),
    //       }
    //     },
    //     quiet: true
    //   }))
    }
  }
}
