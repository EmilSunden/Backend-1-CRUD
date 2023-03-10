const express = require('express');
const updateTodoRoute = express.Router();

const { updateTodoController } = require('../../controllers/todo/updateTodo');

updateTodoRoute.patch('/todos/:id', updateTodoController);

module.exports = {
    updateTodoRoute
}
