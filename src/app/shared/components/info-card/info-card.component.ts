import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ICardInfo } from '@app/shared/types';
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
  data = input.required<ICardInfo>()
  index = input.required<number>()
  setting = output();
  delete = output();
  items = [
    {
        label: 'Card settings',
        icon: 'pi pi-refresh',
                command: () => {
          this.EmitCardSettings();
      }
    },
    {
      separator: true
  },
    {
        label: 'Delete card',
    }
];

EmitCardSettings(){
  console.log(arguments)
  // this.EmitAaction(action,data)
}
}
