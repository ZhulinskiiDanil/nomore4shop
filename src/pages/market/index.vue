<template>
  <div>
    <div :class="$style.products">
      <div
        v-for="(product, index) of products"
        :key="product.id"
      >
        <MarketProductAdvertising
          v-if="index % 3 === 0"
          type="channel"
        />
        <WidgetsProduct :data="product" />
      </div>
    </div>
    <EntitiesMarketFilterWrapper v-model:visible="filterVisible">
      <WidgetsFilter
        v-model="filter"
        v-model:visible="filterVisible"
        @submit="console.log('Submit filter.')"
      />
    </EntitiesMarketFilterWrapper>
  </div>
</template>

<script setup lang="ts">
import { ProductState } from '@/ts/market';
import type { FilterData, Product } from '@/ts/market';

const filterVisible = ref(false);
const filter = reactive<FilterData>({
  search: '',
  state: ProductState.USED,
  stateGrade: 1,
  price: {
    min: 0,
    max: 0
  }
});
const products = ref<Product[]>([
  {
    id: '1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: new Date().toISOString(),
    title: 'Test title',
    description: 'Test description',
    state: ProductState.NEW,
    stateGrade: 1,
    size: 'M',
    price: 100,
    imageURLS: [
      'https://friendfunction.ru/upload/iblock/070/z6y5xr0kqlyb7td44tflvjh270yl009g/shapka_carhartt_wip_blizzard_beanie_ash_heather_1.jpg',
      'https://friendfunction.ru/upload/iblock/070/z6y5xr0kqlyb7td44tflvjh270yl009g/shapka_carhartt_wip_blizzard_beanie_ash_heather_1.jpg',
      'https://friendfunction.ru/upload/iblock/070/z6y5xr0kqlyb7td44tflvjh270yl009g/shapka_carhartt_wip_blizzard_beanie_ash_heather_1.jpg'
    ],
    author: {
      id: '123',
      username: 'TestUser123',
      avatarURL:
        'https://friendfunction.ru/upload/iblock/070/z6y5xr0kqlyb7td44tflvjh270yl009g/shapka_carhartt_wip_blizzard_beanie_ash_heather_1.jpg',
      tgId: 123
    }
  },
  {
    id: '2',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: new Date().toISOString(),
    title: 'Test title',
    description: 'Test description',
    state: ProductState.NEW,
    stateGrade: 1,
    size: 'M',
    price: 100,
    imageURLS: [
      'https://friendfunction.ru/upload/iblock/070/z6y5xr0kqlyb7td44tflvjh270yl009g/shapka_carhartt_wip_blizzard_beanie_ash_heather_1.jpg',
      'https://friendfunction.ru/upload/iblock/070/z6y5xr0kqlyb7td44tflvjh270yl009g/shapka_carhartt_wip_blizzard_beanie_ash_heather_1.jpg',
      'https://friendfunction.ru/upload/iblock/070/z6y5xr0kqlyb7td44tflvjh270yl009g/shapka_carhartt_wip_blizzard_beanie_ash_heather_1.jpg'
    ],
    author: {
      id: '123',
      username: 'TestUser123',
      avatarURL:
        'https://friendfunction.ru/upload/iblock/070/z6y5xr0kqlyb7td44tflvjh270yl009g/shapka_carhartt_wip_blizzard_beanie_ash_heather_1.jpg',
      tgId: 123
    }
  }
]);
</script>

<style lang="scss" src="./index.module.scss" module></style>
