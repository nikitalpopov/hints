import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { CardsService } from '../../services/cards.service'
import { WordComponent } from '../word/word.component'

@Component({
  selector: 'app-card',
  imports: [CommonModule, WordComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  private cardsService = inject(CardsService)

  readonly rows = this.cardsService.currentCard
  readonly hasRows = computed(() => this.rows().length > 0)
}
