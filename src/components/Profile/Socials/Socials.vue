<template>
  <div v-if="profile" :class="$style.socials">
    <div :class="$style.cell">
      <div :class="$style.name">TELEGRAM</div>
      <div :class="$style.value">{{ profile.username }}</div>
    </div>
    <div :class="$style.cell">
      <div :class="$style.name">INSTAGRAM</div>
      <div :class="$style.value">
        {{ profile.instagram || 'Не указан' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { profile } = useProfile();
</script>

<style lang="scss" src="./Socials.module.scss" module></style>
