<template>
  <NuxtLink :to="data.link">
    <div :class="$style.container">
      <div :class="$style.title">
        {{ data.title }}
      </div>
      <UIButton mini>
        {{ data.btnName }}
      </UIButton>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps<{
    type?: 'channel' | 'chat'
  }>()

  const config = useRuntimeConfig()

  const type = computed(() => (
    props?.type || 'channel'
  ))
  const data = computed(() => (
    {
      "channel": {
        title: "Наш телеграм канал",
        btnName: "Подписаться",
        link: config.public.VITE_TG_CHANNEL_LINK
      },
      "chat": {
        title: "Наш чат для общения",
        btnName: "Перейти в чат",
        link: config.public.VITE_TG_CHAT_LINK
      }
    }[type.value]
  ))
</script>

<style lang="scss" src="./Advertising.module.scss" module></style>