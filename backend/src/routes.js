const express = require('express');

const OngController = require('./controllers/OngController');
const IncidetnsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidetnsController.index);
routes.post('/incidents', IncidetnsController.create);
routes.delete('/incidents/:id', IncidetnsController.delete);

module.exports = routes;
