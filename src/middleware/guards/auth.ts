import { Api } from '@/shop-api';

export const authMiddleware = defineNuxtRouteMiddleware(
  async () => {
    const profile = await Api.profile.getProfile();

    if (!profile) {
      return await navigateTo('/auth/sign-in');
    }
  }
);
