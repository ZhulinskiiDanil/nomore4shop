<template>
  <MarketEditProductRow title="Описание">
    <UIInputWrapper :error="error">
      <UIInput v-model="model" placeholder="Описание" fill />
    </UIInputWrapper>
  </MarketEditProductRow>
</template>

<script setup lang="ts">
const model = defineModel<string>();
defineProps<{ error?: string | null }>();
</script>

<style
  lang="scss"
  src="./Description.module.scss"
  module
></style>
