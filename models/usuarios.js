'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UsuarioSchema = Schema(
    {
        username: String,
        email: String,
        password: String,
        rol: String // "admin" o puede ser "estandar"
    }
);

module.exports = mongoose.model('usuarios', UsuarioSchema);
