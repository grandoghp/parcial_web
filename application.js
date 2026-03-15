'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let routerUsuarios = require('./routes/users');
let routerArticulos = require('./routes/articulos');

let application = express();
application.use(bodyParser.json()); // Transforma el boy a Json automaticamente
application.use(routerUsuarios);
application.use(routerArticulos);

module.exports = application;
