export default {
  main: {
    error: 'Ошибка',
    downloadLauncher: 'Скачать лаунчер',
    downloadFree: 'Скачать бесплатно',
    contactSupport: 'Связаться с поддержкой',
    bots: {
      tg: 'Бот в телеграм',
      vk: 'Бот в вк'
    }
  },
  links: {
    home: 'Главная',
    settings: 'Настройки',
    support: 'Поддержка'
  },
  errors: {
    auth: {
      INVALID_LOGIN: 'Неверный логин',
      INVALID_PASSWORD: 'Неверный пароль',
      INVALID_CREDENTIALS: 'Неверные данные',
      TO_MANY_REQUESTS:
        'Вы отправяете слишком много запросов, подождите немного',
      INVALID_EMAIL: 'Неверный e-mail',
      EMAIL_NOT_FOUND:
        'Пользователя с такой почтой не существует',
      INVALID_CAPTCHA: 'Неверная капча',
      LOGIN_EXISTS:
        'Пользователь с таким логином уже существует',
      EMAIL_EXISTS:
        'Пользователь с таким e-mail уже зарегистрирован',
      PASSWORD_REPEAT_MISMATCH: 'Пароли не совпадают',
      INVALID_RESPONSE: 'Ошибка сервера',
      INVALID_CODE: 'Неверный код'
    }
  },
  notifications: {
    default: {
      title: 'Уведомление'
    },
    error: {
      title: 'Ошибка'
    },
    serverError: {
      title: 'Ошибка сервера'
    },
    auth: {
      codeCopied: {
        title: 'Код скопирован',
        description: 'Код успешно скопирован'
      },
      invalidEmail: {
        // notifications.error.title
        description: 'Введите правильную почту'
      },
      successEmailSending: {
        // notifications.default.title
        description: 'Мы отправили письмо на вашу почту'
      },
      emailServerError: {
        // notifications.error.title
        description:
          'Ошибка сервера, не удалось отправить письмо на вашу почту'
      },
      resetPasswordSuccess: {
        // notifications.default.title
        description: 'Пароль успешно изменен'
      },
      resetPasswordError: {
        // notifications.serverError.title
        description: 'Ошибка сервера, не удалось изменить пароль'
      }
    }
  },
  header: {
    authorizationButton: {
      name: 'Регистрация / Вход'
    },
    menu: {
      signInButton: {
        name: 'Вход в аккаунт'
      },
      signUpButton: {
        name: 'Регистрация'
      }
    }
  },
  footer: {
    linkLists: [
      {
        name: 'Навигация',
        links: [
          { name: 'Главная страница', href: '/' },
          { name: 'Краткий обзор', href: '/' },
          { name: 'Панель управления', href: '/' }
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

  // Pages
  home: {
    seo: {
      title: 'Source Changer'
    },
    mainSection: {
      title: 'Бесплатный легит ченджер на популярные игры',
      description:
        'Создай новый визуальный опыт в играх CS2 и т.д',
      button: {
        name: 'Попробовать'
      }
    },
    videoPreview: {
      head: {
        title: 'Новый взгляд на ченджер',
        additional: 'Как это выглядит ↓'
      }
    },
    features: [
      {
        title: 'Скины',
        description:
          'Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.'
      },
      {
        title: 'Эффекты',
        description:
          'Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.'
      }
    ],
    tryNow: {
      title: 'Попробуй прямо сейчас'
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
    webauth: {
      loading: 'Авторизация...',
      authorizeButton: {
        name: 'Авторизовать'
      },
      success: {
        title: 'Отлично',
        description: 'Вы успешно авторизовали'
      }
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
    signUpSubmit: {
      seo: {
        title: 'Подтверждение регистрации'
      },
      title: 'Подтверждение аккаунта',
      description:
        'Для подтверждения отправьте этот код нашему боту Telegram или ВК',
      submit: 'Я подтвердил продолжить'
    },
    restorePassword: {
      seo: {
        title: 'Восстановление пароля'
      },
      title: 'Восстановление пароля',
      inputs: {
        email: {
          title: 'EMAIL',
          placeholder: 'Введите вашу почту'
        }
      },
      submit: 'Отправить на почту',
      process: 'Отправка...'
    },
    resetPassword: {
      seo: {
        title: 'Восстановление пароля'
      },
      title: 'Восстановление пароля',
      success:
        'Пароль успешно сброшен. Новый пароль выслан вам на почту',
      submit: 'Войти',
      process: 'Отправка...'
    }
  },

  profile: {
    seo: {
      title: 'Профиль'
    },
    welcome: 'Привет',
    userInfo: {
      title: 'Информацияо пользователе',
      username: 'Имя пользователя',
      createdAt: 'Дата регистрации'
    },
    download: {
      title: 'Установка SOURCECHANGER',
      description: 'Всего пара кликов до игры со скинами'
    }
  },

  settings: {
    seo: {
      title: 'Настройки'
    },
    title: 'Управление аккаунтом',
    email: {
      title: 'Email',
      desription:
        'Управление почтой привязанной к аккаунту SOURCECHANGER',
      buttons: {
        change: {
          name: 'Изменить'
        }
      }
    },
    password: {
      title: 'Пароль',
      desription:
        'Управление паролем нужным для захода в аккаунт SOURCECHANGER',
      inputs: {
        oldPassword: {
          placeholder: 'Старый пароль'
        },
        newPassword: {
          placeholder: 'Новый пароль'
        },
        newRepeatPassword: {
          placeholder: 'Повтор пароля'
        }
      },
      buttons: {
        change: {
          name: 'Изменить'
        },
        resetByEmail: {
          name: 'Восстановить по почте'
        }
      }
    }
  }
};
