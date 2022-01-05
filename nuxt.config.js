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
      { src: 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js' },
      // { type: 'text/javascript', src: 'https://webapi.amap.com/maps?v=1.4.15&key=f94d6b44b13dddb7d32c48302cd6f794&plugin=AMap.Scale,AMap.ToolBar,AMap.CustomLayer' },
      // { type: 'text/javascript', src: (process.env.base || '/')  + 'js/echarts.min.js' },
      // { type: 'text/javascript', src: (process.env.base || '/') + 'js/china.js' },
      // { type: 'text/javascript', src: '/vss-portal/' + 'js/echarts.min.js' },
      // { type: 'text/javascript', src: '/vss-portal/' + 'js/china.js' },
      // { type: 'text/javascript', src: 'https://lib.baomitu.com/echarts/4.8.0/echarts.min.js' },
      // { type: 'text/javascript', src: 'china.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    '@/plugins/svg-icon',
    // '@/plugins/iview', 
    '@/plugins/echarts'
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
    extend(config, { isServer }) {
      // Extend only webpack config for client-bundle
      if (isServer) {
        config.devtool = 'source-map'
      }
    }
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
