export default {
  main: {
    error: 'Error',
    downloadLauncher: 'Descargar lanzador',
    downloadFree: 'Descárgalo gratis',
    contactSupport: 'Soporte de contacto',
    bots: {
      tg: 'robot de telegrama',
      vk: 'Robot en VK'
    },
  },
  links: {
    home: 'Hogar',
    settings: 'Ajustes',
    support: 'Apoyo'
  },
  errors: {
    auth: {
      INVALID_LOGIN: "Ingreso invalido",
      INVALID_PASSWORD: "Contraseña incorrecta",
      INVALID_CREDENTIALS: "Información incorrecta",
      TO_MANY_REQUESTS: "Estás enviando demasiadas solicitudes, espera un momento.",
      INVALID_EMAIL: "Неверный e-mail",
      EMAIL_NOT_FOUND: "No hay ningún usuario con este correo electrónico",
      INVALID_CAPTCHA: "Captcha inválido",
      LOGIN_EXISTS: "Ya existe un usuario con este login",
      EMAIL_EXISTS: "Un usuario con este correo electrónico ya está registrado",
      PASSWORD_REPEAT_MISMATCH: "Contraseña no coincide",
      INVALID_RESPONSE: "Error del Servidor",
      INVALID_CODE: "Código incorrecto"
    }
  },
  notifications: {
    default: {
      title: 'Notificación'
    },
    error: {
      title: 'Error'
    },
    serverError: {
      title: 'Error del Servidor'
    },
    auth: {
      codeCopied: {
        title: 'Código copiado',
        description: 'Código copiado exitosamente'
      },
      invalidEmail: {
        // notifications.error.title
        description: 'Por favor ingrese el correo electrónico correcto'
      },
      successEmailSending: {
        // notifications.default.title
        description: 'Hemos enviado una carta a su correo electrónico.'
      },
      emailServerError: {
        // notifications.error.title
        description: 'Error del servidor, no se pudo enviar el correo electrónico a su correo electrónico'
      },
      resetPasswordSuccess: {
        // notifications.default.title
        description: 'Contraseña cambiada con éxito'
      },
      resetPasswordError: {
        // notifications.serverError.title
        description: 'Error del servidor, no se pudo cambiar la contraseña'
      }
    }
  },
  header: {
    authorizationButton: {
      name: 'Registro / Entrada'
    },
    menu: {
      signInButton: {
        name: 'Acceso'
      },
      signUpButton: {
        name: 'Registro'
      }
    }
  },
  footer: {
    linkLists: [
      {
        name: 'Navegación',
        links: [
          { name: 'Pagina de inicio', href: '/' },
          { name: 'Breve reseña', href: '/' },
          { name: 'Panel de control', href: '/' }
        ]
      },
      {
        name: 'Política',
        links: [
          { name: 'Condiciones de uso', href: '/' },
          { name: 'política de privacidad', href: '/' },
          { name: 'Procesamiento de datos', href: '/' }
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
      title: 'Cambiador legítimo gratuito para juegos populares',
      description: 'Crea una nueva experiencia visual en juegos CS2, etc.',
      button: {
        name: 'Intentalo'
      }
    },
    videoPreview: {
      head: {
        title: 'Una nueva mirada al cambiador.',
        additional: 'Cómo se ve ↓'
      }
    },
    features: [
      {
        title: 'Pieles',
        description: 'La importancia de estos problemas es tan obvia que la implementación de los objetivos planificados juega un papel importante en la formación de un sistema de formación de personal y satisface necesidades urgentes.'
      },
      {
        title: 'Efectos',
        description: 'La importancia de estos problemas es tan obvia que la implementación de los objetivos planificados juega un papel importante en la formación de un sistema de formación de personal y satisface necesidades urgentes.'
      }
    ],
    tryNow: {
      title: 'Pruebalo ahora'
    }
  },

  auth: {
    links: {
      forgotPassword: 'Olvidaste tu contraseña?',
      notRegistred: 'Todavía no estas registrado?',
      registred: 'Ya registrado?',
      signUp: 'Registro',
      signIn: 'Entrar'
    },
    captcha: {
      title: '¡Esperar! ¿Eres realmente humano?',
      description: 'Por favor completa el captcha',
      inputs: {
        code: {
          placeholder: 'Introduce aquí el texto de la imagen.'
        }
      },
      submit: 'Continuar'
    },
    webauth: {
      loading: 'Autorización...',
      authorizeButton: {
        name: 'Autorizar'
      },
      success: {
        title: 'Excelente',
        description: 'Has autorizado exitosamente'
      }
    },
    signIn: {
      seo: {
        title: 'Autorización'
      },
      title: 'Autorización',
      inputs: {
        login: {
          title: 'Acceso',
          placeholder: 'Ingrese inicio de sesión'
        },
        password: {
          title: 'Contraseña',
          placeholder: 'introducir la contraseña'
        }
      },
      submit: 'Entrar'
    },
    signUp: {
      seo: {
        title: 'Registro'
      },
      title: 'Registro',
      inputs: {
        login: {
          title: 'Acceso',
          placeholder: 'Ingrese su inicio de sesión deseado'
        },
        email: {
          title: 'EMAIL',
          placeholder: 'Introduce tu correo electrónico'
        },
        password: {
          title: 'Contraseña',
          placeholder: 'introducir la contraseña',
          additional: '(Al menos 8 carácteres)'
        },
        repeatPassword: {
          title: 'Repita la contraseña',
          placeholder: 'Repita la contraseña'
        }
      },
      submit: 'Registro'
    },
    signUpSubmit: {
      seo: {
        title: 'Confirmación de registro'
      },
      title: 'Confirmacion de cuenta',
      description: 'Para confirmar envía este código a nuestro bot de Telegram o VK',
      submit: 'Confirmé para continuar'
    },
    restorePassword: {
      seo: {
        title: 'Recuperación de contraseña\''
      },
      title: 'Recuperación de contraseña\'',
      inputs: {
        email: {
          title: 'EMAIL',
          placeholder: 'Introduce tu correo electrónico'
        }
      },
      submit: 'Enviar por correo electrónico',
      process: 'Despacho...'
    },
    resetPassword: {
      seo: {
        title: 'Recuperación de contraseña\''
      },
      title: 'Recuperación de contraseña\'',
      success: 'Restablecimiento de contraseña exitoso. Se ha enviado una nueva contraseña a su correo electrónico.',
      submit: 'Entrar',
      process: 'Despacho...'
    }
  },

  profile: {
    seo: {
      title: 'Perfil'
    },
    welcome: 'Hola',
    userInfo: {
      title: 'Informacion del usuario',
      username: 'Nombre de usuario',
      createdAt: 'Fecha de Registro'
    },
    download: {
      title: 'Instalación de FUENTECHANGER',
      description: 'Solo un par de clics para jugar con máscaras'
    }
  },

  settings: {
    seo: {
      title: 'Ajustes'
    },
    title: 'Administración de cuentas',
    email: {
      title: 'Email',
      desription: 'Administrar el correo vinculado a su cuenta SOURCECHANGER',
      buttons: {
        change: {
          name: 'Cambiar'
        }
      }
    },
    password: {
      title: 'Contraseña',
      desription: 'Administrar la contraseña necesaria para iniciar sesión en su cuenta SOURCECHANGER',
      inputs: {
        oldPassword: {
          placeholder: 'Contraseña anterior'
        },
        newPassword: {
          placeholder: 'Nueva contraseña'
        },
        newRepeatPassword: {
          placeholder: 'Repita la contraseña'
        }
      },
      buttons: {
        change: {
          name: 'Cambiar'
        },
        resetByEmail: {
          name: 'Recuperar por correo'
        }
      }
    }
  }
}