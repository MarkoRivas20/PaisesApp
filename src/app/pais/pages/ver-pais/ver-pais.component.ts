import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country[];

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {



    // this.activatedRoute.params.subscribe((params:any) => {
      
    //   this.paisService.getPaisPorAlpha(params.id).subscribe( pais => {
    //     console.log(pais);
    //   });
    // });

    // this.activatedRoute.params.subscribe(({id}) => {
      
    //   this.paisService.getPaisPorAlpha(id).subscribe( pais => {
    //     console.log(pais);
    //   });
    // });


    this.activatedRoute.params
    .pipe(
      switchMap((param:any)=> this.paisService.getPaisPorAlpha(param.id)), 
      tap(resp => console.log(resp)) //tap ejecuta una accion secundaria
    )
    .subscribe(pais => this.pais = pais);
  }

}
