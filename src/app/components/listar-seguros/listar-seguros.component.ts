import { Component, OnInit } from '@angular/core';
import { Seguro } from 'src/app/shared/model/Seguro';

@Component({
  selector: 'app-listar-seguros',
  templateUrl: './listar-seguros.component.html',
  styleUrls: ['./listar-seguros.component.css']
})
export class ListarSegurosComponent implements OnInit {

  public seguros: Seguro[];

  constructor() { }

  ngOnInit() {
  }

}
