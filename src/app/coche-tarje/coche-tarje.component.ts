import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coche-tarje',
  templateUrl: './coche-tarje.component.html',
  styleUrls: ['./coche-tarje.component.css']
})
export class CocheTarjeComponent implements OnInit {

  @Input() coche: any ={};
  @Input() index: number;
  @Output() cocheSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.index=0;
    this.cocheSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verCoche(){
    this.router.navigate(['/coche', this.index])
  }
}
