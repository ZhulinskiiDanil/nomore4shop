import { gsap } from 'gsap';

type UseGSAPOptions = {
  scope?: Parameters<typeof gsap.context>['1'];
  deps?: any[];
};

export const useGSAP = (
  callback?: () => any,
  options?: UseGSAPOptions
) => {
  const context = ref<gsap.Context | null>(null);
  const clearContext = () => {
    context.value?.kill();
  };
  const initContext = () => {
    context.value = gsap.context(callback, options?.scope);
  };

  watch(options?.deps || [], () => {
    clearContext();
    initContext();
  });

  onMounted(initContext);
  onUnmounted(clearContext);
};
