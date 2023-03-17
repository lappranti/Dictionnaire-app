import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentThemeSubject!: BehaviorSubject<string>;
  constructor() {
    this.currentThemeSubject = new BehaviorSubject<string>(
      localStorage.getItem('currentTheme') || 'dark'
    );
  }

  getTheme() {
    return this.currentThemeSubject.asObservable();
  }

  setTheme(theme: string) {
    localStorage.setItem('currentTheme', theme);
    this.currentThemeSubject.next(theme);
  }
}
