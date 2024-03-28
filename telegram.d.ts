type TelegramApp = {
  WebView: {
    isIframe: boolean;
    initParams: {
      auth_date: string;
      hash: string;
      tgWebAppData: string;
      tgWebAppPlatform: string;
      tgWebAppThemeParams: string;
      rgWebAppVersion: string;
      user: string;
    };
  };
  Utils: {
    sessionStorageGet: <T = any>(key: string) => T | null;
    sessionStorageSet: (key: string, value: string) => void;
    urlAppendHashParams: (url: string, hash: string) => string;
    urlParseHashParams: (path: string) => { _path: string };
    urlParseQueryString: (
      queryString: string
    ) => Record<string, string>;
    urlSafeDecode: (urlencoded: string) => typeof urlencoded;
  };
  WebApp: {
    close: () => void;
    closeScanQePopup: () => void;
    disableClosingConfirmation: () => void;
    enableClosingConfirmation: () => void;
    expand: () => void;
    invokeCustomMethod: (
      method: string,
      params: any,
      callback: () => void
    ) => void;
    isVersionAtLeast: () => boolean;
    offEvent: (eventType: string, callback: () => void) => void;
    onEvent: (eventType: string, callback: () => void) => void;
    openInvoice: (url: string, callback: () => void) => void;
    openLink: (
      url: string,
      options: Record<string, any>
    ) => void;
    openTelegramLink: (url: string) => void;
    readTextFromClipboard: (callback: () => void) => void;
    ready: () => void;
    requestContact: (callback: () => void) => void;
    requestWriteAccess: (callback: () => void) => void;
    sendData: (data: any) => void;
    setBackgroundColor: (color: string) => void;
    setHeaderColor: (color_key: string) => void;
    showAlert: (message: string, callback: () => void) => void;
    showConfirm: (message: string, callback: () => void) => void;
    showPopup: (message: string, callback: () => void) => void;
    showScanQrPopup: (params: any, callback: () => void) => void;
    switchInlineQuery: (
      query: string,
      choose_chat_types: any | any[]
    ) => void;

    isExpanded: boolean;
    isClosingConfirmationEnabled: boolean;

    initData: string;
    initDataUnsafe: Record<string, string>;
    version: string;
    platform: string;
    viewportHeight: number;
    viewportStableHeight: number;

    colorScheme: string;
    headerColor: string;
    backgroundColor: string;
    themeParams: {
      accent_text_color: string;
      bg_color: string;
      button_color: string;
      button_text_color: string;
      destructive_text_color: string;
      header_bg_color: string;
      hint_color: string;
      link_color: string;
      secondary_bg_color: string;
      section_bg_color: string;
      section_header_text_color: string;
      subtitle_text_color: string;
      text_color: string;
    };

    CloudStorage: {
      getItem: (key: string, callback: () => void) => void;
      getItems: (keys: string[], callback: () => void) => void;
      getKeys: (callback: () => void) => void;
      removeItem: (key: string, callback: () => void) => void;
      removeItems: (
        keys: string[],
        callback: () => void
      ) => void;
      setItem: (
        key: string,
        value: any,
        callback: () => void
      ) => void;
    };
    HapticFeedback: {};
    MainButton: {
      text: string;
      color: string;
      textColor: string;
      isVisible: boolean;
      isProgressVisible: boolean;
      isActive: boolean;

      disable: () => void;
      enable: () => void;
      hide: () => void;
      show: () => void;
      showProgress: () => void;
      hideProgress: () => void;
      offClick: (callback: () => void) => void;
      onClick: (callback: () => void) => void;
      setText: (text: string) => void;
      setParams: (params: any) => void;
    };
    BackButton: {
      isVisible: boolean;
      show: () => void;
      hide: () => void;
      offClick: (callback: () => void) => void;
      onClick: (callback: () => void) => void;
    };
    SettingsButton: {
      isVisible: boolean;

      hide: () => void;
      show: () => void;
      offClick: (callback: () => void) => void;
      onClick: (callback: () => void) => void;
    };
    BiometricManager: {
      isInited: boolean;
      isBiometricAvailable: boolean;
      biometricType: string;
      isAccessRequested: boolean;
      isAccessGranted: boolean;
      isBiometricTokenSaved: boolean;
      deviceId: string;

      init: () => void;
      openSettings: () => void;
      authenticate: (params: any, callback: () => void) => void;
      requestAccess: (params: any, callback: () => void) => void;
      updateBiometricToken: (
        token: string,
        callback: () => void
      ) => void;
    };
  };
};

declare const Telegram: TelegramApp | undefined;
