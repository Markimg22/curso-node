const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// Home
route.get('/', homeController.homePage);
route.post('/', homeController.handleForm);

// Contact
route.get('/contact', contactController.homePage);

module.exports = route;
