<template>
  <header v-if="profile" :class="$style.header">
    <NuxtLink to="/market">
      <div :class="$style.company">
        <div :class="$style.shadow"></div>
        <div :class="$style.name">NoMore4Shop</div>
        <span
          v-if="$route.path !== '/market'"
          :class="$style.subtitle"
        >
          / Перейти в каталог
        </span>
      </div>
    </NuxtLink>
    <NuxtLink to="/profile">
      <div :class="$style.user">
        <div :class="$style.balance">
          {{ formatBalance(profile.balance) }}
        </div>
        <div :class="$style.avatar">
          <img :src="profile.avatar || ''" alt="Avatar" />
        </div>
      </div>
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
const { profile } = useProfile();

const formatBalance = (n: number) => {
  return n.toLocaleString('ru', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencyDisplay: 'code'
  });
};
</script>

<style lang="scss" src="./Header.module.scss" module></style>
