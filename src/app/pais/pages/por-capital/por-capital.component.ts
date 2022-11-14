import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  Error: boolean = false;
  Paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(event: string){
    this.Error = false;
    this.termino = event;

    this.paisService.buscarCapital(this.termino).subscribe((resp) =>{

      this.Paises = resp;
      console.log(resp);
    }, (err) => {

      this.Error = true;
      this.Paises = [];
    });
  }
}
