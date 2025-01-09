import { HttpClient } from '@angular/common/http'
import { Injectable, inject, signal } from '@angular/core'
import type { CardsData } from '../interfaces/card.interface'
import type { Language, LanguageOption } from '../interfaces/language.interface'
import type { WordRow } from '../interfaces/word-row.interface'

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private http = inject(HttpClient)

  private readonly currentLanguage = signal<Language>('en')
  private readonly currentCard = signal<WordRow[]>([])

  public readonly languages: LanguageOption[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'se', name: 'Svenska', flag: '🇸🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  ]

  constructor() {
    this.loadRandomCard()
  }

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang)
    this.loadRandomCard()
  }

  getCurrentLanguage() {
    return this.currentLanguage()
  }

  getCurrentCard() {
    return this.currentCard()
  }

  loadRandomCard() {
    this.http.get<CardsData>(`/assets/data/${this.currentLanguage()}.json`).subscribe(data => {
      const randomIndex = Math.floor(Math.random() * data.cards.length)
      this.currentCard.set(data.cards[randomIndex].words)
    })
  }
}
