const { pool } = require('../../config/database');

const getTodoController = (req, res) => {
    const { id } = req.params

    const getTodos = `SELECT description from todos where id = ?`;

    pool.execute(getTodos, [id], (error, rows) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.json(rows)
        }
    })
};

module.exports = {
    getTodoController
}