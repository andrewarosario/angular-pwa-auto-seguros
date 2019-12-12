import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seguro } from '../model/Seguro';
import { environment } from 'src/environments/environment';
import { OnlineOfflineService } from './online-offline.service';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  private db: any;

  constructor(
    private http: HttpClient,
    private readonly onlineOfflineService: OnlineOfflineService
  ) {
    this.registrarEventos(onlineOfflineService);
    this.criarDatabase();
  }

  private criarDatabase() {
    this.db = new Dexie('database');
    this.db.version(1).stores({
      seguros: 'placaCarro'
    });
  }

  private registrarEventos(onlineOfflineService: OnlineOfflineService) {

    onlineOfflineService.trocaConexao.subscribe(online => {
      if (online) {
        console.log('enviando os itens do IndexedDb para a API');
        this.sendItemsFromIndexedDb();
      } else {
        console.log('Offline. Salvando no IndexedDb');
      }
    });
  }

  private addIndexedDb(seguro: Seguro) {
    this.db.seguros
      .add(seguro)
      .then(async () => {
        const todosSeguros: Seguro[] = await this.db.seguros.toArray();
        console.log('saved in DB, DB is now', todosSeguros);
      })
      .catch(e => {
        alert('Error: ' + e);
      });
  }

  private async sendItemsFromIndexedDb() {
    const todosSeguros: Seguro[] = await this.db.seguros.toArray();
    console.log(todosSeguros);
    todosSeguros.forEach(async (item: Seguro) => {
      await this.salvar(item);
      // send items to backend...
      this.db.seguros.delete(item.placaCarro).then(() => {
        console.log(`seguro com a placa ${item.placaCarro} sent and deleted locally`);
      });
    });
  }

  adicionar(seguro: Seguro) {
    if (!this.onlineOfflineService.isOnline) {
      this.addIndexedDb(seguro);
    } else {
      this.salvar(seguro);
    }
  }

  salvar(seguro: Seguro) {

    console.log('mandando pra API');
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
