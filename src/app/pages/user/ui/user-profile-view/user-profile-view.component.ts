import { Component, inject, OnInit } from '@angular/core';
import { InboxCard, IActionCard, Subordinate } from '../../types';
import { ActionCardComponent } from '../../components/action-card/action-card.component';
import { NgIf } from '@angular/common';
import { InboxCardComponent, TabsComponent } from '../../components';
import { ListInfoCardComponent } from '@app/shared';
import { SubordinateFacade } from '../../store/subordinates/facade';

@Component({
  selector: 'app-user-profile-view',
  standalone: true,
  imports: [ListInfoCardComponent, TabsComponent,],
  templateUrl: './user-profile-view.component.html',
  styleUrl: './user-profile-view.component.scss'
})
export class UserProfileViewComponent  implements OnInit {
  protected subordinateFacade = inject(SubordinateFacade)
  subordinateList:Subordinate[] = [];
  activeTab:string = '';
  ngOnInit(): void {
    this.subordinateFacade.subordinates$.subscribe((subordinates) => {
      this.subordinateList = subordinates;
      console.log(subordinates);
    });
  }
  
}
