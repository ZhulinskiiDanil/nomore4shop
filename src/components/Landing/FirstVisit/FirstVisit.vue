<template>
  <div v-if="data" :class="$style.container">
    <div :class="$style.texts">
      <div :class="$style.title">Привет!</div>
      <div :class="$style.subtitle">
        Мы очень рады нашей первой встречи, нажмите кнопку ниже
        чтобы начать использовать
        <span data-accent>NoMore4Shop</span>
        :{{ ')' }}
      </div>
    </div>
    <div :class="$style.end">
      <NuxtLink href="/market">
        <UIButton :disabled="!data" uppercase fill>
          Начать использовать
        </UIButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = ref<null | string>(null);

onMounted(async () => {
  const { useWebApp } = await import('vue-tg');
  const { initData } = useWebApp();

  const payload = Object.fromEntries(
    new URLSearchParams(initData).entries()
  ) as unknown as { user?: string };
  const token = useCookie('token', {
    maxAge: 60 * 60 * 24
  });

  if (payload?.user) {
    token.value = initData;
  }

  data.value = initData;
});
</script>

<style lang="scss" src="./FirstVisit.module.scss" module></style>
