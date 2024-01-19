<template>
  <div :class="$style.head">
    <div :class="$style.user">
      <div :class="$style.avatar">
        <img
          :src="data.author.avatarURL"
          alt="Avatar"
        />
      </div>
      <div :class="$style.username">
        {{ data.author.username }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Product } from '@/ts/market'
  
  defineProps<{
    data: Product
  }>()
</script>

<style lang="scss" src="./Head.module.scss" module></style>