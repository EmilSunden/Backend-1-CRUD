const { pool } = require("../../config/database");
const { addFriendSchema } = require('../../Model/FriendSchema');

const addFriendController = (req, res) => {
    const { friend } = req.body;   
    
    const validation = addFriendSchema.validate(req.body);

    if (validation.error) {
      return res.status(400).json(validation.error.details[0].message)
    }

    // find the friend in the users table
    const findFriend = `SELECT id, username FROM users WHERE username=?`
   
    // add friend to friends table if friend exists
    const addFriend = `INSERT INTO friends(user_id, friendname) VALUES(?, ?)`;

    pool.query(findFriend, [friend], (error) => {
      if (error) {
        res.sendStatus(500)
      } else {
        pool.query(addFriend, [req.loggedInUser.userId, friend], (error, rows) => {
          if (error) {
            res.sendStatus(500);
          } else {
            console.log('Logged in user:', req.loggedInUser.userId)
            res.json(rows).status(200)
          }
        })
      }
    })
}

module.exports = {
    addFriendController
}