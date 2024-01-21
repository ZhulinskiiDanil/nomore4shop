<template>
  <div :class="$style.container">
    <div :class="$style.current">
      <img
        :src="currImage"
        alt="Photo"
      />
    </div>
    <div :class="$style.end">
      <UIButton @click="prev" type="stroked" mini>
        &leftarrow;
      </UIButton>
      <div :class="$style.count">
        {{ currImageIndex + 1 }}/{{ imageURLS.length }}
      </div>
      <UIButton @click="next" type="stroked" mini>
        &rightarrow;
      </UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    imageURLS: string[]
  }>()

  const currImageIndex = ref(0)
  const currImage = computed(() => props.imageURLS[currImageIndex.value])

  function next() {
    if (currImageIndex.value < props.imageURLS.length - 1) {
      currImageIndex.value++
    } else {
      currImageIndex.value = 0
    }
  }

  function prev() {
    if (currImageIndex.value > 0) {
      currImageIndex.value--
    } else {
      currImageIndex.value = props.imageURLS.length - 1
    }
  }
</script>

<style lang="scss" src="./Gallery.module.scss" module></style>