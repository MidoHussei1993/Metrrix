import { Component, EventEmitter, input, Output, inject, Signal, signal, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderMenuComponent } from "../header-menu/header-menu.component";
import { TranslationService } from '../../../core/services/translation.service';
import { DatePipe, NgClass } from '@angular/common';
import { IUser } from '../../types/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterLink, HeaderMenuComponent, DatePipe, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() searching = new EventEmitter<string>()
  @Output() detectingSpeach = new EventEmitter<boolean>()
  userInfo = input.required<IUser>()
  language = signal('')
  userActions: boolean = false
  userNotifications: boolean = false
  listening: boolean = false
  translationService = inject(TranslationService)
  loggedIn: boolean = false

  constructor() {
    this.toggleLanguage()
  }


  search(searchVal: string) {
    this.searching.emit(searchVal)
    console.log(searchVal);

  }

  toggleSpeachToText() {
    this.listening = !this.listening
    this.detectingSpeach.emit(this.listening)
    console.log(this.listening);
  }

  toggleUserActions() {
    this.userActions = !this.userActions;
  }

  toggleNotifications() {
    this.userNotifications = !this.userNotifications
  }
  changeLanguage() {
    let lang = this.translationService.lang() === 'en' ? 'ar' : 'en'
    this.translationService.changeLang(lang);
    this.toggleLanguage()
  }
  toggleLanguage() {
    this.translationService.lang() === 'en' ? this.language.set('عربي') : this.language.set('English')
  }
}
