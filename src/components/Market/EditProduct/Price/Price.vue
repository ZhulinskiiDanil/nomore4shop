<template>
  <MarketEditProductRow :class="$style.price" title="Цена (USD)">
    <UIInputWrapper :error="error">
      <UIInput
        v-model="model"
        :data-mask="
          parseFloat((model || '').match(/\d/g)?.join('') || '')
            .toLocaleString('ru')
            .replace(/\d/g, '#')
            .slice(-7)
        "
        placeholder="300$"
        fill
      />
    </UIInputWrapper>
    <div :class="$style.footer">
      <div :class="$style.converted">0 USD ~ 0 UAH</div>
      <div :class="$style.rate">Курс: 1 USD ~ 40.53 UAH</div>
    </div>
  </MarketEditProductRow>
</template>

<script setup lang="ts">
const model = defineModel<string>();
defineProps<{ error?: string | null }>();
</script>

<style lang="scss" src="./Price.module.scss" module></style>
