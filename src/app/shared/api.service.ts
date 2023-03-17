import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private currentWordSubject!: BehaviorSubject<string>;
  constructor(private http: HttpClient) {
    this.currentWordSubject = new BehaviorSubject<string>('mean');
  }
  private url: string = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  getDefinition(word: string) {
    return this.http.get<any>(this.url + word).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getCurrrentWord() {
    return this.currentWordSubject.asObservable();
  }

  updateCurrentWord(word: string) {
    this.currentWordSubject.next(word);
  }
}
