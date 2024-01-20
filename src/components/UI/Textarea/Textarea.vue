<template>
  <textarea
    v-model="model"
    :class="[
      $style.textarea,
      $style.default
    ]"
  ></textarea>
</template>

<script setup lang="ts">
  import type { UIKitElementTheme } from '../types';
  import { uiConfig } from '../ui.config';

  const model = defineModel()
  const emit = defineEmits<{
    buttonClick: []
    copy: [text: string]
  }>()

  const isHidden = ref(true)
  const textareaTheme = computed(() => (
    props.theme
    || uiConfig?.getTheme?.().value
    || 'light'
  ))
</script>

<style lang="scss" module src="./Textarea.module.scss"></style>
