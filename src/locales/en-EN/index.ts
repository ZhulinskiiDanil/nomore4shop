export default {
  main: {
    error: 'Error',
    downloadLauncher: 'Download launcher',
    downloadFree: 'Download for free',
    contactSupport: 'Contact support',
    bots: {
      tg: 'Telegram bot',
      vk: 'Bot on VK'
    },
  },
  links: {
    home: 'Home',
    settings: 'Settings',
    support: 'Support'
  },
  errors: {
    auth: {
      INVALID_LOGIN: "Invalid login",
      INVALID_PASSWORD: "Incorrect password",
      INVALID_CREDENTIALS: "Wrong data",
      TO_MANY_REQUESTS: "You are sending too many requests, please wait a moment",
      INVALID_EMAIL: "Invalid email",
      EMAIL_NOT_FOUND: "There is no user with this email",
      INVALID_CAPTCHA: "Invalid captcha",
      LOGIN_EXISTS: "A user with this login already exists",
      EMAIL_EXISTS: "A user with this e-mail is already registered",
      PASSWORD_REPEAT_MISMATCH: "Password mismatch",
      INVALID_RESPONSE: "Server error",
      INVALID_CODE: "Incorrect code"
    }
  },
  notifications: {
    default: {
      title: 'Notification'
    },
    error: {
      title: 'Error'
    },
    serverError: {
      title: 'Server error'
    },
    auth: {
      codeCopied: {
        title: 'Code copied',
        description: 'Code copied successfully'
      },
      invalidEmail: {
        // notifications.error.title
        description: 'Please enter correct email'
      },
      successEmailSending: {
        // notifications.default.title
        description: 'We have sent a letter to your email'
      },
      emailServerError: {
        // notifications.error.title
        description: 'Server error, failed to send email to your email'
      },
      resetPasswordSuccess: {
        // notifications.default.title
        description: 'Password changed successfully'
      },
      resetPasswordError: {
        // notifications.serverError.title
        description: 'Server error, failed to change password'
      }
    }
  },
  header: {
    authorizationButton: {
      name: 'Register / Login'
    },
    menu: {
      signInButton: {
        name: 'Login'
      },
      signUpButton: {
        name: 'Registration'
      }
    }
  },
  footer: {
    linkLists: [
      {
        name: 'Navigation',
        links: [
          { name: 'Home page', href: '/' },
          { name: 'Short review', href: '/' },
          { name: 'Control Panel', href: '/' }
        ]
      },
      {
        name: 'Policy',
        links: [
          { name: 'Terms of use', href: '/' },
          { name: 'Privacy Policy', href: '/' },
          { name: 'Data processing', href: '/' }
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
      title: 'Free legit changer for popular games',
      description: 'Create a new visual experience in CS2 games, etc.',
      button: {
        name: 'Try it'
      }
    },
    videoPreview: {
      head: {
        title: 'A new look at the changer',
        additional: 'What does it look like ↓'
      }
    },
    features: [
      {
        title: 'Skins',
        description: 'The significance of these problems is so obvious that the implementation of the planned targets plays an important role in the formation of a personnel training system and meets urgent needs'
      },
      {
        title: 'Effects',
        description: 'The significance of these problems is so obvious that the implementation of the planned targets plays an important role in the formation of a personnel training system and meets urgent needs'
      }
    ],
    tryNow: {
      title: 'Try it now'
    }
  },

  auth: {
    links: {
      forgotPassword: 'Forgot your password?',
      notRegistred: 'Not registered yet?',
      registred: 'Already registered?',
      signUp: 'Registration',
      signIn: 'Login'
    },
    captcha: {
      title: 'Wait! Are you really human?',
      description: 'Please complete the captcha',
      inputs: {
        code: {
          placeholder: 'Enter the text from the image here'
        }
      },
      submit: 'Continue'
    },
    webauth: {
      loading: 'Authorization...',
      authorizeButton: {
        name: 'Authorize'
      },
      success: {
        title: 'Great',
        description: 'You have successfully authorized'
      }
    },
    signIn: {
      seo: {
        title: 'Authorization'
      },
      title: 'Authorization',
      inputs: {
        login: {
          title: 'Login',
          placeholder: 'Enter login'
        },
        password: {
          title: 'Password',
          placeholder: 'Enter password'
        }
      },
      submit: 'Login'
    },
    signUp: {
      seo: {
        title: 'Registration'
      },
      title: 'Registration',
      inputs: {
        login: {
          title: 'Login',
          placeholder: 'Enter your desired login'
        },
        email: {
          title: 'EMAIL',
          placeholder: 'Enter your email'
        },
        password: {
          title: 'Password',
          placeholder: 'Enter password',
          additional: '(At least 8 characters)'
        },
        repeatPassword: {
          title: 'Repeat password',
          placeholder: 'Repeat password'
        }
      },
      submit: 'Register'
    },
    signUpSubmit: {
      seo: {
        title: 'Confirmation of registration'
      },
      title: 'Account confirmation',
      description: 'To confirm, send this code to our Telegram or VK bot',
      submit: 'I confirmed to continue'
    },
    restorePassword: {
      seo: {
        title: 'Password recovery'
      },
      title: 'Password recovery',
      inputs: {
        email: {
          title: 'EMAIL',
          placeholder: 'Enter your email'
        }
      },
      submit: 'Send by mail',
      process: 'Dispatch...'
    },
    resetPassword: {
      seo: {
        title: 'Password recovery'
      },
      title: 'Password recovery',
      success: 'Password reset successfully. A new password has been sent to your email',
      submit: 'Login',
      process: 'Dispatch...'
    }
  },

  profile: {
    seo: {
      title: 'Profile'
    },
    welcome: 'Hello',
    userInfo: {
      title: 'User information',
      username: 'Username',
      createdAt: 'Registration date'
    },
    download: {
      title: 'Installing SOURCECHANGER',
      description: 'Just a couple of clicks to play with skins'
    }
  },

  settings: {
    seo: {
      title: 'Settings'
    },
    title: 'Account management',
    email: {
      title: 'Email',
      desription: 'Managing mail linked to your SOURCECHANGER account',
      buttons: {
        change: {
          name: 'Change'
        }
      }
    },
    password: {
      title: 'Password',
      desription: 'Managing the password needed to log into your SOURCECHANGER account',
      inputs: {
        oldPassword: {
          placeholder: 'Old Password'
        },
        newPassword: {
          placeholder: 'New Password'
        },
        newRepeatPassword: {
          placeholder: 'Repeat password'
        }
      },
      buttons: {
        change: {
          name: 'Change'
        },
        resetByEmail: {
          name: 'Recover by mail'
        }
      }
    }
  }
}