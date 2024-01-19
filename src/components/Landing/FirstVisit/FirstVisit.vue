<template>
  <div :class="$style.container">
    <div :class="$style.texts">
      <div :class="$style.title">
        Привет!
      </div>
      <div :class="$style.subtitle">
        Мы очень рады нашей первой встречи, нажмите кнопку ниже чтобы начать использовать <span data-accent>NoMore4Shop</span> :)
      </div>
    </div>
    <div :class="$style.end">
      <UIButton uppercase fill>
        Продолжить
      </UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style lang="scss" src="./FirstVisit.module.scss" module></style>