<template>
  <div :class="$style.container">
    <MarketProductGallery
      :imageURLS="product.imageURLS"
    />
  </div>
</template>

<script setup lang="ts">
  import { ProductState } from '@/ts/market'
  import type { Product } from '@/ts/market'

  const product = ref<Product>({
    id: '1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
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
      avatarURL: 'https://friendfunction.ru/upload/iblock/070/z6y5xr0kqlyb7td44tflvjh270yl009g/shapka_carhartt_wip_blizzard_beanie_ash_heather_1.jpg',
      tgId: 123,
    }
  })
</script>

<style lang="scss" src="./index.module.scss" module></style>