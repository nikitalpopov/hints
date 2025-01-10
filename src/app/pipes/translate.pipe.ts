import type { PipeTransform } from '@angular/core'
import { Pipe, inject } from '@angular/core'
import { TRANSLATIONS } from '../consts/translations.cnst'
import type { Translations } from '../interfaces/translations.interface'
import { LanguageService } from '../services/language.service'

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  private languageService = inject(LanguageService)

  transform(key: keyof Translations): string {
    const currentLanguage = this.languageService.currentLanguage()
    return TRANSLATIONS[currentLanguage][key]
  }
}
