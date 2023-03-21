const { pool } = require("../../config/database");

const addFriendController = (req, res) => {
    const { friend } = req.body;    
   
    const sql = `INSERT INTO friends(user_id, friendname) VALUES(?, ?)`;

    pool.execute(sql, [req.loggedInUser.userId, friend], (error, rows) => {
        console.log('Logged in user:', req.loggedInUser.userId)
        if (error) {
            console.log(error.message)
          res.status(500).send('User already added!');
        } else {
          res.json(rows);
        }
      });
}

module.exports = {
    addFriendController
}