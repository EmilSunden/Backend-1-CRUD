const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config()

const { SECRET } = process.env;
console.log(SECRET)

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
                const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' })
                console.log(token)
                
                res.cookie('token', token, {
                    httpOnly: true,
                    sameSite: 'none',
                    maxAge: 3600000,
                });

                res.sendStatus(200)
            } else {
                res.sendStatus(401)
            }
        }
    })
};

module.exports = {
    loginController
}