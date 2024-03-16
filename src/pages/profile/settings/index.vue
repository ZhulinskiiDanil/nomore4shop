<template>
  <div :class="$style.container">
    <ProfileHead
      title="Настройки профиля"
      username="@nomore4krab"
    />
    <div :class="$style.list">
      <div :class="$style.cell">
        <div :class="$style.title">Описание профиля</div>
        <UITextarea
          v-model="description"
          :class="$style.textarea"
          placeholder="Напишите о себе как о продавце или как о покупателе"
        />
      </div>
      <div :class="$style.title">Контакты</div>
      <div :class="$style.rows">
        <div :class="$style.row">
          <div :class="$style.content">
            <div :class="$style.title">Telegram</div>
            <UIButton disabled>nomore4krab</UIButton>
          </div>
        </div>
        <div :class="$style.row">
          <div :class="$style.content">
            <div :class="$style.texts">
              <div :class="$style.title">Instagram</div>
              <span v-if="instagram" :title="instagram">
                {{ instagram }}
              </span>
            </div>
            <UIButton
              uppercase
              @click="
                instagramFormVisible = !instagramFormVisible
              "
            >
              {{ instagramFormVisible ? 'Отмена' : 'Изменить' }}
            </UIButton>
          </div>
          <div v-if="instagramFormVisible" :class="$style.form">
            <UIInput
              v-model="instagram"
              placeholder="Instagram..."
              fill
            />
            <UIButton fill uppercase>Подтвердить</UIButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const description = ref('');
const instagram = ref('');
const instagramFormVisible = ref(false);
</script>

<style lang="scss" src="./index.module.scss" module></style>
