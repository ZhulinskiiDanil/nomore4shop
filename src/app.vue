<template>
  <Head>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <NuxtLayout>
    <div :class="`container ${theme}`">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/all'
  import { useTheme } from './hooks/useTheme'
  import { useProfile } from './hooks/useProfile'

  const { theme } = useTheme()
  await useProfile({ prefetch: true })

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // ! Не трогать (информация о проделаной работе с указаной датой)
    (window as any).Cx0L7RgtCwIDA = '0J/RgNC+0LTQtdC70LDQvdCw0Y8g0YDQsNCx0L7RgtCwIDAyLjAxLjIwMjM6CgoxLiDQk9C70LDQstC90LDRjyDRgdGC0YDQsNC90LjRhtCwCjIuINCQ0LLRgtC+0YDQuNC30LDRhtC40Y8gKNCS0YXQvtC0LCDQoNC10LPQuNGB0YLRgNCw0YbQuNGPLCDQodCx0YDQvtGBINC/0LDRgNC+0LvRjywg0KPRgdC/0LXRiNC90LDRjyDRgdGC0YDQsNC90LjRhtCwINGB0LHRgNC+0YHQsCDQv9Cw0YDQvtC70Y8pCjMuINCf0YDQvtGE0LjQu9GMCjQuINCd0LDRgdGC0YDQvtC50LrQuCDQv9GA0L7RhNC40LvRjwo1LiDQkNC00LDQv9GC0LjQstGLINCy0YvRiNC1INGD0L/QvtC80Y/QvdGD0YLRi9GFINGB0YLRgNCw0L3QuNGGCjYuIDNEINCd0L7QtiDRgSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtdC8IG9yYml0IGNvbnRyb2xsINC90LAg0LPQu9Cw0LLQvdC+0Lkg0YHRgtGA0LDQvdC40YbQtQoK0JrQvtC90YLQsNC60YLRizoKVGVsZWdyYW06IGh0dHBzOi8vdC5tZS9aaHVsaW5za3lEYW5pbApEaXNjb3JkOiBAZGFuaWVsd2ViZGV2'
  })
</script>

<style lang="scss" scope>
  @import url('/styles/globals.scss');

  .container {
    z-index: 0;
    position: relative;
  }
</style>