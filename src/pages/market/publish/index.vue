<template>
  <div :class="$style.container">
    <ProfileHead title="Редактирование товара" />
    <main :class="$style.content">
      <MarketEditProductTitle
        v-model="v$.title.$model"
        :error="
          v$.title.$errors?.[0]?.$message || fields.title.error
        "
      />
      <MarketEditProductDescription
        v-model="v$.description.$model"
        :error="
          v$.description.$errors?.[0]?.$message ||
          fields.description.error
        "
      />
      <MarketEditProductPrice
        v-model="v$.price.$model"
        :error="
          v$.price.$errors?.[0]?.$message || fields.price.error
        "
      />
      <MarketEditProductOtherInfo
        v-model:size="v$.size.$model"
        v-model:product-state="productState"
        :size-error="
          v$.size.$errors?.[0]?.$message || fields.size.error
        "
        :rate="fields.rate.value"
        @rate="(rate) => (fields.rate.value = rate)"
      />
      <MarketEditProductImages v-model="images" />
      <div :class="$style.buttons">
        <UIButton fill uppercase>Опубликовать</UIButton>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ProductState } from '@/ts/market';
import { withValidate } from './model/validate';

const { fields, v$ } = withValidate();
const images = reactive<{ id: string; path: string }[]>([]);
const productState = ref(ProductState.NEW);
</script>

<style lang="scss" src="./index.module.scss" module></style>
