'use strict'

const express = require('express');
const productCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')
const api = express.Router();


api.get('/product', productCtrl.getProducts);
api.get('/product/:id', productCtrl.getProduct);
api.post('/product', productCtrl.saveProduct);
api.put('/product/:id', productCtrl.updateProduct);
api.delete('/product/:id', productCtrl.deleteProduct);

api.get('/private', auth, (req, res) => {
    res.status(200).send({ menssage: 'Tienes acceso' })
});

module.exports = api