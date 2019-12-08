const { USUARIOS_SUBSCRIPTIONS } = require("./in-memory-db");

exports.adicionaPushSubscriber = (req, res) => {
  const usuario = req.body;

  USUARIOS_SUBSCRIPTIONS.push(usuario);
  console.log('Usuário inscrito', usuario);

  res.status(200).json({message: 'Usuário inscrito com sucesso!'});
}

