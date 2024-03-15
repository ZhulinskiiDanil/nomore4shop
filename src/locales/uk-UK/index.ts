export default {
  main: {
    error: 'Помилка',
    downloadLauncher: 'Завантажити лаунчер',
    downloadFree: 'Завантажити безкоштовно',
    contactSupport: "Зв'язатись з підтримкою",
    bots: {
      tg: 'Бот у телеграм',
      vk: 'Бот у вк'
    }
  },
  links: {
    home: 'Головна',
    settings: 'Налаштування',
    support: 'Підтримка'
  },
  errors: {
    auth: {
      INVALID_LOGIN: 'Невірний логін',
      INVALID_PASSWORD: 'Невірний пароль',
      INVALID_CREDENTIALS: 'Невірні данні',
      TO_MANY_REQUESTS:
        'Ви надсилаєте надто багато запитів, зачекайте трохи',
      INVALID_EMAIL: 'Невірний e-mail',
      EMAIL_NOT_FOUND: 'Користувача з такою поштою не існує',
      INVALID_CAPTCHA: 'Невірна капча',
      LOGIN_EXISTS: 'Користувач із таким логіном вже існує',
      EMAIL_EXISTS:
        'Користувач із таким e-mail вже зареєстрований',
      PASSWORD_REPEAT_MISMATCH: 'Паролі не співпадають',
      INVALID_RESPONSE: 'Помилка сервера',
      INVALID_CODE: 'Невірний код'
    }
  },
  notifications: {
    default: {
      title: 'Повідомлення'
    },
    error: {
      title: 'Помилка'
    },
    serverError: {
      title: 'Помилка сервера'
    },
    auth: {
      codeCopied: {
        title: 'Код скопійовано',
        description: 'Код успішно скопійовано'
      },
      invalidEmail: {
        // notifications.error.title
        description: 'Введіть правильну пошту'
      },
      successEmailSending: {
        // notifications.default.title
        description: 'Ми надіслали листа на вашу пошту'
      },
      emailServerError: {
        // notifications.error.title
        description:
          'Помилка сервера, не вдалося надіслати листа на вашу пошту'
      },
      resetPasswordSuccess: {
        // notifications.default.title
        description: 'Пароль успішно змінено'
      },
      resetPasswordError: {
        // notifications.serverError.title
        description: 'Помилка сервера, не вдалося змінити пароль'
      }
    }
  },
  header: {
    authorizationButton: {
      name: 'Реєстрація / Вхід'
    },
    menu: {
      signInButton: {
        name: 'Вхід до аккаунту'
      },
      signUpButton: {
        name: 'Реєстрація'
      }
    }
  },
  footer: {
    linkLists: [
      {
        name: 'Навігація',
        links: [
          { name: 'Головна сторінка', href: '/' },
          { name: 'Короткий огляд', href: '/' },
          { name: 'Панель управління', href: '/' }
        ]
      },
      {
        name: 'Політика',
        links: [
          { name: 'Користувача угода', href: '/' },
          { name: 'Політика конфіденційності', href: '/' },
          { name: 'Обробка даних', href: '/' }
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
      title: 'Безкоштовний легіт ченджер на популярні ігри',
      description:
        'Створи новий візуальний досвід у іграх CS2 i.т.д.',
      button: {
        name: 'Спробувати'
      }
    },
    videoPreview: {
      head: {
        title: 'Новий погляд на ченджер',
        additional: 'Як це виглядає ↓'
      }
    },
    features: [
      {
        title: 'Скини',
        description:
          'Значимість цих проблем настільки очевидна, що реалізація намічених планових завдань відіграє важливу роль у формуванні системи навчання кадрів, що відповідає насущним потребам'
      },
      {
        title: 'Ефекти',
        description:
          'Значимість цих проблем настільки очевидна, що реалізація намічених планових завдань відіграє важливу роль у формуванні системи навчання кадрів, що відповідає насущним потребам'
      }
    ],
    tryNow: {
      title: 'Спробуй прямо зараз'
    }
  },

  auth: {
    links: {
      forgotPassword: 'Забули пароль?',
      notRegistred: 'Ще не зареєстровані?',
      registred: 'Вже зареєстровані?',
      signUp: 'Реєстрація',
      signIn: 'Увійти'
    },
    captcha: {
      title: 'Зачекайте! А ви точно людина?',
      description: 'Будь ласка, пройдіть капчу',
      inputs: {
        code: {
          placeholder: 'Введіть текст із зображення сюди'
        }
      },
      submit: 'Продовжити'
    },
    webauth: {
      loading: 'Авторизація...',
      authorizeButton: {
        name: 'Авторизувати'
      },
      success: {
        title: 'Відмінно',
        description: 'Ви успішно авторизували'
      }
    },
    signIn: {
      seo: {
        title: 'Авторизація'
      },
      title: 'Авторизація',
      inputs: {
        login: {
          title: 'Логін',
          placeholder: 'Введіть логін'
        },
        password: {
          title: 'Пароль',
          placeholder: 'Введіть пароль'
        }
      },
      submit: 'Увійти'
    },
    signUp: {
      seo: {
        title: 'Реєстрація'
      },
      title: 'Реєстрація',
      inputs: {
        login: {
          title: 'Логін',
          placeholder: 'Введіть бажаний логін'
        },
        email: {
          title: 'EMAIL',
          placeholder: 'Введіть вашу пошту'
        },
        password: {
          title: 'Пароль',
          placeholder: 'Введіть пароль',
          additional: '(Не менше 8 символів)'
        },
        repeatPassword: {
          title: 'Повторення пароля',
          placeholder: 'Повторіть пароль'
        }
      },
      submit: 'Зареєструватись'
    },
    signUpSubmit: {
      seo: {
        title: 'Підтвердження реєстрації'
      },
      title: 'Підтвердження облікового запису',
      description:
        'Для підтвердження надішліть цей код нашому боту Telegram або ВК',
      submit: 'Я підтвердив продовжити'
    },
    restorePassword: {
      seo: {
        title: 'Відновлення паролю'
      },
      title: 'Відновлення паролю',
      inputs: {
        email: {
          title: 'EMAIL',
          placeholder: 'Введіть вашу пошту'
        }
      },
      submit: 'Надіслати на пошту',
      process: 'Надсилання...'
    },
    resetPassword: {
      seo: {
        title: 'Відновлення паролю'
      },
      title: 'Відновлення паролю',
      success:
        'Пароль успішно скинутий. Новий пароль надіслано вам на пошту',
      submit: 'Увійти',
      process: 'Надсилання...'
    }
  },

  profile: {
    seo: {
      title: 'Профіль'
    },
    welcome: 'Привіт',
    userInfo: {
      title: 'Інформація про користувача',
      username: "Ім'я користувача",
      createdAt: 'Дата реєстрації'
    },
    download: {
      title: 'Установка SOURCECHANGER',
      description: 'Усього пара кліків до гри зі скінами'
    }
  },

  settings: {
    seo: {
      title: 'Налаштування'
    },
    title: 'Управління акаунтом',
    email: {
      title: 'Email',
      desription:
        "Управління поштою, прив'язаною до облікового запису SOURCECHANGER",
      buttons: {
        change: {
          name: 'Змінити'
        }
      }
    },
    password: {
      title: 'Пароль',
      desription:
        'Управління паролем необхідним для входу в обліковий запис SOURCECHANGER',
      inputs: {
        oldPassword: {
          placeholder: 'Старий пароль'
        },
        newPassword: {
          placeholder: 'Новий пароль'
        },
        newRepeatPassword: {
          placeholder: 'Повтор пароля'
        }
      },
      buttons: {
        change: {
          name: 'Змінити'
        },
        resetByEmail: {
          name: 'Відновити поштою'
        }
      }
    }
  }
};
