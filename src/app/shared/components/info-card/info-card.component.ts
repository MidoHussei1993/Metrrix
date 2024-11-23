import { NgClass, NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { CardInfo } from '@app/shared/types';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [NgClass,MenuModule,NgStyle],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  visible:boolean = false;
  activeCard: number | null = null;
  showOptions: boolean = false;
  data = input.required<CardInfo>()
  index = input.required<number>()
  settingAction = output<CardInfo>();
  deleteAction = output<number>();
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
                command: () => {
          this.delete();
      }
    }
];

EmitCardSettings(){
  this.settingAction.emit(this.data())
}

delete(){
  this.deleteAction.emit(this.index())
}
}
