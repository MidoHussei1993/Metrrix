import { Component, Signal, signal } from '@angular/core';
import { ListInfoCardComponent } from "../../../../shared/components/list-info-card/list-info-card.component";
import { TabsComponent } from "../../components/tabs/tabs.component";
import { InboxCardComponent } from "../../components/inbox-card/inbox-card.component";
import { InboxCard } from '../../types';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ListInfoCardComponent, TabsComponent, InboxCardComponent,NgIf],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  inboxCardsData:  InboxCard[] = [
    {
      title: 'My Tasks',
      description: 'you have 15 new tasks',
      img: 'tasks.svg',
      count: 45,
      countColor: '--color-yello-400',
      cardBackgroundColor: '--color-yello-100',
    },
    {
      title: 'My Tasks',
      description: 'you have 15 new tasks',
      img: 'collaborations.svg',
      count: 45,
      countColor: '--color-light-green-100',
      cardBackgroundColor: '--color-light-green-200',
    }
  ]
}
