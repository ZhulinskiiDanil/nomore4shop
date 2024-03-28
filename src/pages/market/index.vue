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

const { profile } = useProfile();

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
const products = computed<Product[]>(() =>
  profile.value
    ? [
        {
          id: 1,
          userId: 6,
          sold: false,
          deleted: false,
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
          user: profile.value
        },
        {
          id: 2,
          userId: 6,
          sold: false,
          deleted: false,
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
          user: profile.value
        }
      ]
    : ([] as Product[])
);
</script>

<style lang="scss" src="./index.module.scss" module></style>
