import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { FontService } from 'src/app/shared/police.service';
import { ThemeService } from 'src/app/shared/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  listPolice = [
    { police: 'Sans Serif', name: 'sans-serif' },
    { police: 'Serif', name: 'serif' },
    { police: 'Mono', name: 'monospace' },
  ];

  imgLogo: string = '/assets/images/logo.svg';
  iconBtnSearch: string = '/assets/images/icon-search.svg';
  iconMoon: string = '/assets/images/icon-moon.svg';
  iconArrowDown: string = '/assets/images/icon-arrow-down.svg';
  iconPlayAudio: string = '/assets/images/icon-play.svg';

  menuPolice: boolean = false;
  themeSelected!: string;
  policeSelected!: string;

  currentTheme!: string;
  selectedPolice!: any;

  darkBg: string = '#050505';
  lightBg: string = '#ffff';

  darkTxt: string = '#2d2d2d';
  lightTxt: string = '#ffff';

  lightBoxShadow: string = '0px 5px 30px rgba(0, 0, 0, 0.1)';
  darkBoxShadow: string = '0px 5px 30px #A445ED';

  listDefinition!: any;
  searchForm: string = 'mean';

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    private themeService: ThemeService,
    private policeService: FontService
  ) {}

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
      console.log(this.currentTheme);
    });

    this.policeService.getCurrentFont().subscribe((font) => {
      this.listPolice.forEach((el) => {
        if (el.police == font) {
          this.selectedPolice = el;
        }
      });
    });

    this.getDefinition(this.searchForm);
    this.api.getCurrrentWord().subscribe((word) => {
      this.searchForm = word;
      this.getDefinition(this.searchForm);
    });
  }

  handleToggleMenuPPolice() {
    this.menuPolice = !this.menuPolice;
  }

  handleSelectPolice(police: any) {
    this.selectedPolice = police;
    this.handleToggleMenuPPolice();

    this.policeService.setFont(this.selectedPolice.police);
  }

  handleToggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.themeService.setTheme(this.currentTheme);
  }

  onSearch(input: HTMLInputElement) {
    console.log(input.value);
    this.searchForm = input.value;
    this.getDefinition(this.searchForm);
  }

  getDefinition(word: string) {
    this.api.getDefinition(word).subscribe({
      next: (res: any) => {
        this.listDefinition = res;
        //console.log(this.listDefinition);
      },
      error: () => {
        this.listDefinition = null;
      },
    });
  }
}
