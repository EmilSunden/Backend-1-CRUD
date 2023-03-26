const { pool } = require('../../config/database');
const { deleteTodoSchema } = require('../../Model/DeleteSchema')

const deleteTodoController = (req, res) => {
    const { id } = req.params;
    const { userId } = req.loggedInUser;

    const validation = deleteTodoSchema.validate(req.params);
    if (validation.error) {
        return res.status(400).json(validation.error.details[0].message);
    }

    const sql = `SELECT * FROM todos WHERE id = ?`;

    pool.execute(sql, [id], (error, rows) => {
        if (error) {
            res.sendStatus(500)
        } else if (rows.length === 0) {
            res.status(404).json({message: "Todo not found"})
        } else if (rows[0].user_id !== userId) {
            res.status(403).json({ message: "Unauthorized"});
        } else {
            const sql = `DELETE FROM todos WHERE id = ?`
            pool.execute(sql, [id], (error, rows) => {
                if (error) {
                    console.log("Something went wrong", error.message)
                    res.sendStatus(500);
                } else {
                    res.status(200).send(rows)
                }
            })
        }
    })
    

};

module.exports = {
    deleteTodoController
}