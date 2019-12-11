const { USUARIOS_SUBSCRIPTIONS } = require("./in-memory-db");

const webpush = require('web-push');

exports.enviarNotificacao = (req, res) => {

  const notificationPayload = {
    "notification": {
      "title": "Auto Seguros",
      "body": "Teste de envio de Push Notification!!",
      "icon": "assets/icon-72x72.png",
      "vibrate": [100, 50, 100],
      "data": {
        "dateOfArrival": Date.now(),
        "primaryKey": 1
      },
      "actions": [{
        "action": "listar",
        "title": "Acessar a lista de seguros"
      }]
    }
  };

  Promise.all(USUARIOS_SUBSCRIPTIONS.map(sub => webpush.sendNotification(sub, JSON.stringify(notificationPayload))))
    .then(() => res.status(200).json({message: 'Notificação enviada com sucesso!'}))
    .catch(err => {
      console.error('Erro ao enviar notificação:', err);
      res.sendStatus(500);
    });
}

