export default {
  main: {
    error: 'Fehler',
    downloadLauncher: 'Laden Sie den Launcher herunter',
    downloadFree: 'Kostenlos herunterladen',
    contactSupport: 'Kontaktieren Sie Support',
    bots: {
      tg: 'Telegram-Bot',
      vk: 'Bot auf VK'
    },
  },
  links: {
    home: 'heim',
    settings: 'Einstellungen',
    support: 'Unterstützung'
  },
  errors: {
    auth: {
      INVALID_LOGIN: "Ungültiger Login",
      INVALID_PASSWORD: "Falsches Passwort",
      INVALID_CREDENTIALS: "Falschen Daten",
      TO_MANY_REQUESTS: "Sie senden zu viele Anfragen. Bitte warten Sie einen Moment",
      INVALID_EMAIL: "Ungültige E-Mail",
      EMAIL_NOT_FOUND: "Es gibt keinen Benutzer mit dieser E-Mail",
      INVALID_CAPTCHA: "ungültiges Captcha",
      LOGIN_EXISTS: "Ein Benutzer mit diesem Login existiert bereits",
      EMAIL_EXISTS: "Ein Benutzer mit dieser E-Mail ist bereits registriert",
      PASSWORD_REPEAT_MISMATCH: "Die Passwörter stimmen nicht überein",
      INVALID_RESPONSE: "Serverfehler",
      INVALID_CODE: "Falscher Code"
    }
  },
  notifications: {
    default: {
      title: 'Benachrichtigung'
    },
    error: {
      title: 'Fehler'
    },
    serverError: {
      title: 'Serverfehler'
    },
    auth: {
      codeCopied: {
        title: 'Code kopiert',
        description: 'Code erfolgreich kopiert'
      },
      invalidEmail: {
        // notifications.error.title
        description: 'Bitte geben Sie die richtige E-Mail-Adresse ein'
      },
      successEmailSending: {
        // notifications.default.title
        description: 'Wir haben einen Brief an Ihre E-Mail-Adresse gesendet'
      },
      emailServerError: {
        // notifications.error.title
        description: 'Serverfehler, E-Mail konnte nicht an Ihre E-Mail-Adresse gesendet werden'
      },
      resetPasswordSuccess: {
        // notifications.default.title
        description: 'Das Passwort wurde erfolgreich geändert'
      },
      resetPasswordError: {
        // notifications.serverError.title
        description: 'Serverfehler, Passwort konnte nicht geändert werden'
      }
    }
  },
  header: {
    authorizationButton: {
      name: 'Registrieren Login'
    },
    menu: {
      signInButton: {
        name: 'Anmeldung'
      },
      signUpButton: {
        name: 'Anmeldung'
      }
    }
  },
  footer: {
    linkLists: [
      {
        name: 'Anmeldung',
        links: [
          { name: 'Hauptseite', href: '/' },
          { name: 'Kurze Review', href: '/' },
          { name: 'Schalttafel', href: '/' }
        ]
      },
      {
        name: 'Politik',
        links: [
          { name: 'Nutzungsbedingungen', href: '/' },
          { name: 'Datenschutzrichtlinie', href: '/' },
          { name: 'Datenverarbeitung', href: '/' }
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
      title: 'Kostenloser Legit-Changer für beliebte Spiele',
      description: 'Schaffen Sie ein neues visuelles Erlebnis in CS2-Spielen usw.',
      button: {
        name: 'Versuch es'
      }
    },
    videoPreview: {
      head: {
        title: 'Ein neuer Blick auf den Wechsler',
        additional: 'Wie sieht es aus ↓'
      }
    },
    features: [
      {
        title: 'Skins',
        description: 'Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.'
      },
      {
        title: 'Auswirkungen',
        description: 'Die Bedeutung dieser Probleme ist so offensichtlich, dass die Umsetzung der geplanten Ziele eine wichtige Rolle bei der Gestaltung eines Personalschulungssystems spielt und dringenden Bedarf deckt'
      }
    ],
    tryNow: {
      title: 'Probieren Sie es jetzt'
    }
  },

  auth: {
    links: {
      forgotPassword: 'Passwort vergessen?',
      notRegistred: 'Noch nicht registriert?',
      registred: 'Bereits registriert?',
      signUp: 'Anmeldung',
      signIn: 'Betreten'
    },
    captcha: {
      title: 'Warten! Bist du wirklich ein Mensch?',
      description: 'Bitte füllen Sie das Captcha aus',
      inputs: {
        code: {
          placeholder: 'Geben Sie hier den Text aus dem Bild ein'
        }
      },
      submit: 'Weitermachen'
    },
    webauth: {
      loading: 'Genehmigung...',
      authorizeButton: {
        name: 'Autorisieren'
      },
      success: {
        title: 'Großartig',
        description: 'Sie haben die Autorisierung erfolgreich durchgeführt'
      }
    },
    signIn: {
      seo: {
        title: 'Genehmigung'
      },
      title: 'Genehmigung',
      inputs: {
        login: {
          title: 'Anmeldung',
          placeholder: 'Geben Sie den Benutzernamen ein'
        },
        password: {
          title: 'Passwort',
          placeholder: 'Passwort eingeben'
        }
      },
      submit: 'Betreten'
    },
    signUp: {
      seo: {
        title: 'Anmeldung'
      },
      title: 'Anmeldung',
      inputs: {
        login: {
          title: 'Anmeldung',
          placeholder: 'Geben Sie Ihren gewünschten Login ein'
        },
        email: {
          title: 'EMAIL',
          placeholder: 'Введите вашу почту'
        },
        password: {
          title: 'Passwort',
          placeholder: 'Введите Passwort eingeben',
          additional: '(Mindestens 8 Zeichen)'
        },
        repeatPassword: {
          title: 'Passwort wiederholen',
          placeholder: 'Wiederholen Sie das Passwort'
        }
      },
      submit: 'Registrieren'
    },
    signUpSubmit: {
      seo: {
        title: 'Bestätigung der Anmeldung'
      },
      title: 'Account Bestätigung',
      description: 'Zur Bestätigung senden Sie diesen Code an unseren Telegram- oder VK-Bot',
      submit: 'Ich habe bestätigt, dass ich fortfahren möchte'
    },
    restorePassword: {
      seo: {
        title: 'Passwort Wiederherstellung'
      },
      title: 'Passwort Wiederherstellung',
      inputs: {
        email: {
          title: 'EMAIL',
          placeholder: 'Geben sie ihre E-Mail Adresse ein'
        }
      },
      submit: 'Per Post verschicken',
      process: 'Versenden...'
    },
    resetPassword: {
      seo: {
        title: 'Passwort Wiederherstellung'
      },
      title: 'Passwort Wiederherstellung',
      success: 'Passwort erfolgreich zurückgesetzt. Ein neues Passwort wurde an Ihre E-Mail-Adresse gesendet',
      submit: 'Betreten',
      process: 'Versenden...'
    }
  },

  profile: {
    seo: {
      title: 'Profil'
    },
    welcome: 'Hallo',
    userInfo: {
      title: 'Nutzerinformation',
      username: 'Benutzername',
      createdAt: 'Registrationsdatum'
    },
    download: {
      title: 'SOURCECHANGER installieren',
      description: 'Nur ein paar Klicks, um mit Skins zu spielen'
    }
  },

  settings: {
    seo: {
      title: 'Einstellungen'
    },
    title: 'Kontoverwaltung',
    email: {
      title: 'Email',
      desription: 'Verwalten von E-Mails, die mit Ihrem SOURCECHANGER-Konto verknüpft sind',
      buttons: {
        change: {
          name: 'Ändern'
        }
      }
    },
    password: {
      title: 'Passwort',
      desription: 'Verwalten des Passworts, das für die Anmeldung bei Ihrem SOURCECHANGER-Konto erforderlich ist',
      inputs: {
        oldPassword: {
          placeholder: 'Altes Passwort'
        },
        newPassword: {
          placeholder: 'Neues Passwort'
        },
        newRepeatPassword: {
          placeholder: 'Passwort wiederholen'
        }
      },
      buttons: {
        change: {
          name: 'Ändern'
        },
        resetByEmail: {
          name: 'Per Post wiederherstellen'
        }
      }
    }
  }
}