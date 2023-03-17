import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { ThemeService } from 'src/app/shared/theme.service';

@Component({
  selector: 'app-view-find-word',
  templateUrl: './view-find-word.component.html',
  styleUrls: ['./view-find-word.component.scss'],
})
export class ViewFindWordComponent implements OnInit {
  @Input() findDefinition!: any;
  @Input() index!: number;
  themeSelected!: any;
  iconPlayAudio: string = '../../../assets/images/icon-play.svg';

  darkBg: string = '#050505';
  lightBg: string = '#ffff';

  darkTxt: string = '#2d2d2d';
  lightTxt: string = '#ffff';

  audio!: any;
  btnPlay!: any;
  currentTheme!: string;

  constructor(
    private themeService: ThemeService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.themeService
      .getTheme()
      .subscribe((theme) => (this.currentTheme = theme));

    this.audio = document.getElementById('myAudio');
    this.btnPlay = document.getElementById('btnPlay');
  }

  wordPhoneticAudio(tab: any) {
    let audioUrl: string = '';
    tab.forEach((element: any) => {
      if (element.audio.length > 0) {
        audioUrl = element.audio;
      }
    });
    return audioUrl;
  }

  searchWord(word: string) {
    console.log(word);
    this.apiService.updateCurrentWord(word);
  }

  startPlayer() {
    // console.log(this.audio);
  }
}
