import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FontService {
  private currentFontSubject: BehaviorSubject<string>;

  constructor() {
    this.currentFontSubject = new BehaviorSubject<string>(
      localStorage.getItem('currentFont') || 'Sans Serif'
    );
  }

  // Getter pour accéder à la police actuelle en tant qu'Observable.
  getCurrentFont(): Observable<string> {
    return this.currentFontSubject.asObservable();
  }

  // Méthode pour changer la police actuelle et informer tous les composants abonnés du changement.
  setFont(font: string) {
    localStorage.setItem('currentFont', font);
    this.currentFontSubject.next(font);
  }
}
