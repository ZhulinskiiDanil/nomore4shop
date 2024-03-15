<template>
  <div :class="$style.author">
    <div :class="$style.avatar">
      <img :src="data.author.avatarURL" alt="Avatar" />
    </div>
    <div :class="$style.username">
      {{ data.author.username }}
    </div>
    <div :class="$style.tools">
      <UIButton v-if="canSendMessage" mini> Написать </UIButton>
      <UIButton v-if="canEdit" mini> Редактировать </UIButton>
      <UIButton v-if="canDelete" mini> Удалить </UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/ts/market';

defineProps<{
  data: Product;
}>();

const canSendMessage = ref(false);
const canEdit = ref(true);
const canDelete = ref(true);
</script>

<style lang="scss" src="./Author.module.scss" module></style>
