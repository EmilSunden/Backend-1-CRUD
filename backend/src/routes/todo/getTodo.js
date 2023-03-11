const express = require('express');
const getTodoRoute = express.Router();

const { getTodoController } = require('../../controllers/todo/getTodo');

getTodoRoute.get('/todos/:id', getTodoController);

module.exports = {
    getTodoRoute
}
