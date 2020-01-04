import { Component, OnInit } from '@angular/core';
import { MarcaCarro } from 'src/app/shared/model/MarcaCarro';
import { Seguro } from 'src/app/shared/model/Seguro';
import { CarroService } from 'src/app/shared/services/carro.service';
import { SeguroService } from 'src/app/shared/services/seguro.service';
import { PushNotificationService } from 'src/app/shared/services/push-notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-seguros',
  templateUrl: './cadastro-seguros.component.html',
  styleUrls: ['./cadastro-seguros.component.css']
})
export class CadastroSegurosComponent implements OnInit {

  public marcasCarro$: Observable<MarcaCarro[]>;
  public seguro = new Seguro();

  constructor(
    private carroService: CarroService,
    private seguroService: SeguroService,
    private pushNotificationService: PushNotificationService
  ) { }

  ngOnInit() {
    this.carregarMarcasDeCarro();
  }

  carregarMarcasDeCarro() {
    this.marcasCarro$ = this.carroService.getMarcas();
  }

  adicionar() {
    this.seguroService.salvar(this.seguro);
  }

  enviarNotificacao() {
    this.pushNotificationService.enviar();
  }

}
