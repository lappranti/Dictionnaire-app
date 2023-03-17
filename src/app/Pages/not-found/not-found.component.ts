import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/theme.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  theme!: string;
  lightTxt: string = '#ffff';
  darkTxt: string = '#2D2D2D';
  iconNotFound: string = '../../../assets/images/😕.svg';

  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => (this.theme = theme));
  }
}
