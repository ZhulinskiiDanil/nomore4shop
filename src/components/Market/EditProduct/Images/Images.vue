<template>
  <section :class="$style.images">
    <p :class="$style.title">
      Картинки
      <span :class="$style.amount">
        ({{ images.length || 0 }}/5)
      </span>
    </p>
    <label
      :class="$style.upload"
      @mouseenter="uploadHovered = true"
      @touchstart="uploadHovered = true"
      @mouseleave="uploadHovered = false"
      @touchend="uploadHovered = false"
    >
      <input type="file" hidden @change="changeFile" />
      <UIButton
        type="button"
        style="pointer-events: none"
        :hovered="uploadHovered"
        uppercase
      >
        Загрузить изображение
      </UIButton>
    </label>
    <div :class="$style.list">
      <article
        v-for="image of images"
        :key="image.id"
        :class="$style.image"
      >
        <img :src="image.path" :alt="image.id.toString()" />
        <div :class="$style.overlay">
          <UIButton @click="removeImage(image.id)">
            Убрать
          </UIButton>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
type Image = { id: string | number; path: string };

const images = defineModel<Image[]>({
  default: []
});

const uploadHovered = ref(false);

async function changeFile(event: Event) {
  const e = event as ChangeEvent<HTMLInputElement>;

  if (e.target.files) {
    const base64 = await $utils.file.getBase64(
      e.target.files[0]
    );

    if (typeof base64 === 'string') {
      addImage(base64);
    }
  }
}

function addImage(base64: string) {
  if (images.value.length < 5) {
    images.value.push({
      id: $utils.shared.uuid(),
      path: base64
    });
  }
}

function removeImage(id: string | number) {
  const index = images.value.findIndex((img) => img.id === id);

  if (index >= 0) {
    images.value.splice(index, 1);
  }
}
</script>

<style lang="scss" src="./Images.module.scss" module></style>
