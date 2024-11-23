import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { InfoCardComponent } from '../info-card/info-card.component';
import { DrawerModule } from 'primeng/drawer';
import { CardInfo } from '@app/shared/types';
import { TranslationService } from '@app/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
@Component({
  selector: 'app-list-info-card',
  standalone: true,
  imports: [InfoCardComponent, DrawerModule,MultiSelectModule,FormsModule,Select],
  templateUrl: './list-info-card.component.html',
  styleUrl: './list-info-card.component.scss',
})
export class ListInfoCardComponent {
  translateService= inject(TranslationService)
  visible: boolean = false;

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
  ];
  dataType: { title: string; value: number; img: string;id:number }[] = [
    {
      title: 'Projects',
      value: 15,
      img: 'st-projects.svg',
      id:1
    },
    {
      title: 'Object types',
      value: 12,
      img: '3d-model.svg',
      id:2
    },
    {
      title: 'Objects',
      value: 112,
      img: 'object-st.svg',
      id:3
    },
    {
      title: "KPI's",
      value: 134,
      img: 'kpi-st.svg',
      id:4
    },
    {
      title: 'Viewpoints',
      value: 12,
      img: 'viewpoint.svg',
      id:5
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
  currentActiveCard: number | null = null;
  cardInfo:any = {};
  drawerSize = () => {
    if (window.innerWidth < 768) {
      return '80%';
    } else if (window.innerWidth < 992) {
      return '70%';
    } else if (window.innerWidth < 1200) {
      return '60%';
    } else {
      return '50%';
    }
  };
  addNewInfoCard(){
    this.intialCardsValue.push({
      title: 'object name',
      value: 0,
      img: '3d-model.svg',
      persona: '',
      role: '',
      color: '',
    })
  }
  removeInfoCard(index:number){
    this.intialCardsValue.splice(index,1);
  }
  openDrawer(index:number){
    this.currentActiveCard = index;
    this.cardInfo = {...this.intialCardsValue[index]};
    this.visible = true;
   }
  
  editCardSettings(){
    this.visible = false;
    if(this.currentActiveCard == null) return
    const dataType = this.dataType.find((item) => item.title === this.cardInfo.title)

    this.intialCardsValue[this.currentActiveCard] ={ ...this.cardInfo,
      ...dataType
    };
    console.log("🚀 ~ ListInfoCardComponent ~ editCardSettings ~ this.intialCardsValue[this.currentActiveCard]:", this.intialCardsValue[this.currentActiveCard])
   }
}
