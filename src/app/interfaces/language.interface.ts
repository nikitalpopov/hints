export type Language = 'en' | 'se' | 'ru'

export interface LanguageOption {
  code: Language
  name: string
  flag: string
}

export type UIKey = 'updatePromptMessage' | 'updatePromptButton'
