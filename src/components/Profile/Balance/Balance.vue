<template>
  <div v-if="profile" :class="$style.balance">
    <div :class="$style.value">
      {{ formatBalance(profile.balance) }}
    </div>
    <!-- <div :class="$style.buttons">
      <UIButton fill uppercase>
        Пополнить
      </UIButton>
      <UIButton fill uppercase>
        Вывести
      </UIButton>
    </div> -->
  </div>
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

<style lang="scss" src="./Balance.module.scss" module></style>
