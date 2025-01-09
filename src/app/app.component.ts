import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { CardComponent } from './components/card/card.component'
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component'

@Component({
  selector: 'app-root',
  imports: [CommonModule, CardComponent, LanguageSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hints'
}
