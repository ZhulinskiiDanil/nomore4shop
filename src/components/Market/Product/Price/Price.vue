<template>
  <div :class="$style.price">
    <span>
      СТОИМОСТЬ
    </span>
    <span>
      {{ amount }} USDT
    </span>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    amount: number
  }>()
</script>

<style lang="scss" src="./Price.module.scss" module></style>