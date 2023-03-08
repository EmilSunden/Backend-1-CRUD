const bcrypt = require('bcrypt');

const { pool } = require('../../config/database');

const loginController = (req, res) => {
    const { username, password } = req.body;

    const getPassword = 'SELECT password FROM users WHERE username=?';

    pool.execute(getPassword, [username], (error, rows) => {
        if (error) {
            res.sendStatus(500);
        } else {
            const storedPassword = rows[0].password;

            const correctPassword = bcrypt.compareSync(password, storedPassword);

            if (correctPassword) {
                res.sendStatus(200);
            } else {
                res.sendStatus(401)
            }
        }
    })
};

module.exports = {
    loginController
}