// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}, 
    },
  },
  modules: ['@nuxtjs/color-mode', '@nuxtjs/storybook'],
  colorMode: {
    classSuffix: '', // Add `dark` class to the root HTML element
    preference: 'system', // Follow system preference or fallback
    fallback: 'light', // Fallback to light mode
  },
  build: {
    transpile: ['@iconify/vue'],
  },
});