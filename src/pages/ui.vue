<template>
  <div :class="$style.container">
    <UIButton>
      Test button
    </UIButton>
    <UIButton mini>
      Test button
    </UIButton>
    <UIButton type="stroked">
      Test button
    </UIButton>
    <UIButton mini type="stroked">
      Test button
    </UIButton>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'empty'
  })
</script>

<style lang="scss" module>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    max-width: 700px;
    margin: 0 auto;
    padding: 5px;
  }
</style>