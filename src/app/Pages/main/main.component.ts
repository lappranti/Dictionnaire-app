import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { elementAt } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

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
  selectedPolice: any = { police: 'Sans Serif', name: 'sans-serif' };

  imgLogo: string = '../../../assets/images/logo.svg';
  iconBtnSearch: string = '../../../assets/images/icon-search.svg';
  iconMoon: string = '../../../assets/images/icon-moon.svg';
  iconArrowDown: string = '../../../assets/images/icon-arrow-down.svg';
  iconPlayAudio: string = '../../../assets/images/icon-play.svg';

  menuPolice!: boolean;
  themeSelected!: string;
  policeSelected!: string;

  darkBg: string = '#050505';
  lightBg: string = '#ffff';

  darkTxt: string = '#2d2d2d';
  lightTxt: string = '#ffff';

  lightBoxShadow: string = '0px 5px 30px rgba(0, 0, 0, 0.1)';
  darkBoxShadow: string = '0px 5px 30px #A445ED';

  listDefinition!: any;
  searchForm!: FormGroup;

  dataThemePolice!: any;

  constructor(
    private formbuilder: FormBuilder,
    private serviceApi: ApiService
  ) {}

  ngOnInit(): void {
    this.getLocalStoradgeThemePolice();

    this.menuPolice = false;

    this.serviceApi.getDefinition('Mean').subscribe({
      next: (res: any) => {
        this.listDefinition = res;
        //console.log(this.listDefinition);
      },
      error: () => {
        this.listDefinition = null;
      },
    });

    this.searchForm = this.formbuilder.group({
      inputValue: this.formbuilder.control('Mean'),
    });
  }

  handleSubmitSearch() {
    let word = this.searchForm.value.inputValue;
    this.serviceApi.getDefinition(word).subscribe({
      next: (resp: any) => {
        this.listDefinition = resp;
      },
      error: (err) => {
        this.listDefinition = null;
      },
    });
  }

  handleToggleMenuPPolice() {
    this.menuPolice = !this.menuPolice;
  }

  handleSelectPolice(police: any) {
    this.selectedPolice = police;
    this.menuPolice = !this.menuPolice;

    //console.log(police);

    this.dataThemePolice.police = police.name;
    this.updateLocalStoradgeThemePolice();
  }

  handleToggleTheme() {
    this.themeSelected = this.themeSelected === 'dark' ? 'light' : 'dark';
    this.dataThemePolice.theme = this.themeSelected;
    this.updateLocalStoradgeThemePolice();
  }

  updateLocalStoradgeThemePolice() {
    localStorage.setItem(
      'dataThemePolice',
      JSON.stringify(this.dataThemePolice)
    );

    this.themeSelected = this.dataThemePolice.theme;
    this.policeSelected = this.dataThemePolice.police;
  }

  getLocalStoradgeThemePolice() {
    if (localStorage.getItem('dataThemePolice')) {
      this.dataThemePolice = localStorage.getItem('dataThemePolice');
    } else {
      localStorage.setItem(
        'dataThemePolice',
        JSON.stringify({ theme: 'light', police: 'sans-serif' })
      );
      this.dataThemePolice = localStorage.getItem('dataThemePolice');
    }

    this.dataThemePolice = JSON.parse(this.dataThemePolice);
    this.themeSelected = this.dataThemePolice.theme;
    this.policeSelected = this.dataThemePolice.police;
  }
}
