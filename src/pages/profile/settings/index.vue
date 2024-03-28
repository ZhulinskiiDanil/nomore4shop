<template>
  <div v-if="profile" :class="$style.container">
    <ProfileHead
      title="Настройки профиля"
      :username="`@${profile?.username}`"
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
            <UIButton disabled>{{ profile.username }}</UIButton>
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
            <UIButton
              fill
              uppercase
              :disabled="instagramUploading"
              @click="changeInstagram"
            >
              Подтвердить
            </UIButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { profile, loadProfile } = useProfile();

const instagram = ref('');
const instagramUploading = ref(false);
const instagramFormVisible = ref(false);
const description = ref('');

async function changeDescription() {
  const response = await $api.profile.changeDescription({
    description: description.value
  });

  if (
    $api.utils.isSuccess(response) &&
    response.result.updated
  ) {
    loadProfile();
  }
}

async function changeInstagram() {
  instagramUploading.value = true;
  const response = await $api.profile.changeInstagram({
    instagram: instagram.value
  });
  instagramUploading.value = false;

  if (
    $api.utils.isSuccess(response) &&
    response.result.updated
  ) {
    loadProfile();
  }
}

const changeDescriptionThrottle = $ld.throttle(
  changeDescription,
  5000,
  {
    leading: false
  }
);

function init() {
  description.value =
    profile.value?.description || description.value;
  instagram.value = profile.value?.instagram || instagram.value;
}

onMounted(init);
watch(profile, init);
watch(description, changeDescriptionThrottle);
</script>

<style lang="scss" src="./index.module.scss" module></style>
