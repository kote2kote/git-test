// import path from 'path'
// import fs from 'fs'
module.exports = {
  mode: 'universal',
  env: {
    INITIAL_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://mystudy.kote2.tokyo'
        : 'https://192.168.1.19:4998'
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | サイト名` : 'サイト名'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { hid: 'og:url', property: 'og:url', content: '' },
      { hid: 'og:title', property: 'og:title', content: '' },
      { hid: 'og:type', property: 'og:type', content: '' },
      { hid: 'og:description', property: 'og:description', content: '' },
      { hid: 'og:image', property: 'og:image', content: '' },
      {
        hid: 'format-detection',
        name: 'format-detection',
        content: 'email=no,telephone=no,address=no'
      }
    ],
    script: [
      { src: '//use.fontawesome.com/releases/v5.3.1/js/all.js' },
      { src: '//polyfill.io/v3/polyfill.min.js' }
    ],
    link: [
      // {
      //   //テスト用
      //   rel: 'stylesheet',
      //   href: 'https://codepen.io/kote2kote/pen/PoqBvaa.css'
      // },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          '//fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap'
      }
    ]
  },
  // head: {
  //   title: process.env.npm_package_name || '',
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: process.env.npm_package_description || ''
  //     }
  //   ],
  //   script: [{ src: '//polyfill.io/v3/polyfill.min.js' }],
  //   link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  // },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/scss/main.scss',
    // 'element-ui/lib/theme-chalk/index.css'
    'element-ui/packages/theme-chalk/src/index.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/core-components' },
    { src: '~/plugins/element-ui.js' },
    { src: '~/plugins/prism' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    // '@nuxtjs/tailwindcss'
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // 'nuxt-purgecss',
    '@nuxtjs/style-resources', // common scss用
    '@nuxtjs/tailwindcss'
  ],
  styleResources: {
    // scss: ['~/assets/scss/main.scss']
  },
  purgeCSS: {
    // your settings here
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: { grid: true }
        }
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (!ctx.isDev) {
        config.output.publicPath = '_nuxt/' // generateしてローカルでも開ける設定
      }
      // if (ctx.dev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
      // config.module.rules = config.module.rules.map((rule) => {
      //   if (rule.loader === 'babel-loader') {
      //     rule.exclude = /node_modules/
      //   }
      //   return rule
      // })
    }
    // filenames: {
    //   app: () => '[name].js',
    //   chunk: () => '[name].js',
    //   css: () => '[name].js',
    //   img: () => '[path][name].[ext]',
    //   font: () => '[path][name].[ext]',
    //   video: () => '[path][name].[ext]'
    // }
  },
  router: {
    base: '/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue') // index.htmlを開くと「This page could not be found」になるので、index.vueを表示するように回避
      })
    }
  }
  // server: {
  //   port: 4998, // デフォルト: 3000
  //   host: '10.0.0.8', // デフォルト: localhost,
  //   timing: false,
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, '10.0.0.8-key.pem')),
  //     cert: fs.readFileSync(path.resolve(__dirname, '10.0.0.8.pem'))
  //   }
  // }
}
