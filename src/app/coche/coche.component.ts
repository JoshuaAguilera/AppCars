import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChochesService } from '../choches.service';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  coche: any={};

  constructor(private _chochesService: ChochesService,
    private activatedRote: ActivatedRoute) { 
      this.activatedRote.params.subscribe(params=>{
        this.coche = this._chochesService.getCoche(params['id'])
      })
    }

  ngOnInit(): void {
  }

}
