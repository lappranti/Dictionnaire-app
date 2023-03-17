import { Component, Input, OnInit, ViewChild } from '@angular/core';

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

  ngOnInit() {
    if (localStorage.getItem('dataThemePolice')) {
      this.themeSelected = localStorage.getItem('dataThemePolice');
      this.themeSelected = JSON.parse(this.themeSelected);
    }

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

  startPlayer() {
    // console.log(this.audio);
  }
}
