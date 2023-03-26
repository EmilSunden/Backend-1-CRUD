const { pool } = require("../../config/database");

const getFriendsController = (req, res) => {
    const userId = req.loggedInUser.userId;
    const sql = `
    select users.username, users.id, todos.description from users
    inner join
      todos on users.id = todos.user_id
    where 
      users.username in (select friendname from friends where user_id=?);
`;
    pool.execute(sql, [userId], (error, rows) => {
        console.log(rows)
        if (error) {
            console.log("Error in get friends", error.message)
            res.sendStatus(500);
            return;
        } else {
            res.json(rows).status(200)
            return;
        }
    })
}

module.exports = {
    getFriendsController
}