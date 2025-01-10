import type { Language } from '../interfaces/language.interface'
import type { Translations } from '../interfaces/translations.interface'

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    updatePromptMessage: 'A new version is available!',
    updatePromptButton: 'Update now',
  },
  se: {
    updatePromptMessage: 'En ny version är tillgänglig!',
    updatePromptButton: 'Uppdatera nu',
  },
  ru: {
    updatePromptMessage: 'Доступно обновление!',
    updatePromptButton: 'Обновить',
  },
}
