import { Component } from '@angular/core';
import { InfoCardComponent } from "../info-card/info-card.component";

@Component({
  selector: 'app-list-info-card',
  standalone: true,
  imports: [InfoCardComponent],
  templateUrl: './list-info-card.component.html',
  styleUrl: './list-info-card.component.scss'
})
export class ListInfoCardComponent {

}
