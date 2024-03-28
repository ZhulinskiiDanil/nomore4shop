<template>
  <div v-if="product" :class="$style.container">
    <MarketProductGallery :image-u-r-l-s="product.imageURLS" />
    <MarketProductAuthor :data="product" />
    <div :class="$style.content">
      <MarketProductPrice :amount="product.price" />
      <div :class="$style.converted">
        {{ product.price }} USDT ~ 3754 UAH
      </div>
      <div :class="$style.info">
        Цена переведена в гривны по текущему курсу долара (при
        оплате может действовать другой курс, цена может меняться
        в зависимости от метода оплаты или же если в объялвлении
        присутствует торг)
      </div>
      <MarketProductRow
        column
        title="Описание"
        value="Hello wolrd"
      />
      <MarketProductRow title="Состояние:" value="Б/У" />
      <MarketProductRow title="Оценка состояния:" value="10" />
      <MarketProductRow title="Размер:" value="42 - 43" />
    </div>
    <div :class="$style.buttons">
      <UIButton uppercase fill>Написать продавцу</UIButton>
      <UIButton uppercase fill>Оплатить криптовалютой</UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductState } from '@/ts/market';
import type { Product } from '@/ts/market';

const { profile } = useProfile();

const product = computed<Product | null>(() =>
  profile.value
    ? {
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
      }
    : null
);
</script>

<style lang="scss" src="./index.module.scss" module></style>
