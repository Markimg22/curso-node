/**
 * Criando Rotas
 * O ideal é criar um 'controller' para cada rota
 */

const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

// Home
route.get('/', homeController.homePage);
route.post('/', homeController.handleForm);

// Contact
route.get('/contact', contactController.homePage);

module.exports = route;
