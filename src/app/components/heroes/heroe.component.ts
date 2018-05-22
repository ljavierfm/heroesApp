import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { format } from 'url';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: ''
  }

  nuevo: boolean = false;
  id: string;

  constructor(private _heroesService: HeroesService, private router: Router, private ar: ActivatedRoute) {
    this.ar.params.subscribe(params => {
      this.id = params['id'];

      if(this.id!=='nuevo'){
        this._heroesService.getHeroe(this.id).subscribe(heroe=>this.heroe=heroe);
      }
    });
  }
  // constructor() { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);
    console.log(this.id);


    if (this.id === 'nuevo') {
      this._heroesService.createHeroe(this.heroe).subscribe(
        data => {
          this.router.navigate(['/heroe', data.name]);
        },
        error => {
          console.error(error);
        }
      );
    }
    else{
      this._heroesService.updateHeroe(this.heroe,this.id).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error(error);
        }
      );
    }


  }

  agregarNuevo(forma:NgForm){
    this.router.navigate(['/heroe','nuevo']);
    forma.reset({
      casa:'Marvel'
    });
  }

}
