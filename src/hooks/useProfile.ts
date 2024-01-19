import { Api } from "@/shop-api";
import type { User } from "@/ts";

type UseProfileOptions = {
  prefetch?: boolean
}

export async function useProfile(options?: UseProfileOptions) {
  const state = useState<{
    profile: User | null,
    isLoading: boolean
  }>('profile', () => ({
    profile: null,
    isLoading: false
  }))

  async function loadProfile() {
    state.value.isLoading = true
    const response = await Api.profile.getProfile()
    state.value.isLoading = false

    state.value.profile = response
  }
  
  if (options?.prefetch || !state.value.profile) {
    await loadProfile()
  }

  return new Proxy({
    profile: state.value.profile,
    isLoading: state.value.isLoading, // Initial loading value
    loadProfile
  }, {
    get(target, p) {
      // Show loading in realtime
      if (p === 'isLoading') {
        return state.value.isLoading
      }

      return target[p as keyof typeof target]
    }
  })
}