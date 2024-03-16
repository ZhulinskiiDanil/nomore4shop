export default {
  helloWorld: 'Привет мир',
  authorizedUserLinks: [
    { name: 'Главная', href: '/profile', icon: 'SVGGeneral' },
    {
      name: 'Настройки',
      href: '/profile/settings',
      icon: 'SVGSettings'
    },
    {
      name: 'Подписка',
      href: '/profile/subscription',
      icon: 'SVGCoin'
    },
    {
      name: 'Рефералка',
      href: '/profile/referral',
      icon: 'SVGAutododge'
    },
    {
      name: 'Подержка',
      href: 'https://vk.me/melonity_gg',
      icon: 'SVGSupport',
      external: true
    }
  ],
  main: {
    contactSupport: 'Связаться с поддержкой',
    downloadLauncher: 'Скачать лаунчер',
    download: 'Скачать'
  },
  errors: {
    REQUIRED_FIELD: 'Обязательное поле',
    USER_ALREADY_EXISTS: 'Пользователь уже существует',
    INVALID_FIELD: 'Неверное поле',

    INVALID_PRODUCT_PRICE_MIN_VALUE:
      'Минимальная сумма продажи $5',
    INVALID_PRODUCT_PRICE_MAX_VALUE:
      'Максимальная сумма продажи $999 999',

    INVALID_RESPONSE: 'Ошибка сервера',
    EMPTY_LOGIN: 'Введите логин',
    EMPTY_EMAIL: 'Введите почту',
    EMPTY_CAPTCHA: 'Введите капчу',

    EMPTY_PASSWORD: 'Введите пароль',
    INVALID_PASSWORD: 'Неверный пароль',
    INVALID_OLD_PASSWORD: 'Неверный пароль',
    INVALID_PASSWORD_MIN_LENGTH:
      'Пароль должен быть больше 8 символов',
    PASSWORD_REPEAT_MISMATCH: 'Пароли не совпадают',

    INVALID_LOGIN_MIN_LENGTH: 'Длина логин не меньше 3 симолов',
    INVALID_LOGIN_MAX_LENGTH: 'Длина логин не больше 12 симолов',
    INVALID_LOGIN: 'Неверный логин',
    INVALID_CREDENTIALS: 'Неверные данные',
    TO_MANY_REQUESTS:
      'Вы отправяете слишком много запросов, подождите немного',
    INVALID_EMAIL: 'Неверный e-mail',
    EMAIL_NOT_FOUND: 'Пользователя с такой почтой не существует',
    INVALID_CAPTCHA: 'Неверная капча',
    LOGIN_EXISTS: 'Пользователь с таким логином уже существует',
    EMAIL_EXISTS:
      'Пользователь с таким e-mail уже зарегистрирован',
    INVALID_CODE: 'Неверный код',
    USER_NOT_FOUND: 'Пользователь не найден',
    USERNAME_EMPTY: 'Введите имя пользователя',
    ACCESS_DENIED: 'Отклонено в доступе',
    PROMO_EMPTY: 'Введите промокод',
    PROMO_NOT_FOUND: 'Промокод не найден',
    PROMO_ALREADY_USED: 'Промокод уже использован',
    NOT_ENOUGH_MONEY: 'Недостаточно средств',
    WITHDRAW_TEMPORALY_UNAVAILABLE: 'Вывод временно недоступен',

    INVALID_PRODUCT_TITLE_MIN_LENGTH:
      'Длина заголовка должна быть не меньше 5 символов',
    INVALID_PRODUCT_DESCRIPTION_MIN_LENGTH:
      'Длина описания должна быть не меньше 30 символов',
    INVALID_PRODUCT_TITLE_MAX_LENGTH:
      'Длина заголовка должна быть не больше 75 символов',
    INVALID_PRODUCT_DESCRIPTION_MAX_LENGTH:
      'Длина описания должна быть не больше 500 символов',
    INVALID_PRODUCT_PRICE: 'INVALID_PRODUCT_PRICE'
  },
  header: {
    links: [
      { name: 'Главная', href: '/' },
      { name: 'Цены', href: '/#subscription' },
      { name: 'Библиотека', href: '/', disabled: true },
      { name: 'Мерч', href: '/', disabled: true }
    ],
    buttons: {
      signIn: {
        name: 'Войти'
      },
      signUp: {
        name: 'Создать аккаунт'
      }
    },
    profile: {
      links: [
        { name: 'Личный кабинет', href: '/profile' },
        { name: 'Настройки', href: '/profile/settings' }
      ],
      buttons: {
        signOut: {
          name: 'Выход'
        }
      }
    }
  },
  footer: {
    linkLists: [
      {
        name: 'Навигация',
        links: [
          { name: 'Скрипты', href: '/' },
          { name: 'Новая версия', href: '/' },
          { name: 'Библиотека', href: '/', disabled: true },
          { name: 'Мерч', href: '/', disabled: true }
        ]
      },
      {
        name: 'Политика',
        links: [
          { name: 'Пользовательское соглашение', href: '/' },
          { name: 'Политика конфиденциальности', href: '/' },
          { name: 'Обработка данных', href: '/' }
        ]
      }
    ]
  },

  pages: {
    profile: {
      seo: {
        title: 'Профиль'
      }
    },
    auth: {
      links: {
        forgotPassword: 'Забыли пароль?',
        notRegistred: 'Ещё не зарегистрированы?',
        registred: 'Уже зарегистрированы?',
        signUp: 'Регистрация',
        signIn: 'Войти'
      },
      captcha: {
        title: 'Подождите! А вы точно человек?',
        description: 'Пожалуйста, пройдите капчу',
        inputs: {
          code: {
            placeholder: 'Введите текст с картинки сюда'
          }
        },
        submit: 'Продолжить'
      },
      signIn: {
        seo: {
          title: 'Авторизация'
        },
        title: 'Авторизация',
        inputs: {
          login: {
            title: 'Логин',
            placeholder: 'Введите логин'
          },
          password: {
            title: 'Пароль',
            placeholder: 'Введите пароль'
          }
        },
        submit: 'Войти'
      },
      signUp: {
        seo: {
          title: 'Регистрация'
        },
        title: 'Регистрация',
        inputs: {
          login: {
            title: 'Логин',
            placeholder: 'Введите желаемый логин'
          },
          email: {
            title: 'EMAIL',
            placeholder: 'Введите вашу почту'
          },
          password: {
            title: 'Пароль',
            placeholder: 'Введите пароль',
            additional: '(Не менее 8 символов)'
          },
          repeatPassword: {
            title: 'Повторение пароля',
            placeholder: 'Повторите пароль'
          }
        },
        submit: 'Зарегистрироваться'
      },
      recoveryPassword: {
        seo: {
          title: 'Восстановление пароля'
        },
        title: 'Восстановление пароля',
        inputs: {
          email: {
            title: 'EMAIL',
            placeholder: 'Введите вашу почту'
          }
        }
      },
      passwordRecoverySuccess: {
        seo: {
          title: 'Восстановление пароля'
        }
      }
    }
  }
};
