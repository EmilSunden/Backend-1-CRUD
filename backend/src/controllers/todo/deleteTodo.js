const { pool } = require('../../config/database');

const deleteTodoController = (req, res) => {
    res.send('/DELETE todo')
};

module.exports = {
    deleteTodoController
}