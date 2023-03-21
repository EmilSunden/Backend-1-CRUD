const { pool } = require("../../config/database");

const getFriendsController = (req, res) => {
    const userId = req.loggedInUser.userId;
    const sql = `select friendname from friends where user_id=?`
    pool.execute(sql, [userId], (error, rows) => {
        console.log(rows)
        if (error) {
            res.sendStatus(500)
        } else if (rows.length === 0) {
            res.sendStatus(404)
        } else {
            res.json(rows)
        }
    })
}

module.exports = {
    getFriendsController
}