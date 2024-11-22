import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [DrawerModule,NgClass,MenuModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  visible:boolean = false;
  activeCard: number | null = null;
  showOptions: boolean = false;
  items = [
    {
        label: 'Card settings',
        icon: 'pi pi-refresh'
    },
    {
      separator: true
  },
    {
        label: 'Delete card',
    }
     
];
}
