import { Injectable, signal, Signal } from '@angular/core';
import { CardInfo } from '@app/shared';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  tabs:Signal<{title:string,icon?:string;role:any[];personas:any[]}[]> = signal<{title:string,icon?:string;role:any[];personas:any[]}[]>([
    {
      title:'user dashboard',
      icon: 'fas fa-user',
      role:[],
      personas:[]
    },
    {
      title:'Projects',
      icon: 'fas fa-file-contract',
      role:[],
      personas:[]
    },
    {
      title:'Projects',
      icon: 'fas fa-cog',
      role:[],
      personas:[]
    },
    {
      title:'responsibilities',
      icon: 'fas fa-briefcase',
      role:[],
      personas:[]
    },
    {
      title:'roles',
      icon: 'fab fa-briefcase',
      role:[],
      personas:[]
    },
    {
      title:'relations',
      icon: 'fab fa-hubspot',
      role:[],
      personas:[]
    },
    {
      title:'subordinates',
      icon: 'fas fa-th-large',
      role:[],
      personas:[]
    },
  ])
  intialCardsValue:CardInfo[] = [
    {
      title: 'Projects',
      value: 15,
      img: 'st-projects.svg',
      persona: '',
      role: '',
      color: '',
    },
    {
      title: 'Object types',
      value: 12,
      img: '3d-model.svg',
      persona: '',
      role: '',
      color: '',
    },
    {
      title: 'Objects',
      value: 112,
      img: 'object-st.svg',
      persona: '',
      role: '',
      color: '',
    },
    {
      title: "KPI's",
      value: 134,
      img: 'kpi-st.svg',
      persona: '',
      role: '',
      color: '',
    },
  ];
}
