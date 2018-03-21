'use strict'

// añadir bbdd

const app = require('./app');
const config = require('./config')

app.listen(config.port, () => {
    console.log('Conectado por el puerto', config.port);
})