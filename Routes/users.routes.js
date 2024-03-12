// using controller
const { getAllUsers, getUserByUuid, searchUsersByQuery } = require('../Controller/users.controller');
const routes = require('express').Router();

routes.get('/', getAllUsers);
routes.get('/search', searchUsersByQuery);
routes.get('/:uuid', getUserByUuid);

module.exports = routes;