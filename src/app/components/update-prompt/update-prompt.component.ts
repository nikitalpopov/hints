import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { SwUpdate, type VersionReadyEvent } from '@angular/service-worker'
import { filter } from 'rxjs'
import { TranslatePipe } from '../../pipes/translate.pipe'

@Component({
  selector: 'app-update-prompt',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './update-prompt.component.html',
  styleUrls: ['./update-prompt.component.scss'],
})
export class UpdatePromptComponent {
  private swUpdate = inject(SwUpdate)

  showPrompt = false

  constructor() {
    if (!this.swUpdate.isEnabled) return

    this.swUpdate.versionUpdates
      .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
      .subscribe(() => {
        this.showPrompt = true
      })
  }

  updateApp(): void {
    this.swUpdate.activateUpdate().then(() => document.location.reload())
  }
}
