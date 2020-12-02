import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as en from '../locales/en';
import * as vi from '../locales/vi';

let translate: any;

i18n.use(initReactI18next).init(
  {
    resources: {
      en,
      vi,
    },
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
    },
  },
  t => {
    translate = t;
  },
);

export { translate as t };

export default i18n;
