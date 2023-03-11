const { pool } = require('../../config/database');

const getTodosController = (req, res) => {
    const getTodos = `SELECT * from todos`;

    pool.execute(getTodos, (error, rows) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.json(rows)
        }
    })
};

module.exports = {
    getTodosController
}