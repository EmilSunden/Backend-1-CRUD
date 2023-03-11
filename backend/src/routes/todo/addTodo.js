const express = require('express');
const addTodoRoute = express.Router();

const { addTodoController } = require('../../controllers/todo/addTodo');

addTodoRoute.post('/todos', addTodoController);

module.exports = {
    addTodoRoute
}
