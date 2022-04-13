const express = require('express');
const { json } = require('body-parser');

const app = express();

app.use(json());

app.get('/', (_req, res) => res.status(200).send('Hello World'));

module.exports = app;
