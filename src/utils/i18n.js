import i18next from 'i18next'

import localeEn from 'locales/en.yml'
import localeId from 'locales/id.yml'

const usedLocale = localStorage.getItem('locale')

i18next.init({
  interpolation: {
    escapeValue: false,
    prefix: '{',
    suffix: '}',
  },
  lng: usedLocale,
  resources: {
    en: { translation: localeEn.en },
    id: { translation: localeId.id },
  },
})

export default i18next
