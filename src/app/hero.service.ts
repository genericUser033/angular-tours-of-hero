import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {catchError, Observable, of, tap} from "rxjs";
import {Hero} from "./hero";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messageService: MessageService, private httpClient: HttpClient) {}

  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.messageService.addMessages('HeroService: getHeroes successfully!')
  //   return heroes;
  // }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessages('HeroService: getHeroes successfully!')
    return this.httpClient.get<Hero[]>(this.heroesUrl)
      .pipe
      (
        tap(_ => this.log('fetched heroes')),//here for logging
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  // getHeroDetailsById(id: number): Observable<Hero> {
  //   const hero = HEROES.find(h => h.id === id)!;//! = will not be null or undefined
  //   this.log(`HeroService: fetched hero id=${id}`);
  //   return of(hero);
  // }

  getHeroDetailsById(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(this.heroesUrl + `/${id}`)
      .pipe(
        tap(_ => this.log(`fetched hero with id = ${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  private log(message: string) {
    this.messageService.addMessages(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  updateHero(hero: Hero) {
    return this.httpClient.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: Hero) {
    return this.httpClient.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
}
