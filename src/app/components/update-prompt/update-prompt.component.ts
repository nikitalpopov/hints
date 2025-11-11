import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { SwUpdate, type VersionReadyEvent } from '@angular/service-worker'
import { filter } from 'rxjs'
import { TranslatePipe } from '../../pipes/translate.pipe'

@Component({
  selector: 'app-update-prompt',
  imports: [TranslatePipe],
  templateUrl: './update-prompt.component.html',
  styleUrls: ['./update-prompt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatePromptComponent {
  private swUpdate = inject(SwUpdate)

  showPrompt = signal(false)

  constructor() {
    if (!this.swUpdate.isEnabled) return

    this.swUpdate.versionUpdates
      .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
      .subscribe(() => {
        this.showPrompt.set(true)
      })
  }

  async updateApp(): Promise<void> {
    await this.swUpdate.activateUpdate()
    document.location.reload()
  }
}
