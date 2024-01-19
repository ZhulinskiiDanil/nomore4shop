import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  vue: {
    defineModel: true,
    propsDestructure: true,
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.VITE_API_URL,
      NOTSKIP_VK_BOT_URL: process.env.NOTSKIP_VK_BOT_URL,
      NOTSKIP_TG_BOT_URL: process.env.NOTSKIP_TG_BOT_URL
    }
  },
  srcDir: './src/',
  ssr: true,
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@request": path.resolve(__dirname, "./src/common/request.ts")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '/public/styles/_vars.scss';"
        }
      },
      modules: {
        generateScopedName: '[local]-v-[hash:base64:8]'
      }
    }
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'ru',
    langDir: './locales',
    lazy: true,
    locales: [
      {
        code: 'de',
        file: 'de-DE/index.ts',
        name: 'DE'
      },
      {
        code: 'en',
        file: 'en-EN/index.ts',
        name: 'EN'
      },
      {
        code: 'es',
        file: 'es-ES/index.ts',
        name: 'ES'
      },
      {
        code: 'fr',
        file: 'fr-FR/index.ts',
        name: 'FR'
      },
      {
        code: 'ru',
        file: 'ru-RU/index.ts',
        name: 'RU'
      },
      {
        code: 'uk',
        file: 'uk-UK/index.ts',
        name: 'UK'
      },
    ]
    /* module options */
  }
})