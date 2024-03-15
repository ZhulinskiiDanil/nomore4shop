export function useSubscriptionFreezeDelay(): number {
  return parseFloat(
    useRuntimeConfig()?.public?.VITE_SUBSCRIPTION_FREEZE_DELAY ||
      '0'
  );
}
