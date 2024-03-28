<template>
  <div :class="$style.author">
    <div :class="$style.avatar">
      <img :src="avatar" alt="Avatar" />
    </div>
    <div :class="$style.username">
      {{ data.user.username }}
    </div>
    <div :class="$style.tools">
      <UIButton v-if="canSendMessage" mini>Написать</UIButton>
      <NuxtLink :href="`/market/${data.id}/edit`">
        <UIButton v-if="canEdit" mini>Редактировать</UIButton>
      </NuxtLink>
      <UIButton v-if="canDelete" mini>Удалить</UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/ts/market';

const props = defineProps<{ data: Product }>();

const avatar = useAvatar(props.data.user);

const canSendMessage = ref(false);
const canEdit = ref(true);
const canDelete = ref(true);
</script>

<style lang="scss" src="./Author.module.scss" module></style>
