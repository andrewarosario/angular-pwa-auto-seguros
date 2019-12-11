import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(
    private http: HttpClient,
    private swPush: SwPush,
    private router: Router
  ) {

    this.swPush.notificationClicks.subscribe((result) => {
      console.log('clicou na notificação', result);
      if (result.action === 'listar') {
        this.router.navigate([result.action]);
      }
    });
  }

  adicionaPushSubscriber() {
    this.swPush.requestSubscription({
      serverPublicKey: environment.VAPID_PUBLIC_KEY
    })
    .then(sub => {
      console.log('Usuário inscrito', sub);

      this.http.post(environment.API + '/api/notificacao', sub).subscribe(
        () => console.log('Inscrição adicionada com sucesso!'),
        err => console.error('Erro ao adicionar inscrição.', err)
      );
    })
    .catch(err => console.error('Erro ao se inscrever', err));
  }

  enviar() {
    this.http.post(environment.API + '/api/notificacao/enviar', null).subscribe(
      () => console.log('Notificação enviada com sucesso!'),
      err => console.error('Erro ao enviar notificação.', err)
    );
  }
}
