<template>
  <div :class="$style.title">
    <p :class="$style.text" :data-center="!!center">
      <slot></slot>
    </p>
    <div :class="$style.cross" @click="$emit('hide')">
      <svg
        :class="$style.icon"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z"
          fill="#B8B8B8"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{ hide: [] }>();
defineProps<{ center?: boolean }>();
</script>

<style lang="scss" src="./Title.module.scss" module></style>
