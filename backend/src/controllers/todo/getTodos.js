const { pool } = require('../../config/database');

const getTodosController = (req, res) => {
    console.log('Hello from inside get todos')
    const userId = req.loggedInUser.userId;
    const sql = `SELECT id, description FROM todos WHERE user_id = ?`;
    pool.execute(sql, [userId], (error, rows) => {
        if (error) {
            console.log('Something went wrong!', error.message)
            res.sendStatus(500)
        } else if (rows.length === 0) {
            console.log("Couldn't find any todos")
            res.sendStatus(404)
        } else {
            res.json(rows)
        }
    })
};

module.exports = {
    getTodosController
}