<template>
  <button
    ref="buttonRef"
    :class="[
      $style.button,
      $style[buttonTheme],
      $style[buttonVariant],
      red && $style.red,
      fill && $style.fill,
      hovered && $style.hovered,
      focused && $style.focused,
      pressed && $style.pressed,
      uppercase && $style.uppercase,
      mini && $style.mini
    ]"
    :disabled="disabled"
  >
    <div v-if="$slots.icon" :class="$style.icon">
      <slot name="icon"></slot>
    </div>
    <slot v-if="$slots.default"></slot>
  </button>
</template>

<script setup lang="ts">
import { uiConfig } from '../ui.config';
import type { UIKitElementTheme } from '../types';
import type { ButtonVariant } from './types';

defineSlots();
const props = defineProps<{
  variant?: ButtonVariant;
  theme?: UIKitElementTheme;
  mini?: boolean;
  uppercase?: boolean;
  withoutGlitchEffect?: boolean;
  disabled?: boolean;
  hovered?: boolean;
  focused?: boolean;
  pressed?: boolean;
  fill?: boolean;
  red?: boolean;
}>();

const buttonRef = ref<HTMLButtonElement | null>(null);
const buttonVariant = computed(() => props.variant || 'default');
const buttonTheme = computed(
  () => props.theme || uiConfig?.getTheme?.().value || 'light'
);
</script>

<style lang="scss" module src="./Button.module.scss"></style>
