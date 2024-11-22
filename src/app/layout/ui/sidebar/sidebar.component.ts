import { Component } from '@angular/core';
import { UserInfoCardComponent } from "../../components/user-info-card/user-info-card.component";
import { SidebarMenuComponent } from "../../components/sidebar-menu/sidebar-menu.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [UserInfoCardComponent, SidebarMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
