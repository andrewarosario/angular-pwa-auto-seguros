import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seguro } from '../model/Seguro';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  constructor(private http: HttpClient) {}

  salvar(seguro: Seguro) {

    this.http.post(environment.API + '/api/seguros', seguro)
      .subscribe(
      () => {
        alert('Seguro salvo com sucesso!');
      },
      err => console.error('Erro ao salvar seguro', err)
    );
  }

  listar() {
    return this.http.get<Seguro[]>(environment.API + '/api/seguros');
  }
}
