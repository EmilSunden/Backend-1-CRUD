const { pool } = require('../../config/database');

const updateTodoController = (req, res) => {
    res.send('/PATCH todo')
};

module.exports = {
    updateTodoController
}