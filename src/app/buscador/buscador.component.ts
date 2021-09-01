import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChochesService } from '../choches.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  coches: any[] = [];
  termino: string = '';

  constructor(private _chochesService: ChochesService,
    private activatedRote: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRote.params.subscribe(params => {
      this.termino = params['termino'];
      this.coches = this._chochesService.buscarCoche(params['termino']);
      console.log(this.coches);
    })
  }

}
