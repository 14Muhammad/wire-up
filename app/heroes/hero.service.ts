import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

export class Hero {
  constructor(public id: number, public name: string) { }
}

let HEROES = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan')
];

let heroesPromise = Promise.resolve(HEROES);

@Injectable()
export class HeroService {
  private heroesUrl = 'http://127.0.0.1:8081';
  constructor(private http: Http) {

  }

  getHeroes() { return heroesPromise; }
/*  getHeroes() {
    return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }*/
  getHero(id: number | string) {
    return heroesPromise
      .then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
}
