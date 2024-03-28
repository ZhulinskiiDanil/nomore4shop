<template>
  <MarketEditProductRow title="Доп. информация">
    <UIInputWrapper title="Размер" :error="sizeError">
      <UIInput v-model="size" fill placeholder="M" />
    </UIInputWrapper>
    <UIInputWrapper title="Состояние">
      <UITab fill>
        <UITabButton
          fill
          :active="productState === ProductState.USED"
          @click="productState = ProductState.USED"
        >
          Б/У
        </UITabButton>
        <UITabButton
          fill
          :active="productState === ProductState.NEW"
          @click="productState = ProductState.NEW"
        >
          НОВОЕ
        </UITabButton>
      </UITab>
    </UIInputWrapper>
    <UIInputWrapper fill title="Оценка состояния (1 - 10)">
      <div :class="$style.stars">
        <SVGStar
          v-for="(_, index) of 10"
          :key="index"
          :class="[$style.star, rate > index && $style.active]"
          @click="rate = index + 1"
        />
      </div>
    </UIInputWrapper>
  </MarketEditProductRow>
</template>

<script setup lang="ts">
import { ProductState } from '@/ts/market';

const size = defineModel<string>('size');
const productState = defineModel<ProductState>('productState', {
  default: ProductState.USED
});
const rate = defineModel<number>('rate', { default: 1 });
defineProps<{
  error?: string | null;
  sizeError?: string | null;
}>();
</script>

<style lang="scss" src="./OtherInfo.module.scss" module></style>
