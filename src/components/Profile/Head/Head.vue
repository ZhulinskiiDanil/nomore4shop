<template>
  <div :class="$style.head">
    <div :class="$style.avatar">
      <img
        src="https://friendfunction.ru/upload/iblock/070/z6y5xr0kqlyb7td44tflvjh270yl009g/shapka_carhartt_wip_blizzard_beanie_ash_heather_1.jpg"
        alt="Avatar"
      />
    </div>
    <div :class="$style.title">
      Ваш профиль
    </div>
    <div :class="$style.username">
      @nomer4krab
    </div>
    <div :class="$style.description">
      Описание пользователя
    </div>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style lang="scss" src="./Head.module.scss" module></style>