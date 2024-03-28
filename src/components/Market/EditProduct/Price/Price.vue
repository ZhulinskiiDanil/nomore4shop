<template>
  <MarketEditProductRow :class="$style.price" title="Цена (USD)">
    <UIInputWrapper :error="error">
      <UIInput v-model="model" placeholder="300$" fill />
    </UIInputWrapper>
    <div :class="$style.footer">
      <div :class="$style.converted">0 USD ~ 0 UAH</div>
      <div :class="$style.rate">Курс: 1 USD ~ 40.53 UAH</div>
    </div>
  </MarketEditProductRow>
</template>

<script setup lang="ts">
const model = defineModel<string | number>({
  get(value) {
    const numbers = value.toString().match(/\d/g);
    const parsedValue = parseFloat(
      numbers ? numbers.join('') : ''
    );

    if (isNaN(parsedValue) || !parsedValue) {
      return '';
    } else {
      return parsedValue.toLocaleString('ru', {});
    }
  }
});
defineProps<{ error?: string | null }>();
</script>

<style lang="scss" src="./Price.module.scss" module></style>
