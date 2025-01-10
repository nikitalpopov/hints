import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faChevronDown, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import type { Language } from '../../interfaces/language.interface'
import { CardsService } from '../../services/cards.service'
import { LanguageService } from '../../services/language.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  standalone: true,
})
export class LanguageSelectorComponent {
  private cardsService = inject(CardsService)
  private languageService = inject(LanguageService)

  readonly refreshIcon = faRotateRight
  readonly chevronIcon = faChevronDown

  readonly languages = this.languageService.languages
  readonly currentLanguage = this.languageService.currentLanguage

  onLanguageChange(lang: Language): void {
    this.languageService.setLanguage(lang)
    this.cardsService.loadRandomCard()
  }

  onRefresh(): void {
    this.cardsService.loadRandomCard()
  }
}
