import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero, Role } from '../model/hero.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) { }
  
  fetchHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('http://localhost:3000/heroes').pipe(delay(2000));
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>('http://localhost:3000/heroes', hero);
  }

  updateHero(id: string, hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`http://localhost:3000/heroes/${id}`, {...hero});
  }
}
