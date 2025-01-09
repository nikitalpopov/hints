import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faChevronDown, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import type { Language } from '../../interfaces/language.interface'
import { CardsService } from '../../services/cards.service'

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  private cardsService = inject(CardsService)
  refreshIcon = faRotateRight
  chevronIcon = faChevronDown

  languages = this.cardsService.languages

  get currentLanguage() {
    return this.cardsService.getCurrentLanguage()
  }

  onLanguageChange(event: Event) {
    const select = event.target as HTMLSelectElement
    this.cardsService.setLanguage(select.value as Language)
  }

  onRefresh() {
    this.cardsService.loadRandomCard()
  }
}
