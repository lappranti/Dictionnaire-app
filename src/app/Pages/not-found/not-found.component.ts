import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  @Input() theme!: string;
  lightTxt: string = '#ffff';
  darkTxt: string = '#2D2D2D';
  iconNotFound: string = '../../../assets/images/😕.svg';
}
