export function useGetLocaleError() {
  const { t } = useI18n();

  return (errorCode: string) => t(`errors.${errorCode}`);
}
