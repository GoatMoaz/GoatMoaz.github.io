// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@vueuse/motion/nuxt"],
  nitro: {
    prerender: {
      // Workaround for "Error: [404] Page not found: /manifest.json"
      failOnError: false,
    },
  },
})