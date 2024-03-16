<template>
  <MarketEditProductRow title="Заголовок">
    <UIInputWrapper :error="error">
      <UIInput v-model="model" placeholder="Заголовок" fill />
    </UIInputWrapper>
  </MarketEditProductRow>
</template>

<script setup lang="ts">
const model = defineModel<string>();
defineProps<{ error?: string | null }>();
</script>

<style lang="scss" src="./Title.module.scss" module></style>
