<template>
  <textarea
    v-model="model"
    :class="[$style.textarea, $style.default]"
  ></textarea>
</template>

<script setup lang="ts">
const model = defineModel<string>();
defineEmits<{
  buttonClick: [];
  copy: [text: string];
}>();
</script>

<style lang="scss" module src="./Textarea.module.scss"></style>
