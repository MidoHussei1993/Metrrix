import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent,SidebarComponent } from "./layout/ui"
import { TranslationService } from './core/services/translation.service';
import { IUser } from './layout/types/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Mohamed-Hussein';
  private translationService = inject(TranslationService)
  user!: IUser

  ngOnInit(): void {
    this.translationService.setLanguage()
    if (true) {
      this.user = {
        username: 'Mohammad Ali',
        notifications: [
          {
            id: 1,
            message: 'Text goes here in this area',
            date: new Date()
          },
          {
            id: 2,
            message: 'Text goes here in this area',
            date: new Date()
          },
          {
            id: 3,
            message: 'Text goes here in this area',
            date: new Date()
          },
        ],
        avatar: 'images/user.png'
      }
    }
  }
}