import { Component } from '@angular/core';
import { InfoCardComponent } from '../info-card/info-card.component';
import { DrawerModule } from 'primeng/drawer';
import { ICardInfo } from '@app/shared/types';
@Component({
  selector: 'app-list-info-card',
  standalone: true,
  imports: [InfoCardComponent, DrawerModule],
  templateUrl: './list-info-card.component.html',
  styleUrl: './list-info-card.component.scss',
})
export class ListInfoCardComponent {
  visible: boolean = false;
  intialCardsValue:ICardInfo[] = [
    {
      title: 'Projects',
      value: 15,
      img: 'st-projects.svg',
    },
    {
      title: 'Object types',
      value: 12,
      img: '3d-model.svg',
    },
    {
      title: 'Objects',
      value: 112,
      img: 'object-st.svg',
    },
  ];
  dataType: { title: string; value: number; img: string }[] = [
    {
      title: 'Projects',
      value: 15,
      img: 'st-projects.svg',
    },
    {
      title: 'Object types',
      value: 12,
      img: '3d-model.svg',
    },
    {
      title: 'Objects',
      value: 112,
      img: 'object-st.svg',
    },
    {
      title: "KPI's",
      value: 134,
      img: 'kpi-st.svg',
    },
    {
      title: 'Viewpoints',
      value: 12,
      img: 'viewpoint.svg',
    },
  ];
  Personas: { title: string; value: string }[] = [
    {
      title: 'Persona 1',
      value: 'AL',
    },
    {
      title: 'Persona 2',
      value: 'WY',
    },
    {
      title: 'Persona 3',
      value: 'WY',
    },
    {
      title: 'Persona 4',
      value: 'WY',
    },
  ];

  roles: { title: string; value: string }[] = [
    {
      title: 'role 1',
      value: 'AL',
    },
    {
      title: 'role 2',
      value: 'WY',
    },
    {
      title: 'role 3',
      value: 'WY',
    },
    {
      title: 'role 4',
      value: 'WY',
    },
  ];
}
