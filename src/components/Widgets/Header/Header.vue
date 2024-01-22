<template>
  <header :class="$style.header">
    <NuxtLink to="/market">
      <div :class="$style.company">
        <div :class="$style.shadow"></div>
        <div :class="$style.name">
          NoMore4Shop
        </div>
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
          0 USDT
        </div>
        <div :class="$style.avatar">
          <img
            src="https://friendfunction.ru/upload/iblock/070/z6y5xr0kqlyb7td44tflvjh270yl009g/shapka_carhartt_wip_blizzard_beanie_ash_heather_1.jpg"
            alt="Avatar"
          />
        </div>
      </div>
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
  
</script>

<style lang="scss" src="./Header.module.scss" module></style>