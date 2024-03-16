<template>
  <UIButton
    :style="{
      opacity: active ? 1 : 0.3
    }"
  >
    <slot></slot>
  </UIButton>
</template>

<script setup lang="ts">
defineProps<{
  active?: boolean;
}>();
</script>

<style lang="scss" module src="./TabButton.module.scss"></style>
