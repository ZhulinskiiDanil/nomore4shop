<template>
  <div :class="$style.container">
    <ProfileHead
      avatar="https://friendfunction.ru/upload/iblock/070/z6y5xr0kqlyb7td44tflvjh270yl009g/shapka_carhartt_wip_blizzard_beanie_ash_heather_1.jpg"
      title="Ваш профиль"
      username="@nomer4krab"
      description="Описание пользователя"
    />
    <ProfileBalance />
    <ProfileSocials />
    <ProfileProductsHead />
    <div :class="$style.list">
      <MarketProduct
        v-for="product of products"
        :key="product.id"
        :data="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductState } from '@/ts/market';
import type { Product } from '@/ts/market';

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
