import type { User } from '@/ts';

type UseProfileOptions = {
  prefetch?: boolean;
};

/**
 *
 * Используй options.prefetch чтобы актуализировать данные
 */
export function useProfile(options?: UseProfileOptions) {
  const state = useState<{
    pending: boolean;
    profile: User | null;
    subscription: {
      expiredAt: string | null;
      startedAt: string | null;
    };
  }>('profile', () => ({
    pending: false,
    profile: null,
    subscription: {
      expiredAt: null,
      startedAt: null
    }
  }));

  async function loadProfile() {
    try {
      state.value.pending = true;
      const profile = await $api.profile.getProfile();
      const subscriptionStartedAt =
        await $api.profile.subscriptions.getStartTime();
      state.value.pending = false;

      const expiredAt =
        (profile &&
          profile.expiredAt.find((elm) => elm.name === 'cs-main')
            ?.expiredAt) ||
        null;

      state.value.profile = profile;
      state.value.subscription.expiredAt = expiredAt;
      state.value.subscription.startedAt = subscriptionStartedAt;
    } catch (err) {
      state.value.pending = false;
    }
  }

  if (options?.prefetch) {
    loadProfile();
  }

  return {
    ...toRefs(state.value),
    loadProfile
  };
}
