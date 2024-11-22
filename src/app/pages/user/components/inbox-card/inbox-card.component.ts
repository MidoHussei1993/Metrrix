import { ChangeDetectionStrategy, Component, input, Signal } from '@angular/core';
import { InboxCard } from '../../types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-inbox-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './inbox-card.component.html',
  styleUrl: './inbox-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InboxCardComponent {
  data  = input.required<InboxCard>()
}
