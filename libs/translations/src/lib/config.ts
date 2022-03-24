import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en';
import fa from './locales/fa';

export const resources = {
  en: {
    translation: en,
  },
  fa: {
    translation: fa,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'fa',
  fallbackLng: 'fa',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});