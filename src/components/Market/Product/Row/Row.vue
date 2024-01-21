<template>
  <div :class="[$style.row, column && $style.column]">
    <div :class="$style.title">
      {{ title }}
    </div>
    <div :class="$style.value">
      {{ value }}
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    column?: boolean
    title: string
    value: string
  }>()
</script>

<style lang="scss" src="./Row.module.scss" module></style>