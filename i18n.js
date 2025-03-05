import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './assets/locales/en.json';
import de from './assets/locales/de.json';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    lng: 'en', // Default language set to English
    fallbackLng: 'en', // Use English as the fallback
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
