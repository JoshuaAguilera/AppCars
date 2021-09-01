import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { coche, ChochesService } from '../choches.service';
@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  coches: coche[]=[];

  constructor(private _chochesService: ChochesService,
    private router: Router) { }

  ngOnInit(): void {
    this.coches= this._chochesService.getCoches();
  }
  verCoche( idx: number){
    this.router.navigate(['/coche',idx]);
  }

}
