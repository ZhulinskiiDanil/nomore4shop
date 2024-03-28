<template>
  <div :class="$style.head">
    <div :class="$style.title">Ваши товары</div>
    <NuxtLink href="/market/publish">
      <UIButton uppercase>Добавить</UIButton>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style
  lang="scss"
  src="./ProductsHead.module.scss"
  module
></style>
