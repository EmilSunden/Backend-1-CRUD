const express = require('express');
const getTodosRoute = express.Router();

const { getTodosController } = require('../../controllers/todo/getTodos');

getTodosRoute.get('/todos', getTodosController);

module.exports = {
    getTodosRoute
}

