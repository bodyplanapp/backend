'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../../config/config')

function createToken(user) {
    const payload = {
        sub: '',
        iat: moment().unix(), //hora en que se crea el token
        exp: moment().add(14, 'days').unix()  //caducidad del token (14 dias)
    }
    return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken(token) {
    const decode = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(toke, config.SECRET_TOKEN);
            if (payload.exp <= moment.unix()) {
                reject({ status: 401, message: 'El token ha expirado' })
            }
            resolve(payload.sub)
        } catch (err) {
            reject({ status: 500, message: 'Invalid Token' })
        }
    })

    return decode;
}

module.exports = {
    createToken,
    decodeToken
}