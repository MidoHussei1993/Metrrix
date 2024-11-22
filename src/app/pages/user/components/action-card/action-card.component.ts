import { Component, input } from '@angular/core';
import { IActionCard } from '../../types';

@Component({
  selector: 'app-action-card',
  standalone: true,
  imports: [],
  templateUrl: './action-card.component.html',
  styleUrl: './action-card.component.scss'
})
export class ActionCardComponent {
  data  = input.required<IActionCard>()
}
