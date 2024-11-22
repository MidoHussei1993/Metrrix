import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  // Injectables
  translateService = inject(TranslateService)
  // Getting browser language & setting up the language signal for the application
  lang = signal(localStorage.getItem('language'))
  // Getting the document to update the direction based on the language
  documentHTML = document.querySelector('html')
  // Setting the application language
  setLanguage() {
    const defaultLange = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLange)
    this.translateService.use(defaultLange)
    this.updateDocument(defaultLange)
  }
  // Change the application language
  changeLang(lang: string): void {
    this.translateService.setDefaultLang(lang)
    this.translateService.use(lang)
    localStorage.setItem('language', lang)
    this.lang.set(lang)
    this.updateDocument(lang)
  }
  // Update HTML Document Properties to match language direction
  updateDocument(lang: string) {
    const htmlDoc = document.querySelector('html')
    if (lang === 'ar') {
      htmlDoc!.setAttribute('direction', 'rtl');
      htmlDoc!.setAttribute('dir', 'rtl');
      htmlDoc!.setAttribute('lang', lang);
      htmlDoc!.style.direction = 'rtl';
    } else {
      htmlDoc!.setAttribute('direction', 'ltr');
      htmlDoc!.setAttribute('dir', 'ltr');
      htmlDoc!.setAttribute('lang', lang);
      htmlDoc!.style.direction = 'ltr';
    }
  }
}