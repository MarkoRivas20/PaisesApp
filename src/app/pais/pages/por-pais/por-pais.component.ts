import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  Error: boolean = false;
  Paises: Country[] = [];
  
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(event: string){
    this.Error = false;
    this.termino = event;

    this.paisService.buscarPais(this.termino).subscribe((resp) =>{

      this.Paises = resp;
      console.log(resp);
    }, (err) => {

      this.Error = true;
      this.Paises = [];
    });
  }

  sugerencias(event: string){
    this.Error = false;
    
  }

}
