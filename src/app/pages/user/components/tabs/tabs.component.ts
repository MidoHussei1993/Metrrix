import { NgClass, NgIf } from '@angular/common';
import { Component, inject, input, InputSignal, output, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '@app/core';
import { DrawerModule } from 'primeng/drawer';
import { MultiSelectModule } from 'primeng/multiselect';
import { UserService } from '../../services';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgClass,FormsModule,MultiSelectModule,DrawerModule,NgIf],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  translateService= inject(TranslationService)
  isView:InputSignal<boolean>= input<boolean>(false);
  activeTabAction = output<string>();
  visible: boolean = false;
  activeTabIndex:number = 0;
  EditedTab:number|null = null;
  EditedTabDataIndex:number|null = null;
  editTabData:{title:string,icon?:string;role:any[];personas:any[]} = 
    {
      title:'',
      role:[],
      personas:[]
  };
 userServices = inject(UserService);
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
  addTab(){
    this.userServices.tabs().push({
      title: 'New Tab',
      role:[],
      personas:[]
    })
  }
  deleteTab(index:number){
    this.userServices.tabs().splice(index,1);
  }
  saveTabData(){
    this.userServices.tabs()[this.EditedTabDataIndex!] = this.editTabData;
    this.visible = false;
  }
  smoothScroll(element: HTMLElement, targetPosition: number, duration: number) {
    let startPosition = element.scrollLeft;
    let startTime = Date.now();
  
    const scroll = () => {
      const currentTime = Date.now();
      const timeElapsed = currentTime - startTime;
      const progress = timeElapsed / duration;
      element.scrollLeft = startPosition + (targetPosition - startPosition) * progress;
  
      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };
  
    requestAnimationFrame(scroll);
  }
  scrollLeft(){
    const scrollableList: HTMLElement = document.getElementById('scrollable-list')!;
    console.log("🚀 ~ TabsComponent ~ scrollLeft ~ scrollableList:", scrollableList)
    scrollableList.scrollLeft += 200;
  }
}
