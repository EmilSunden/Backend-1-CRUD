const { pool } = require('../../config/database');
const { patchTodoSchema } = require('../../Model/PatchSchema');

const updateTodoController = (req, res) => {
    const { description, id } = req.body;

    const sql = `UPDATE todos SET description = ? WHERE id = ?`;

    pool.execute(sql, [description, id], (error, rows) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.status(200).send(rows)
        }
    })

};

module.exports = {
    updateTodoController
}