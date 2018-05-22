import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[]=[];
  loading:boolean=true;

  constructor(private _router:Router,private _heroesService:HeroesService) {

    this._heroesService.getHeroes().subscribe(heroesArr=>{
      this.heroes=heroesArr;
      this.loading=false;
      });
  }

  ngOnInit() {
  }

  nuevoHeroe(){
    this._router.navigate(['/heroe', 'nuevo']);
  }

  eliminarHeroe(k:string){
    this._heroesService.deleteHeroe(k).subscribe(respuesta=>{
      if(respuesta===null){
        delete this.heroes[k];
      }
    });
  }

}
