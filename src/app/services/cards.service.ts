import { HttpClient } from '@angular/common/http'
import { Injectable, computed, effect, inject, signal } from '@angular/core'
import { first } from 'rxjs'
import type { Card, CardsData } from '../interfaces/card.interface'
import type { Language } from '../interfaces/language.interface'
import { LanguageService } from './language.service'

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private http = inject(HttpClient)
  private languageService = inject(LanguageService)

  private readonly cardsCache = signal(new Map<Language, Card[]>())
  private readonly currentCardIndex = signal<number>(0)

  readonly currentCard = computed(() => {
    const lang = this.languageService.currentLanguage()
    const cards = this.cardsCache().get(lang)
    if (!cards?.length) return []
    return cards[this.currentCardIndex() % cards.length].words
  })

  constructor() {
    effect(() => {
      this.loadCardsData(this.languageService.currentLanguage())
    })
  }

  loadRandomCard(): void {
    const currentLanguage = this.languageService.currentLanguage()
    const cards = this.cardsCache().get(currentLanguage)
    if (!cards?.length) return

    const currentIndex = this.currentCardIndex()
    const newIndex =
      (Math.floor(Math.random() * (cards.length - 1)) + currentIndex + 1) % cards.length

    this.currentCardIndex.set(newIndex)
  }

  private loadCardsData(language: Language): void {
    if (this.cardsCache().has(language)) {
      return
    }

    this.http
      .get<CardsData>(`/assets/data/${language}.json`)
      .pipe(first())
      .subscribe(data => {
        const newCache = new Map(this.cardsCache())
        newCache.set(language, data.cards)
        this.cardsCache.set(newCache)
        this.loadRandomCard()
      })
  }
}
