import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ProgressBar } from 'primeng/progressbar';
@Component({
  selector: 'app-user-info-card',
  standalone: true,
  imports: [AccordionModule,ProgressBar],
  templateUrl: './user-info-card.component.html',
  styleUrl: './user-info-card.component.scss'
})
export class UserInfoCardComponent {
  activeTab: number  = 0;

}
