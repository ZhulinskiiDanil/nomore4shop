<template>
  <div :class="$style.container">
    <div :class="$style.current">
      <img
        :src="imageURLS[0]"
        alt="Photo"
      />
    </div>
    .end
    <div :class="$style.count">
      1/{{ imageURLS.length }}
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    imageURLS: string[]
  }>()
</script>

<style lang="scss" src="./Gallery.module.scss" module></style>