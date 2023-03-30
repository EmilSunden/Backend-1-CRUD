const { pool } = require('../../config/database');
const { getTodoSchema } = require('../../Model/GetTodo');

const getTodoController = (req, res) => {
    const { id } = req.params

    const validation = getTodoSchema.validate(req.params);
    if (validation.error) {
        return res.status(400).json(validation.error.details[0].message);
    }

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