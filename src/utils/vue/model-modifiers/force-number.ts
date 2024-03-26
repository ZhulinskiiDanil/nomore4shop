type ForceNumberOptions = {
  showIfZero?: boolean;
  showIfFalsy?: boolean;
};

const defaultOptions: ForceNumberOptions = {
  showIfFalsy: false,
  showIfZero: false
};

function isAccepted(value: unknown): value is number | string {
  return ['string', 'number'].includes(typeof value);
}

export function forceNumberGet(
  value: unknown,
  options: ForceNumberOptions = defaultOptions
) {
  if (isAccepted(value)) {
    const parsedValue = parseFloat(String(value));

    if (isNaN(parsedValue)) {
      return '';
    }

    if (!options?.showIfFalsy && !parsedValue) {
      return '';
    } else if (!options?.showIfZero && parsedValue === 0) {
      return '';
    }

    return parsedValue;
  }

  return value;
}
