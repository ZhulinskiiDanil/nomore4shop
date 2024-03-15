<template>
  <label
    :class="[
      $style.switcher,
      $style[theme],
      palindrome && $style.palindrome
    ]"
  >
    <input
      type="checkbox"
      :disabled="!!disabled"
      :checked="!!checked"
      hidden
      @change="test"
    />
    <div :class="$style.circle">
      <slot name="icon"></slot>
    </div>
  </label>
</template>

<script setup lang="ts">
import type { UIKitElementTheme } from '../types';
import { uiConfig } from '../ui.config';

defineSlots<{ icon(props: any): any }>();
const emit = defineEmits(['change']);
const props = defineProps<{
  theme?: UIKitElementTheme;
  disabled?: boolean;
  checked?: boolean;
  palindrome?: boolean;
}>();

const theme = ref(
  props.theme || uiConfig.getTheme?.() || 'light'
);

function test(e: Event) {
  const target = e.target as HTMLInputElement | null;

  emit('change', !!target?.checked);
}
</script>

<style lang="scss" src="./Switcher.module.scss" module></style>
