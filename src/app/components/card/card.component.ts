import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { CardsService } from '../../services/cards.service'
import { WordComponent } from '../word/word.component'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, WordComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  private cardsService = inject(CardsService)

  get rows() {
    return this.cardsService.getCurrentCard()
  }
}
