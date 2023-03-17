import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private url: string = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  getDefinition(word: string) {
    return this.http.get<any>(this.url + word).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
