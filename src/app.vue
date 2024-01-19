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
  import { useTheme } from './hooks/useTheme'
  // import { useProfile } from './hooks/useProfile'

  const { theme } = useTheme()
  // await useProfile({ prefetch: true })
</script>

<style lang="scss" scope>
  @import url('/styles/globals.scss');

  .container {
    z-index: 0;
    position: relative;
  }
</style>