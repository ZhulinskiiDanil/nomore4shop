<template>
  <label
    :id="id"
    :name="name"
    :class="[
      $style.label,
      $style[inputTheme],
      $style.default,
      wrong && $style.wrong,
      white && $style.white,
      gray && $style.gray,
      fill && $style.fill,
      type === 'password' && $style.password
    ]"
  >
    <input
      :id="id"
      v-model="model"
      :name="name"
      :type="type"
      :placeholder="placeholder || 'Placeholder'"
      :disabled="!!disabled"
      :readonly="!!readonly"
      :autocomplete="autocomplete"
      @keypress="
        (e: KeyboardEvent) => {
          if (numeric && !isNumeric(e.key)) {
            e.preventDefault();
          } else {
            return true;
          }
        }
      "
    />
  </label>
</template>

<script setup lang="ts">
import type { UIKitElementTheme } from '../types';
import { uiConfig } from '../ui.config';

defineEmits<{
  buttonClick: [];
  copy: [text: string];
}>();
const model = defineModel<string>();
const props = defineProps<{
  id?: string;
  name?: string;
  numeric?: boolean;
  autocomplete?: string;
  placeholder?: string;
  type?: HTMLInputElement['type'];
  theme?: UIKitElementTheme;
  fill?: boolean;
  white?: boolean;
  gray?: boolean;
  wrong?: boolean;
  button?: string;
  disabled?: boolean;
  readonly?: boolean;
  copied?: boolean;
}>();

const inputTheme = computed(
  () => props.theme || uiConfig?.getTheme?.().value || 'light'
);

function isNumeric(str: string) {
  return !isNaN(parseFloat(str.trim()));
}
</script>

<style lang="scss" module src="./Input.module.scss"></style>
