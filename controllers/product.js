'use strict'

function getProduct(req, res) {
    res.send(200, { message: `'ID: ${req.params.id}` })
}

function getProducts(req, res) {
    res.send(200, { products: [] })
}

function saveProduct(req, res) {
    res.status(200).send({ message: 'El producto se ha recibido' })
}

function updateProduct(req, res) {

}

function deleteProduct(req, res) {

}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}