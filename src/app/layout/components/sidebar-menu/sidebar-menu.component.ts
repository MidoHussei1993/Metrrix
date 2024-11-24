import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { PanelMenu } from 'primeng/panelmenu';
import { Router } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [AccordionModule,TranslateModule,AvatarModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
  items: any[]=[];

  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Router',
              icon: 'pi pi-palette',
              items: [
                  {
                      label: 'Installation',
                      icon: 'pi pi-eraser',
                      route: '/installation'
                  },
                  {
                      label: 'Configuration',
                      icon: 'pi pi-heart',
                      route: '/configuration'
                  }
              ]
          },
          {
              label: 'Programmatic',
              icon: 'pi pi-link',
              command: () => {
                  this.router.navigate(['/installation']);
              }
          },
          {
              label: 'External',
              icon: 'pi pi-home',
              items: [
                  {
                      label: 'Angular',
                      icon: 'pi pi-star',
                      url: 'https://angular.io/'
                  },
                  {
                      label: 'Vite.js',
                      icon: 'pi pi-bookmark',
                      url: 'https://vitejs.dev/'
                  }
              ]
          }
      ];
  }

}
