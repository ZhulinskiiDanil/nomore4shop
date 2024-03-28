<template>
  <div :class="$style.container">
    <ProfileHead title="Редактирование товара" />
    <main :class="$style.content">
      <MarketEditProductTitle
        v-model="v$.title.$model"
        :error="
          v$.title.$errors?.[0]?.$message || state.title.error
        "
      />
      <MarketEditProductDescription
        v-model="v$.description.$model"
        :error="
          v$.description.$errors?.[0]?.$message ||
          state.description.error
        "
      />
      <MarketEditProductPrice
        v-model="v$.price.$model"
        :error="
          v$.price.$errors?.[0]?.$message || state.price.error
        "
      />
      <MarketEditProductOtherInfo
        v-model:size="v$.size.$model"
        v-model:product-state="v$.productState.$model"
        v-model:rate="v$.rate.$model"
        :size-error="
          v$.size.$errors?.[0]?.$message || state.size.error
        "
      />
      <MarketEditProductImages v-model="images" />
      <div :class="$style.buttons">
        <UIButton fill uppercase @click="submit">
          Опубликовать
        </UIButton>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { withValidate } from './model/validate';

const { state, v$ } = withValidate();
const images = reactive<{ id: string; path: string }[]>([]);

async function submit() {
  const isValid = await v$.value.$validate();

  if (isValid) {
    const response = await $api.market.publishProduct({
      title: state.title.value,
      description: state.description.value,
      price: state.price.value,
      size: state.size.value,
      state: state.productState.value,
      stateGrade: state.rate.value
    });

    if ($api.utils.isSuccess(response)) {
      return await navigateTo(`/market/${response.result.id}`);
    }
  }
}
</script>

<style lang="scss" src="./index.module.scss" module></style>
