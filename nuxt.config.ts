// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/icon', '@nuxt/eslint'],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apply-touch-icon.png' },
        { rel: 'manifest', href: './site.webmanifest' },
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
})
