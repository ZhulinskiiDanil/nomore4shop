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
  }>('profile', () => ({
    pending: false,
    profile: null
  }));

  async function loadProfile() {
    try {
      state.value.pending = true;
      const profile = await $api.profile.getProfile();
      state.value.pending = false;

      if ($api.utils.isSuccess(profile)) {
        state.value.profile = profile.result;
      }
    } catch (err) {}
  }

  if (options?.prefetch) {
    loadProfile();
  }

  return {
    ...toRefs(state.value),
    loadProfile
  };
}
