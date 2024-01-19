<template>
  <label
    :id="id"
    :name="name"
    :class="[
      $style.label,
      $style[inputTheme],
      wrong && $style.wrong,
      white && $style.white,
      gray && $style.gray,
      fill && $style.fill,
      type === 'password' && $style.password
    ]"
  >
    <input
      :id="id"
      :name="name"
      :value="value || ''"
      :type="type === 'password'
        ? (isHidden ? type : 'text')
        : type || 'text'"
      :placeholder="placeholder || 'Placeholder'"
      :disabled="!!disabled"
      :readonly="!!readonly"
      :autocomplete="autocomplete"
    />
    <SVGClosedEye
      v-if="isHidden && isPassword"
      @click="toggleEye"
      :class="$style.icon"
    />
    <SVGEye
      v-else-if="isPassword"
      @click="toggleEye"
      :class="$style.icon"
    />
    <SVGCopy v-if="copied" @click="copyText" :class="$style.icon" />
    <button
      @click="$emit('buttonClick')"
      v-show="button"
      :class="$style.btn"
    >
      {{ button }}
    </button>
  </label>
</template>

<script setup lang="ts">
  import type { UIKitElementTheme } from '../types';
  import { uiConfig } from '../ui.config';

  const emit = defineEmits<{
    buttonClick: []
    copy: [text: string]
  }>()
  const props = defineProps<{
    id?: string
    name?: string
    autocomplete?: string
    placeholder?: string
    value?: string
    type?: HTMLInputElement["type"]
    theme?: UIKitElementTheme
    fill?: boolean
    white?: boolean
    gray?: boolean
    wrong?: boolean
    button?: string
    disabled?: boolean
    readonly?: boolean
    copied?: boolean
  }>()

  const isPassword = computed(() => props.type === 'password')
  const isHidden = ref(true)
  const value = computed(() => props.value)

  const inputTheme = computed(() => (
    props.theme
    || uiConfig?.getTheme?.().value
    || 'light'
  ))
  
  function copyText() {
    const value = props.value

    if (value) {
      navigator.clipboard.writeText(value)
      emit('copy', value)
    }
  }

  function toggleEye() {
    isHidden.value = !isHidden.value
  }
</script>

<style lang="scss" module src="./Input.module.scss"></style>
