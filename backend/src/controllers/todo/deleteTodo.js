const { pool } = require('../../config/database');

const deleteTodoController = (req, res) => {
    const { id } = req.params;

    const sql = `DELETE FROM todos WHERE id = ?`;

    pool.execute(sql, [id], (error, rows) => {
        if (error) {
            res.sendStatus(500)
        } else {
            res.json(rows)
        }
    })
};

module.exports = {
    deleteTodoController
}