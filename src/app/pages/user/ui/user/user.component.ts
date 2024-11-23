import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUser } from '@app/layout/Type/user';
import { HeaderComponent, HeaderMenuComponent, SidebarComponent } from '@app/layout/ui';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent,RouterOutlet,HeaderMenuComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user:IUser = {
    username: 'John Doe',
    notifications: [
      {
        id: 1,
        message: 'New message from Jane Doe',
        date: new Date()
      },
      {
        id: 2,
        message: 'New message from Jane Doe',
        date: new Date()
      },
      {
        id: 3,
        message: 'New message from Jane Doe',
        date: new Date()
      }
    ],
    avatar: 'images/avatar.jpg'
  }
}
