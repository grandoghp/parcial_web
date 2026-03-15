'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ArticuloSchema = Schema(
    {
        titulo : String,
        descripcion : String,
        precio : Number
    }
);

module.exports = mongoose.model('articulos', ArticuloSchema);
