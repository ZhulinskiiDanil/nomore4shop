<template>
  <div :class="$style.photos">
    <div :class="$style.current">
      <img :src="data.imageURLS[0]" alt="Photo" />
    </div>
    <div :class="$style.count">
      1/{{ data.imageURLS.length }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/ts/market';

defineProps<{
  data: Product;
}>();
</script>

<style lang="scss" src="./Photos.module.scss" module></style>
