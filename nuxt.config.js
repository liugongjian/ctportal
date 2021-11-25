export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '天翼云 - 视频网络',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      { src: 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './assets/css/element-variables.scss',
    './assets/css/base.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/svg-icon'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    "@nuxtjs/proxy"
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },

  router: {
    base: process.env.base || '/'
  },

  styleResources: {
    // your settings here
    scss: [
      './assets/css/_variables.scss',
      './assets/css/_mixins.scss'
    ]
  },

  axios: {
    proxy: true
  },

  proxy: {
    '/operation/v1': 'http://182.43.127.35:9190',
    '/v1/custom': 'https://vcn.ctyun.cn/v1/custom',
  },

  server: {
    port: 9190
  }
}
