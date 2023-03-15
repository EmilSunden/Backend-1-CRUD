const { pool } = require('../../config/database');

const getTodosController = (req, res) => {
    const getTodos = `SELECT * from todos`;

    pool.execute(getTodos, (error, rows) => {
        if (error) {
            // res.status(500).send(error)
            res.sendStatus(500)
        } else if (rows.length === 0) {
            // res.status(404).send('No todos found!')
            res.sendStatus(404)
        } else {
            res.json(rows)
        }
    })
};

module.exports = {
    getTodosController
}