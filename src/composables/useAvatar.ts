import type { User } from '@/ts';

type PartialUser = Partial<User>;

export function useAvatar(
  value?: PartialUser | null
): globalThis.ComputedRef<string>;
export function useAvatar(
  value?: string | number | null
): globalThis.ComputedRef<string>;
export function useAvatar(
  value?: globalThis.Ref<PartialUser | null>
): globalThis.ComputedRef<string>;
export function useAvatar(
  value?:
    | globalThis.Ref<PartialUser | null>
    | PartialUser
    | string
    | number
    | null
): globalThis.ComputedRef<string> {
  const baseURL = useApiBaseURL();
  const defaultAvatar = useDefaultAvatar();
  const baseURLParsed = baseURL?.endsWith('/')
    ? baseURL
    : `${baseURL}/`;

  const token = useCookie('token');
  const tokenEncoded = computed(() =>
    encodeURIComponent(token.value || '')
  );

  return computed(() => {
    try {
      const segmentByUser =
        value instanceof Object && 'id' in value && value.id;
      const segmentByUserId =
        (typeof value === 'string' ||
          typeof value === 'number') &&
        value;
      const segmentByRefUser =
        value instanceof Object &&
        'value' in value &&
        value.value?.id;
      const segment =
        segmentByUser || segmentByUserId || segmentByRefUser;

      if (!token.value || !segment) return defaultAvatar;

      return `${baseURLParsed}/user/avatar/${segment}?initData=${tokenEncoded.value}`;
    } catch (err) {
      return defaultAvatar;
    }
  });
}
