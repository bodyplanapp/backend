'use strict'

const service = require('../services')

function signUp(req, res) { 
    // const user = new User
    return res.status(200).send({token: service.createToken('')})
}

function signIn(req, res) {
    
 }

module.exports = {
    signUp,
    signIn
}