const bcrypt = require('bcrypt');

const { pool } = require('../../config/database');
const { registerSchema } = require('../../Model/RegisterSchema');

const registerController = (req, res) => {
    const { username, password } = req.body

    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = 'INSERT INTO users(username, password) VALUES(?, ?)';

    pool.execute(sql, [username, hashedPassword], (error, rows) => {
        console.log(rows)
        if (error) {
            console.log('Something went wrong!')
            res.sendStatus(500);
        } else 
        res.json(rows);
    })
};

module.exports = {
    registerController
}