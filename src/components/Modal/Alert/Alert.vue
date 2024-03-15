<template>
  <UIModal :visible="visible" @hide="$emit('hide')">
    <div :class="$style.modal">
      <ModalTitle center>
        {{ title || 'Уведомление' }}
      </ModalTitle>
      <div :class="$style.body">
        <span
          v-for="text in body"
          :key="text.content"
          :data-type="text.type"
        >
          {{ text.content }}&nbsp;
        </span>
      </div>
      <div :class="$style.buttons">
        <UIButton fill type="stroked" @click="submit">
          {{ submitTitle || 'Ок' }}
        </UIButton>
        <NuxtLink
          v-if="link?.name && link?.href"
          :class="$style.link"
          :to="localePath(link.href)"
          target="_blank"
        >
          <UIButton>
            {{ link.name }}
          </UIButton>
        </NuxtLink>
      </div>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
const emit = defineEmits<{ hide: [] }>();
defineProps<{
  visible?: boolean;
  title?: string;
  submitTitle?: string;
  body?: {
    content: string;
    type?: 'default' | 'red' | 'bold';
  }[];
  link?: { name: string; href: string };
}>();

const localePath = useLocalePath();

function submit() {
  emit('hide');
}
</script>

<style lang="scss" src="./Alert.module.scss" module></style>
