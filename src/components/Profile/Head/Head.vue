<template>
  <div :class="$style.head">
    <NuxtLink
      v-if="$route.path === '/profile'"
      to="/profile/settings"
      :class="$style.settings"
    >
      <UIButton uppercase mini>Настройки</UIButton>
    </NuxtLink>
    <div v-if="avatar" :class="$style.avatar">
      <img :src="avatar" alt="Avatar" />
    </div>
    <div v-if="title" :class="$style.title">
      {{ title }}
    </div>
    <div v-if="username" :class="$style.username">
      {{ username }}
    </div>
    <div v-if="description" :class="$style.description">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/ts';

defineProps<{
  title?: string;
  avatar?: User['avatar'];
  username?: User['username'];
  description?: User['description'];
}>();
</script>

<style lang="scss" src="./Head.module.scss" module></style>
