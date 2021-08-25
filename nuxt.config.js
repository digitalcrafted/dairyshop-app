export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Welcome to the Dairy Shop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'a display using Vue.js to hit our API and display the data' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/pagination.js', mode: 'client' },
    { src: '~plugins/vue2-filters.js', mode: 'client' },
    { src: '~/plugins/amplify.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://trayvonnorthern.com/Edgewood-API/public/api',
    browserBaseURL: 'https://trayvonnorthern.com/Edgewood-API/public/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCss: true,
    loaders: {
      cssModules: {
        localIdentName: '[local]_[hash:base64:5]'
      }
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|scss|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    hotMiddleware: {
      client: {
        overlay: false
      }
    }
  }
}
