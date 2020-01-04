import { Component, OnInit } from '@angular/core';
import { Seguro } from 'src/app/shared/model/Seguro';
import { SeguroService } from 'src/app/shared/services/seguro.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-seguros',
  templateUrl: './listar-seguros.component.html',
  styleUrls: ['./listar-seguros.component.css']
})
export class ListarSegurosComponent implements OnInit {

  public seguros$: Observable<Seguro[]>;

  constructor(private seguroService: SeguroService) { }

  ngOnInit() {
    this.seguros$ = this.seguroService.listar();
  }

}
