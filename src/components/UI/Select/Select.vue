<template>
  <div
    :class="[
      $style.select,
      isActive && options?.length && $style.active
    ]"
  >
    <div :class="$style.selected" @click="toggle">
      <span>
        {{ activeOption?.text || 'Ошибка' }}
      </span>
      <ArrowRight :class="$style.arrow" />
    </div>
    <div :class="$style.list">
      <div
        v-for="option in options"
        :key="option.value"
        :class="[
          $style.option,
          activeOption.value === option.value && $style.active
        ]"
        @click.stop="setOption(option)"
      >
        {{ option.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type SelectOption = {
  value: string;
  text: string;
};

const emit = defineEmits(['change']);
const props = defineProps<{ options?: SelectOption[] }>();
const isActive = ref(false);
const options = ref(props?.options || []);
const activeOption = ref(options.value[0]);

watch(props, () => {
  options.value = props.options || [];
});

function hide() {
  setTimeout(() => {
    isActive.value = false;
  }, 100);
}

function toggle() {
  isActive.value = !isActive.value;
  document.addEventListener('mousedown', hide, { once: true });
  document.addEventListener('touchstart', hide, { once: true });
}

function setOption(option: SelectOption) {
  activeOption.value = option;
  emit('change', option);
}
</script>

<style lang="scss" src="./Select.module.scss" module></style>
