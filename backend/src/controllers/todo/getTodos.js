const { pool } = require('../../config/database');

const getTodosController = (req, res) => {
    console.log('Hello from inside get todos')
    const userId = req.loggedInUser.userId;
    const sql = `SELECT id, description FROM todos WHERE user_id = ?`;
    pool.execute(sql, [userId], (error, rows) => {
        if (error) {
            res.sendStatus(500)
        } else if (rows.length === 0) {
            res.sendStatus(404)
        } else {
            res.json(rows)
        }
    })
};

module.exports = {
    getTodosController
}