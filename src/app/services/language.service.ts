import { Injectable, type WritableSignal, effect, signal } from '@angular/core'
import { AVAILABLE_LANGUAGES } from '../consts/language.cnst'
import type { Language } from '../interfaces/language.interface'

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly currentLanguage: WritableSignal<Language>

  readonly languages = AVAILABLE_LANGUAGES

  constructor() {
    const savedLang = localStorage.getItem('lang') as Language | null
    this.currentLanguage = signal<Language>(savedLang || 'en')

    if (savedLang && this.languages.some(l => l.code === savedLang)) {
      this.setLanguage(savedLang)
    }

    effect(() => {
      const current = this.currentLanguage()
      localStorage.setItem('lang', current)
    })
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang)
  }

  onLanguageChange(callback: (lang: Language) => void): void {
    effect(() => {
      callback(this.currentLanguage())
    })
  }
}
