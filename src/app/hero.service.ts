import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Observable, of} from "rxjs";
import {Hero} from "./hero";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private messageService: MessageService, private httpClient: HttpClient) {}

  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.messageService.addMessages('HeroService: getHeroes successfully!')
  //   return heroes;
  // }

  getHeroes(): Observable<Hero[]> {
    // this.log(`HeroService: fetched hero id=${id}`);
    return this.httpClient.get<Hero[]>(this.heroesUrl)
  }

  getHeroDetailsById(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;//! = will not be null or undefined
    this.log(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  private log(message: string) {
    this.messageService.addMessages(`HeroService: ${message}`);
  }
}
