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
    <div :class="$style.icon">
      <slot name="before-icon"></slot>
    </div>
    <input
      :id="id"
      v-model="model"
      v-maska
      :name="name"
      :type="type"
      :placeholder="placeholder || 'Placeholder'"
      :disabled="!!disabled"
      :readonly="!!readonly"
      :autocomplete="autocomplete"
      :data-maska="dataMask"
      :data-maska-tokens="dataMaskaTokens"
      :data-maska-eager="dataMaskaEager"
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
    <div :class="$style.icon">
      <slot name="after-icon"></slot>
    </div>
  </label>
</template>

<script setup lang="ts">
import type { UIKitElementTheme } from '../types';
import { uiConfig } from '../ui.config';

defineSlots<{ 'before-icon': []; 'after-icon': [] }>();
defineEmits<{
  buttonClick: [];
  copy: [text: string];
}>();
const [model, modifiers] = defineModel<string | number>({
  get(value) {
    if (modifiers['force-number']) {
      console.log($vue.modelModifiers.forceNumberGet(value));
      return $vue.modelModifiers.forceNumberGet(value);
    } else {
      return value;
    }
  }
});
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

  dataMask?: string;
  dataMaskaTokens?: string;
  dataMaskaEager?: boolean;
}>();

const inputTheme = computed(
  () => props.theme || uiConfig?.getTheme?.().value || 'light'
);

function isNumeric(str: string) {
  return !isNaN(parseFloat(str.trim()));
}
</script>

<style lang="scss" module src="./Input.module.scss"></style>
