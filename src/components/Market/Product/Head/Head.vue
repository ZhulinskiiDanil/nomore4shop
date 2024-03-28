<template>
  <div :class="$style.head">
    <div :class="$style.user">
      <div :class="$style.avatar">
        <img :src="avatar || ''" alt="Avatar" />
      </div>
      <div :class="$style.username">
        {{ data.author.username }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/ts/market';

const props = defineProps<{ data: Product }>();

const defaultAvatar = useDefaultAvatar();
const avatar = computed(
  () => props?.data?.author?.avatar || defaultAvatar
);
</script>

<style lang="scss" src="./Head.module.scss" module></style>
