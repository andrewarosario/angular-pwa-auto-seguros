import { Component, OnInit } from '@angular/core';
import { Seguro } from 'src/app/shared/model/Seguro';
import { SeguroService } from 'src/app/shared/services/seguro.service';

@Component({
  selector: 'app-listar-seguros',
  templateUrl: './listar-seguros.component.html',
  styleUrls: ['./listar-seguros.component.css']
})
export class ListarSegurosComponent implements OnInit {

  public seguros: Seguro[];

  constructor(private seguroService: SeguroService) { }

  ngOnInit() {
    this.seguroService.listar().subscribe(res => this.seguros = res);
  }

}
