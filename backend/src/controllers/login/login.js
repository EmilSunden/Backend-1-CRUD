const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config()
const { SECRET } = process.env;
const { pool } = require('../../config/database');

const loginController = (req, res) => {
    const { username, password } = req.body;

    const getUser = 'SELECT username, password FROM users WHERE username = ?';

    pool.execute(getUser, [username], (error, rows) => {
        if (error) {
            res.sendStatus(500); 
        } else if (rows.length === 0) {
            res.status(404).send('No user found with that username');
        } else {
            const storedUsername = rows[0].username;
            const storedPassword = rows[0].password;
        
            const correctPassword = bcrypt.compareSync(password, storedPassword);

            if (correctPassword && username === storedUsername) {
                const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' })
                
                res.cookie('authToken', token, {
                    httpOnly: true,
                    sameSite: 'none',
                    maxAge: 30 * 24 * 60 * 60 * 1000,
                });

                res.status(200).send('Logged in successfully!')
            } else {
                res.status(401).send('Incorrect username or password')
            }
        }
    })
};

module.exports = {
    loginController
}