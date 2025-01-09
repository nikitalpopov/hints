import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import type { WordRow } from '../../interfaces/word-row.interface'
import { WordComponent } from '../word/word.component'

@Component({
  selector: 'app-card',
  imports: [CommonModule, WordComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  rows: WordRow[] = Array.from({ length: 8 }, (_, i) => ({
    number: i + 1,
    hint: `Group ${i + 1}`,
    word: `Word ${i + 1}`,
  }))
}
