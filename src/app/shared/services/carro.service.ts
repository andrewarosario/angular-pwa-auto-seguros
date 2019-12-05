import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) {
  }

  getMarcas(): Observable<any> {
    return this.http.jsonp(environment.API_CARROS + 'cmd=getMakes', 'callback');
  }


}
