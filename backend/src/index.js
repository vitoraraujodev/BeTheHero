const express = require('express');

const routes = require('./routes');

const app = express();
app.use(cors()); //opção 'origin' para definir url
app.use(express.json());
app.use(routes);

app.listen(3333);
