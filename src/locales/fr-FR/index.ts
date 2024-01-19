export default {
  main: {
    error: 'Erreur',
    downloadLauncher: 'Lanceur de téléchargement',
    downloadFree: 'Télécharger gratuitement',
    contactSupport: 'Contactez le support',
    bots: {
      tg: 'Bot de télégramme',
      vk: 'Bot sur VK'
    },
  },
  links: {
    home: 'maison',
    settings: 'Paramètres',
    support: 'Soutien'
  },
  errors: {
    auth: {
      INVALID_LOGIN: "Identifiant invalide",
      INVALID_PASSWORD: "Mot de passe incorrect",
      INVALID_CREDENTIALS: "Données erronées",
      TO_MANY_REQUESTS: "Vous envoyez trop de demandes, veuillez patienter un instant",
      INVALID_EMAIL: "Email invalide",
      EMAIL_NOT_FOUND: "Il n'y a aucun utilisateur avec cet e-mail",
      INVALID_CAPTCHA: "Captcha invalide",
      LOGIN_EXISTS: "Un utilisateur avec cette connexion existe déjà",
      EMAIL_EXISTS: "Un utilisateur avec cette adresse e-mail est déjà enregistré",
      PASSWORD_REPEAT_MISMATCH: "Non concordance des mots de passe",
      INVALID_RESPONSE: "Erreur du serveur",
      INVALID_CODE: "Code incorrect"
    }
  },
  notifications: {
    default: {
      title: 'Erreur'
    },
    error: {
      title: 'Erreur'
    },
    serverError: {
      title: 'erreur du serveur'
    },
    auth: {
      codeCopied: {
        title: 'Code copié',
        description: 'Code copié avec succès'
      },
      invalidEmail: {
        // notifications.error.title
        description: 'Veuillez saisir l\'e-mail correct'
      },
      successEmailSending: {
        // notifications.default.title
        description: 'Nous avons envoyé une lettre à votre email'
      },
      emailServerError: {
        // notifications.error.title
        description: 'Erreur de serveur, échec d\'envoi d\'e-mail à votre adresse e-mail'
      },
      resetPasswordSuccess: {
        // notifications.default.title
        description: 'Le mot de passe a été changé avec succès'
      },
      resetPasswordError: {
        // notifications.serverError.title
        description: 'Erreur de serveur, échec de modification du mot de passe'
      }
    }
  },
  header: {
    authorizationButton: {
      name: 'S\'inscrire / Connexion'
    },
    menu: {
      signInButton: {
        name: 'Se connecter'
      },
      signUpButton: {
        name: 'Inscription'
      }
    }
  },
  footer: {
    linkLists: [
      {
        name: 'La navigation',
        links: [
          { name: 'Page d\'accueil', href: '/' },
          { name: 'Bref aperçu', href: '/' },
          { name: 'Panneau de contrôle', href: '/' }
        ]
      },
      {
        name: 'Politique',
        links: [
          { name: 'Conditions d\'utilisation', href: '/' },
          { name: 'Politique de confidentialité', href: '/' },
          { name: 'Traitement de l\'information', href: '/' }
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
      title: 'Changeur légitime gratuit pour les jeux populaires',
      description: 'Créez une nouvelle expérience visuelle dans les jeux CS2, etc.',
      button: {
        name: 'Essayez-le'
      }
    },
    videoPreview: {
      head: {
        title: 'Un nouveau regard sur le changeur',
        additional: 'À quoi cela ressemble-t-il ↓'
      }
    },
    features: [
      {
        title: 'Peaux',
        description: 'L\'importance de ces problèmes est si évidente que la mise en œuvre des objectifs prévus joue un rôle important dans la formation d\'un système de formation du personnel et répond aux besoins urgents'
      },
      {
        title: 'Effets',
        description: 'L\'importance de ces problèmes est si évidente que la mise en œuvre des objectifs prévus joue un rôle important dans la formation d\'un système de formation du personnel et répond aux besoins urgents'
      }
    ],
    tryNow: {
      title: 'Essayez-le maintenant'
    }
  },

  auth: {
    links: {
      forgotPassword: 'Mot de passe oublié?',
      notRegistred: 'Pas encore inscrit?',
      registred: 'Déjà enregistré?',
      signUp: 'Inscription',
      signIn: 'Entrer'
    },
    captcha: {
      title: 'Attendez! Es-tu vraiment humain?',
      description: 'Veuillez compléter le captcha',
      inputs: {
        code: {
          placeholder: 'Entrez le texte de l\'image ici'
        }
      },
      submit: 'Continuer'
    },
    webauth: {
      loading: 'Autorisation...',
      authorizeButton: {
        name: 'Autoriser'
      },
      success: {
        title: 'Super',
        description: 'Vous avez autorisé avec succès'
      }
    },
    signIn: {
      seo: {
        title: 'Autorisation'
      },
      title: 'Autorisation',
      inputs: {
        login: {
          title: 'Se connecter',
          placeholder: 'Entrez la connexion'
        },
        password: {
          title: 'Mot de passe',
          placeholder: 'Entrer le mot de passe'
        }
      },
      submit: 'Entrer'
    },
    signUp: {
      seo: {
        title: 'Inscription'
      },
      title: 'Inscription',
      inputs: {
        login: {
          title: 'Se connecter',
          placeholder: 'Entrez votre identifiant souhaité'
        },
        email: {
          title: 'EMAIL',
          placeholder: 'Entrer votre Email'
        },
        password: {
          title: 'Mot de passe',
          placeholder: 'Entrer le mot de passe',
          additional: '(Au moins 8 caractères)'
        },
        repeatPassword: {
          title: 'Répéter le mot de passe',
          placeholder: 'Répéter le mot de passe'
        }
      },
      submit: 'Registre'
    },
    signUpSubmit: {
      seo: {
        title: 'Confirmation d\'enregistrement'
      },
      title: 'Confirmation de compte',
      description: 'Pour confirmer, envoyez ce code à notre bot Telegram ou VK',
      submit: 'J\'ai confirmé pour continuer'
    },
    restorePassword: {
      seo: {
        title: 'Récupération de mot de passe'
      },
      title: 'Récupération de mot de passe',
      inputs: {
        email: {
          title: 'EMAIL',
          placeholder: 'Entrer votre Email'
        }
      },
      submit: 'Отправить на почту',
      process: 'Expédition...'
    },
    resetPassword: {
      seo: {
        title: 'Récupération de mot de passe'
      },
      title: 'Récupération de mot de passe',
      success: 'Le mot de passe a été réinitialisé avec succès. Un nouveau mot de passe a été envoyé à votre email',
      submit: 'Entrer',
      process: 'Expédition...'
    }
  },

  profile: {
    seo: {
      title: 'Profil'
    },
    welcome: 'Bonjour',
    userInfo: {
      title: 'Informations de l\'utilisateur',
      username: 'Nom d\'utilisateur',
      createdAt: 'Date d\'inscription'
    },
    download: {
      title: 'Installation de SOURCECHANGER',
      description: 'Juste quelques clics pour jouer avec les skins'
    }
  },

  settings: {
    seo: {
      title: 'Paramètres'
    },
    title: 'Gestion de compte',
    email: {
      title: 'Email',
      desription: 'Gestion du courrier lié à votre compte SOURCECHANGER',
      buttons: {
        change: {
          name: 'Changement'
        }
      }
    },
    password: {
      title: 'Mot de passe',
      desription: 'Gérer le mot de passe nécessaire pour vous connecter à votre compte SOURCECHANGER',
      inputs: {
        oldPassword: {
          placeholder: 'ancien mot de passe'
        },
        newPassword: {
          placeholder: 'nouveau mot de passe'
        },
        newRepeatPassword: {
          placeholder: 'Répéter le mot de passe'
        }
      },
      buttons: {
        change: {
          name: 'Changement'
        },
        resetByEmail: {
          name: 'Récupérer par mail'
        }
      }
    }
  }
}