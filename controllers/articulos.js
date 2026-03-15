'use strict';

let Articulo = require('../models/articulos');

function crearArticulo(req, res) {
    // Verificar que el usuario tenga rol del admin
    let userRol = req.header.userRol;

    if (userRol !== 'admin') {
        return res.status(403).send({ message: 'No Autorizado: Solo los administradores pueden crear artículos' });
    }

    let requestBody = req.body;

    if (!requestBody) {
        return res.status(400).send({ 'message': 'nada fue enviado' });
    }
    else if (!requestBody.titulo || !requestBody.descripcion || !requestBody.precio) {
        return res.status(400).send({ 'message': 'Debe enviar titulo, descripcion y precio' });
    }
    else {
        let nuevoArticulo = new Articulo({
            titulo: requestBody.titulo,
            descripcion: requestBody.descripcion,
            precio: requestBody.precio
        });

        nuevoArticulo.save().then(
            (articuloCreado) => {
                res.status(201).send({ 'message': 'Articulo creado', 'articulo': articuloCreado });
            },
            err => {
                res.status(500).send({ 'message': 'Error al crear el articulo', 'error': err })
            }
        );
    }
}

function consultarArticulos(req, res) {
    // Todos los usuarios autenticados pueden consultar, no necesitamos validar el rol estrictamente aquí
    // puesto que solo llegarán peticiones que hayan paasdo la validación del Token.
    Articulo.find({}).then(
        (articulos) => {
            res.status(200).send(articulos);
        }
    ).catch(
        (err) => {
            res.status(500).send({ message: 'Error al consultar los artículos' });
        }
    );
}

module.exports = { crearArticulo, consultarArticulos };
