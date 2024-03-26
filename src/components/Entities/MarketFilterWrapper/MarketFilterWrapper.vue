<template>
  <div :class="[$style.wrapper, visible && $style.visible]">
    <article :class="$style.filter" @click="visible = false">
      <div :class="$style.content" @click.stop>
        <slot></slot>
      </div>
    </article>
    <UIButton
      mini
      :class="[$style.button, scrolled && $style.hidden]"
      @click.stop="visible = true"
    >
      Фильтры
      <template #icon>
        <SVGFilter :class="$style.icon" />
      </template>
    </UIButton>
  </div>
</template>

<script setup lang="ts">
const visible = defineModel<boolean>('visible');
const scrolled = ref(false);

const setScrolledToFalse = $ld.throttle(() => {
  scrolled.value = false;
}, 300);

const setScrolledToFalseDebounced = $ld.debounce(
  setScrolledToFalse,
  100
);

function onScroll() {
  scrolled.value = true;
  setScrolledToFalseDebounced();
}

onMounted(() => {
  document.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
  document.removeEventListener('scroll', onScroll);
});
</script>

<style
  lang="scss"
  src="./MarketFilterWrapper.module.scss"
  module
></style>
