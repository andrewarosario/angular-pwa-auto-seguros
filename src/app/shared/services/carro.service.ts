import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MarcaCarro } from '../model/MarcaCarro';

interface CarResponse {
    Makes: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private API_CARROS = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes';
  constructor(private http: HttpClient) {
  }

  private mapCarros(marcas: Array<any>): MarcaCarro[] {
    return marcas.map(marca => ({
      codigo: marca.make_id,
      nome: marca.make_display
    }));
  }

  getMarcas(): Observable<MarcaCarro[]> {
    return this.http.jsonp(this.API_CARROS, 'callback')
      .pipe(
        map((res: CarResponse) => this.mapCarros(res.Makes))
      );
  }
}
