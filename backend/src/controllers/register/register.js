const bcrypt = require("bcrypt");

const { pool } = require("../../config/database");
const { registerSchema } = require("../../Model/RegisterSchema");

const salt = bcrypt.genSaltSync(10);

const registerController = async (req, res) => {
  const { username, password } = req.body;

  const validation = registerSchema.validate(req.body);

  if (validation.error) {
    return res.status(400).json(validation.error.details[0].message)
  } else {
    const hashedPassword = bcrypt.hashSync(password, salt);

    pool.query("SELECT * FROM users WHERE username = ?", [username], (error, rows) => {
      if (error) {
        res.sendStatus(500)
      } else if (rows.length > 0) {
        res.status(409).json('User already exists')
      } else [
        pool.query("INSERT INTO users(username, password) VALUES(?, ?)", [username, hashedPassword], (error, rows) => {
          if (error) {
            res.sendStatus(500);
          } else [
            res.json('Successfully registered!')
          ]
        })
      ]
    })
  }
  
};

module.exports = {
  registerController,
};
