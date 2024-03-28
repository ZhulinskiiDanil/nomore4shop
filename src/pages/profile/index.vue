<template>
  <div v-if="profile" :class="$style.container">
    <ProfileHead
      title="Ваш профиль"
      :avatar="avatar"
      :username="`@${profile.username}`"
      :description="
        profile.description || 'Описание пользователя'
      "
    />
    <ProfileBalance />
    <ProfileSocials />
    <ProfileProductsHead />
    <div v-if="productsResponse" :class="$style.list">
      <WidgetsProduct
        v-for="product of productsResponse.products"
        :key="product.id"
        :data="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { profile } = useProfile();
const { data: productsResponse } = useAsyncData(
  'products',
  async () =>
    await $api.profile.getProducts({ offset: 30, page: 1 }),
  {
    server: false
  }
);
const avatar = useAvatar(profile);
</script>

<style lang="scss" src="./index.module.scss" module></style>
