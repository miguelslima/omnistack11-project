const express = require('express');

const OngController = require('./controllers/OngController');
const IncidetnsController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidetnsController.index);
routes.post('/incidents', IncidetnsController.create);
routes.delete('/incidents/:id', IncidetnsController.delete);

module.exports = routes;
