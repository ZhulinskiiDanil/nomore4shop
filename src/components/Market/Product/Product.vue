<template>
  <div :class="$style.product">
    <MarketProductHead :data="data" />
    <NuxtLink :to="`/market/${data.id}`">
      <MarketProductPhotos :data="data" />
    </NuxtLink>
    <div :class="$style.content">
      <div :class="$style.title">
        {{ data.title }}
      </div>
      <div :class="$style.description">
        {{ data.description }}
      </div>
      <div :class="$style.date">
        {{
          utils.date.getRelativeDate(data.createdAt, null, {
            locale: 'ru'
          })
        }}
      </div>
      <div :class="$style.price">
        СТОИМОСТЬ
        <hr />
        {{ data.price }} USD
      </div>
      <div :class="$style.convertedPrice">
        {{ data.price }} USD ~ 2000 UAH
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/ts/market';
import { utils } from '@/common/utils';

defineProps<{
  data: Product;
}>();
</script>

<style lang="scss" src="./Product.module.scss" module></style>
