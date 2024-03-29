const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config()
const { SECRET } = process.env;
const { pool } = require('../../config/database');
const { authSchema } = require("../../Model/AuthSchema")

const loginController = (req, res, next) => {
   const { username, password } = req.body;

   const validation = authSchema.validate(req.body);

    if (validation.error) {
        return res.status(400).json(validation.error.details[0].message)
    }

   pool.query('SELECT * FROM users WHERE username = ?', [username], (error, rows) => {
    if (error) {
        next(error)
        return;
    } 
    if (rows.length === 0) {
        res.status(401).send('Invalid username or password')
    }
    const user = rows[0];

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
        res.status(401).send('Invalid username or password');
        return;
    }
    const token = jwt.sign({ userId: user.id}, SECRET, { expiresIn: '1d' });
    res.cookie('authToken', token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        credentials: true,
        secure: true
    })
    res.sendStatus(200)
   })
};

module.exports = {
    loginController
}