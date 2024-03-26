<template>
  <div :class="$style.filter">
    <UIInput
      v-model="model.search"
      :class="$style.search"
      placeholder="Найти товары"
    >
      <template #before-icon>
        <SVGSearch />
      </template>
    </UIInput>
    <WidgetsFilterRow title="Цена">
      <div :class="$style.price">
        <UIInput
          v-model.force-number="model.price.min"
          fill
          placeholder="От"
        />
        <hr />
        <UIInput
          v-model.force-number="model.price.max"
          fill
          placeholder="До"
        />
      </div>
    </WidgetsFilterRow>
    <WidgetsFilterRow title="Состояние">
      <UITab fill>
        <UITabButton
          fill
          :active="model.state === ProductState.USED"
          @click="model.state = ProductState.USED"
        >
          б/у
        </UITabButton>
        <UITabButton
          fill
          :active="model.state === ProductState.NEW"
          @click="model.state = ProductState.NEW"
        >
          Новое
        </UITabButton>
      </UITab>
    </WidgetsFilterRow>
    <WidgetsFilterRow title="Состояние от">
      <div :class="$style.stars">
        <SVGStar
          v-for="(_, index) of 10"
          :key="index"
          :class="[
            $style.star,
            model.stateGrade > index && $style.active
          ]"
          @click="model.stateGrade = index + 1"
        />
      </div>
    </WidgetsFilterRow>
    <WidgetsFilterButtonsRow>
      <UIButton fill @click="submit">Применить</UIButton>
      <UIButton fill @click="cancel">Отмена</UIButton>
    </WidgetsFilterButtonsRow>
  </div>
</template>

<script setup lang="ts">
import { ProductState } from '@/ts/market';
import type { FilterData } from '@/ts/market';

const emit = defineEmits<{ submit: [] }>();
const visible = defineModel<boolean>('visible');
const model = defineModel<FilterData>({
  default: {
    search: '',
    state: ProductState.USED,
    stateGrade: 1,
    price: {
      min: 0,
      max: 0
    }
  }
});
const prevState = ref<FilterData | null>(null);

function submit() {
  if (visible.value) {
    emit('submit');
    visible.value = false;
    prevState.value = model.value;
  }
}

function cancel() {
  visible.value = false;

  model.value = prevState.value || model.value;
}

watch(visible, () => {
  if (visible.value) {
    prevState.value = $ld.cloneDeep(model.value);
  }
});
</script>

<style lang="scss" src="./Filter.module.scss" module></style>
