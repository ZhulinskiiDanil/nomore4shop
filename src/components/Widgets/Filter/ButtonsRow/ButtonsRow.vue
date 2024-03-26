<template>
  <section :class="$style.buttons">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<style lang="scss" src="./ButtonsRow.module.scss" module></style>
