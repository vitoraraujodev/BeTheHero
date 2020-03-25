const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ aluno: "Vitor Araujo" });
});

module.exports = routes;
