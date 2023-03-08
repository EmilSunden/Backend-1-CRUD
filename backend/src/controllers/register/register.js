const bcrypt = require('bcrypt');

const { pool } = require('../../config/database');

const salt = bcrypt.genSaltSync(10);

const registerController = (req, res) => {
    const { username, password } = req.body

    const hashedPassword = bcrypt.hashSync(password, salt);

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