const express = require('express');

const app = express();

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!');
}

app.get('/', handleHelloWorldRequest);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
