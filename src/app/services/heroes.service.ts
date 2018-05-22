import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import { cadenasConexion } from '../config';

import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  constructor(private _http: Http) { }

  heroesUrl = cadenasConexion.heroesUrl;
  heroeUrl = cadenasConexion.heroeUrl;

  createHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'aplication-json'
    });

    return this._http.post(this.heroesUrl, body, { headers }).map(res => {
      return res.json();
    });
  }

  updateHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'aplication-json'
    });

    let url = `${this.heroeUrl}/${key$}.json`;
    return this._http.put(url, body, { headers }).map(res => {
      return res.json();
    });
  }

  getHeroe(key$: string) {
    let url = `${this.heroeUrl}/${key$}.json`;
    let headers = new Headers({
      'Content-Type': 'aplication-json'
    });

    console.log(url);


    return this._http.get(url, { headers }).map(res => {
      return res.json();
    })
  }

  getHeroes() {
    let headers = new Headers({
      'Content-Type': 'aplication-json'
    });

    return this._http.get(this.heroesUrl, { headers }).map(res => {
      return res.json();
    })
  }

  deleteHeroe(key: string) {
    let url = `${this.heroeUrl}/${key}.json`;

    return this._http.delete(url).map(res=>res.json());


  }

}
