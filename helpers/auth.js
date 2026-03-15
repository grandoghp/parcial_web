'use strict';

let jwt = require('jwt-simple');
let moment = require('moment');

let secret = 'asdayiuttyi34578.,,qw';

function createToken(usuario) {
    let payload = {
        sub: usuario._id,
        email: usuario.email,
        rol: usuario.rol, // Guardamos el rol para saber si es admin
        iat: moment().unix(),
        exp: moment().add(5, 'minutes').unix()
    };
    return jwt.encode(payload, secret);
}

function validateToken(req, res, next) {
    try {
        let token = req.headers.authorization.replace('Bearer ', '');
        let payload = jwt.decode(token, secret);
        req.header.userId = payload.sub; // Recordar el Id del usuario que hizo el login
        req.header.userRol = payload.rol; // Recordar el rol del usuario que hizo el logeo
        next();
    }
    catch (ex) {
        res.status(401).send({ message: 'Token inválido' });
    }
}

module.exports = { createToken, validateToken };
