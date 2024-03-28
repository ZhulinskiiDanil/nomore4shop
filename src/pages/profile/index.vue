<template>
  <div v-if="profile" :class="$style.container">
    <ProfileHead
      title="Ваш профиль"
      :avatar="profile.avatar"
      :username="`@${profile.username}`"
      :description="
        profile.description || 'Описание пользователя'
      "
    />
    <ProfileBalance />
    <ProfileSocials />
    <ProfileProductsHead />
    <div :class="$style.list">
      <WidgetsProduct
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

const { profile } = useProfile();
const products = computed<Product[]>(() =>
  profile.value
    ? [
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
          author: profile.value
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
          author: profile.value
        }
      ]
    : []
);
</script>

<style lang="scss" src="./index.module.scss" module></style>
