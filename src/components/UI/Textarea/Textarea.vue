<template>
  <textarea
    ref="input"
    @input="changeValue"
    :class="[$style.textarea, $style[theme || 'light']]"
    :value="value || ''"
    :placeholder="placeholder || 'Placeholder'"
    :disabled="!!disabled"
    :readonly="!!readonly"
  ></textarea>
</template>

<script setup lang="ts">
  import type { UIKitElementTheme } from '../types';
  import { uiConfig } from '../ui.config';

  const emit = defineEmits(["change", "buttonClick"])
  const props = defineProps<{
    placeholder?: string
    value?: string
    theme?: UIKitElementTheme
    white?: boolean
    wrong?: boolean
    button?: string
    disabled?: boolean
    readonly?: boolean
  }>()

  const input = ref<HTMLInputElement | null>(null)
  const theme = ref(
    props.theme || uiConfig.getTheme?.() || 'light'
  )
  
  watch(props, () => {
    const inputElm = input.value

    if (inputElm) {
      inputElm.value = props.value || ''
    }
  })

  function changeValue(e: any) {
    emit("change", e.target.value)
  }
</script>

<style lang="scss" module src="./Textarea.module.scss"></style>
