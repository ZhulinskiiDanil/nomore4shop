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
          $utils.date.getPastRelativeDate(
            data.createdAt,
            'years',
            {
              locale: 'ru'
            }
          )
        }}
      </div>
      <div :class="$style.price">
        СТОИМОСТЬ
        <hr />
        {{ data.price }} USD
      </div>
      <div :class="$style.convertedPrice">
        {{ formatCurrency(data.price) }} ~
        {{ formatCurrency(data.price * 39, 'UAH') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/ts/market';

defineProps<{ data: Product }>();

function formatCurrency(n: number, currency: string = 'USD') {
  return n.toLocaleString('en', {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol'
  });
}
</script>

<style lang="scss" src="./Product.module.scss" module></style>
