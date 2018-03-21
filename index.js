'use strict'

// const Sequelize = require('sequelize');
const app = require('./app');
const config = require('./config')

// const sequelize = new Sequelize('bodyplan', 'bodyplan', 'bodyplan', {
//     host: 'localhost',
//     dialect: 'postgres',
//     operatorsAliases: false,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
//     // SQLite only
//     storage: 'path/to/database.sqlite'
// });

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://bodyplan:bodyplan:5432/bodyplan');

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

app.listen(config.port, () => {
    console.log('Conectado por el puerto', config.port);
})