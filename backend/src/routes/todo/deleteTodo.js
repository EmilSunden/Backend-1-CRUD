const express = require('express');
const deleteTodoRoute = express.Router();

const { deleteTodoController } = require('../../controllers/todo/deleteTodo');

deleteTodoRoute.delete('/todos/:id', deleteTodoController);

module.exports = {
    deleteTodoRoute
}