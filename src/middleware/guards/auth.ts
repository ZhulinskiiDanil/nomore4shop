export const authMiddleware = defineNuxtRouteMiddleware(
  async () => {
    const profile = await $api.profile.getProfile();

    if (!profile) {
      return await navigateTo('/auth/sign-in');
    }
  }
);
