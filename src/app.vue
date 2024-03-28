<template>
  <Head>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <NuxtLayout>
    <div class="page">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://telegram.org/js/telegram-web-app.js',
      defer: true
    }
  ]
});

useProfile({ prefetch: true });
</script>

<style lang="scss" scope>
@import url('/styles/globals.scss');

.page {
  z-index: 0;
  position: relative;
}
</style>
