import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import type { WordRow } from '../../interfaces/word-row.interface'

@Component({
  selector: 'app-word',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent {
  @Input() data!: WordRow
}
