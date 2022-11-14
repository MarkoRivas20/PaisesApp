import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{

  @Input() placeholder: string ='';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  termino: string = '';
  debouncer: Subject<string> = new Subject();


  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300) //no se ejecutar hasta que no deja de emitir valores por 300 ms
    ).subscribe(valor => {

      this.onDebounce.emit(valor);
    });
  }

  buscar(){

    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    
    this.debouncer.next(this.termino);
  }

}
