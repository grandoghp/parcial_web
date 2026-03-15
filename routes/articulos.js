'use strict';

let express = require('express');
let router = express.Router();
let articuloController = require('../controllers/articulos');
let auth = require('../helpers/auth');

// Ambas rutas requieren estar autenticado (validateToken)
router.post('/api/articulo', auth.validateToken, articuloController.crearArticulo);
router.get('/api/articulos', auth.validateToken, articuloController.consultarArticulos);

module.exports = router;
