import { ErrorCodes } from '@/ts/errors';

import useVuelidate from '@vuelidate/core';
import {
  helpers,
  required,
  minLength,
  maxLength,
  minValue,
  maxValue
} from '@vuelidate/validators';

type FieldError = null | string;

export const withValidate = () => {
  const { withMessage: wm } = helpers;
  const error = useGetLocaleError();

  const requiredField = error(ErrorCodes.REQUIRED_FIELD);
  const invalidTitleMinLength = error(
    ErrorCodes.INVALID_PRODUCT_TITLE_MIN_LENGTH
  );
  const invalidTitleMaxLength = error(
    ErrorCodes.INVALID_PRODUCT_TITLE_MAX_LENGTH
  );
  const invalidDescriptionMinLength = error(
    ErrorCodes.INVALID_PRODUCT_DESCRIPTION_MIN_LENGTH
  );
  const invalidDescriptionMaxLength = error(
    ErrorCodes.INVALID_PRODUCT_DESCRIPTION_MAX_LENGTH
  );
  const invalidPriceMinValue = error(
    ErrorCodes.INVALID_PRODUCT_PRICE_MIN_VALUE
  );
  const invalidPriceMaxValue = error(
    ErrorCodes.INVALID_PRODUCT_PRICE_MAX_VALUE
  );
  const invalidSizeMinLength = error(ErrorCodes.INVALID_FIELD);
  const invalidSizeMaxLength = error(ErrorCodes.INVALID_FIELD);

  const title = reactive({
    value: '',
    error: null as FieldError
  });
  const description = reactive({
    value: '',
    error: null as FieldError
  });
  const price = reactive({
    value: '',
    error: null as FieldError
  });
  const size = reactive({
    value: '',
    error: null as FieldError
  });
  const rate = reactive({
    value: 1,
    error: null as FieldError
  });

  watch(price, () => {
    price.value = price.value.match(/\d/g)?.join('') || '';
  });

  const rules = computed(() => ({
    title: {
      required: wm(requiredField, required),
      minLength: wm(invalidTitleMinLength, minLength(5)),
      maxLength: wm(invalidTitleMaxLength, maxLength(75))
    },
    description: {
      required: wm(requiredField, required),
      minLength: wm(invalidDescriptionMinLength, minLength(30)),
      maxLength: wm(invalidDescriptionMaxLength, maxLength(500))
    },
    price: {
      required: wm(requiredField, required),
      minValue: wm(invalidPriceMinValue, minValue(5)),
      maxValue: wm(invalidPriceMaxValue, maxValue(999999))
    },
    size: {
      required: wm(requiredField, required),
      minLength: wm(invalidSizeMinLength, minLength(1)),
      maxLength: wm(invalidSizeMaxLength, maxLength(30))
    },
    rate: {
      minValue: minValue(1),
      maxValue: minValue(10)
    }
  }));

  return {
    fields: {
      title,
      description,
      price,
      size,
      rate
    },
    v$: useVuelidate(rules, {
      title: toRef(title, 'value'),
      description: toRef(description, 'value'),
      price: toRef(price, 'value'),
      rate: toRef(rate, 'value'),
      size: toRef(size, 'value')
    })
  };
};
