import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faChevronDown, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import type { Language } from '../../interfaces/language.interface'
import { CardsService } from '../../services/cards.service'
import { LanguageService } from '../../services/language.service'

@Component({
  selector: 'app-language-selector',
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
