<template>
  <UIModal @hide="$emit('hide')" :visible="visible">
    <div :class="$style.modal">
      <ModalTitle center>
        {{ title || 'Подтвердить действие' }}
      </ModalTitle>
      <div :class="$style.body">
        <span 
          v-for="text in body"
          :data-type="text.type"
        >
          {{ text.content }}&nbsp;
        </span>
      </div>
      <div :class="$style.buttons">
        <UIButton fill type="transparent" @click="submit">
          {{ submitTitle || 'Да' }}
        </UIButton>
        <UIButton fill type="transparent" @click="cancel">
          {{ cancelTitle || 'Нет' }}
        </UIButton>
      </div>
    </div>
  </UIModal>
</template>

<script setup lang="ts">
  const emit = defineEmits<{ hide: [], submit: [], cancel: [] }>()
  const props = defineProps<{ 
    visible?: boolean,
    title?: string,
    cancelTitle?: string,
    submitTitle?: string,
    body?: { content: string, type?: 'default' | 'red' | 'bold' }[]
  }>()

  function submit() {
    emit('submit')
  }

  function cancel() {
    emit('cancel')
    emit('hide')
  }
</script>

<style lang="scss" src="./Submit.module.scss" module></style>