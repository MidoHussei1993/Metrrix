import { Component, Signal, signal } from '@angular/core';
import { ListInfoCardComponent } from '../../../../shared/components/list-info-card/list-info-card.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { InboxCardComponent } from '../../components/inbox-card/inbox-card.component';
import { IActionCard, InboxCard } from '../../types';
import { NgFor, NgIf } from '@angular/common';
import { ActionCardComponent } from "../../components/action-card/action-card.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ListInfoCardComponent, TabsComponent, InboxCardComponent, NgIf, ActionCardComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  inboxCardsData: InboxCard[] = [
    {
      title: 'My Tasks',
      description: 'you have 15 new tasks',
      img: 'tasks.svg',
      count: 45,
      cardColor: 'yellow' 
    },
    {
      title: 'collaborations',
      description: 'you have 04 requests',
      img: 'collaborations.svg',
      count: 15, 
      cardColor: 'light-green' 

    },
  ];
  actionList: IActionCard[] = [
    {
      title: 'create new object',
      description: 'object type',
      img: 'action-obj-type.svg',
    },
    {
      title: 'create new object',
      description: 'object',
      img: 'action-object.svg',
    },
    {
      title: 'create ',
      description: 'new kpi',
      img: 'action-kpi.svg',
    },
    {
      title: 'request',
      description: 'new change',
      img: 'action-action.svg',
    },
    {
      title: 'create',
      description: 'new canvas',
      img: 'action-canvas.svg',
    },
    {
      title: 'create',
      description: 'new form',
      img: 'action-form.svg',
    },
  ];
}
