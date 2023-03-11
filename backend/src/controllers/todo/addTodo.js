const { pool } = require('../../config/database');

const addTodoController = (req, res) => {
    const { description, user_id } = req.body;

    console.log(description)

    const sql = `INSERT INTO todos (description, user_id) VALUES (?, ?)`

    pool.execute(sql, [description, user_id], (error, rows) => {
        console.log(rows)
        if (error) {
            res.sendStatus(500)
        } else {
            res.json(rows)
        }
    })
};

module.exports = {
    addTodoController
}