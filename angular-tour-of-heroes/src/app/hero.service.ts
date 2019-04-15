import { Injectable } from "@angular/core";
import { Hero } from "./heroes/hero";
import { HEROES } from "./heroes/mock-heros";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class HeroService {
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }
}
