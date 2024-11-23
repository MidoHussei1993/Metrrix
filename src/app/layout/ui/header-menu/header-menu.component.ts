import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [TranslateModule, RouterLink, NgClass],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent implements AfterViewInit {
  @ViewChild('toggleBtn') toggleBtn!: ElementRef
  menuOpen: boolean = false;
  hideMenu: boolean = true;
  tl = gsap.timeline( {defaults: {
    duration: 0.1,
    ease: 'power3.inOut'
}})




  ngAfterViewInit(): void {
    this.close()
    this.toggleBtn.nativeElement.addEventListener('click', () => {
      this.menuOpen = !this.menuOpen
      this.menuOpen? this.open(): this.close()
    });
  }

  open() {
    this.hideMenu = false
    gsap.to('.menu__item', { scale: 1, y:0, duration: 0.3, stagger: 0.1, ease: 'power3.inOut'});
  }

  close() {
    this.tl.to('.menu__item.dash', { scale: 0, y: -35 })
    .to('.menu__item.encyclo', { scale: 0, y: -85 })
    .to('.menu__item.actions', { scale: 0, y: -130 })
    .to('.menu__item.admin ', { scale: 0, y: -165 });
  }

}
