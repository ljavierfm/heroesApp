import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  constructor(private _router:Router) {;
   }

  ngOnInit() {
  }

  nuevoHeroe(){
    this._router.navigate(['/heroe', 'nuevo']);
  }

}
