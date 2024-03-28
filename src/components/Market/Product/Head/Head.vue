<template>
  <div :class="$style.head">
    <div :class="$style.user">
      <div :class="$style.avatar">
        <img :src="avatar" alt="Avatar" />
      </div>
      <div :class="$style.username">
        {{ data.user?.username }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/ts/market';

const props = defineProps<{ data: Product }>();
const avatar = useAvatar(props.data.user);
</script>

<style lang="scss" src="./Head.module.scss" module></style>
