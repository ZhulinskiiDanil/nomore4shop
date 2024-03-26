<template>
  <section :class="$style.row">
    <p :class="$style.title">{{ title }}</p>
    <div :class="$style.content">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<style lang="scss" src="./Row.module.scss" module></style>
