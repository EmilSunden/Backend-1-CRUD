const bcrypt = require("bcrypt");

const { pool } = require("../../config/database");
const { registerSchema } = require("../../Model/RegisterSchema");

const salt = bcrypt.genSaltSync(10);

const registerController = (req, res) => {
  const { username, password } = req.body;
  
  const validation = registerSchema.validate(req.body);

  console.log(req.body)
  if (validation.error) {
    console.log(validation.error.details[0].message)
    return res.status(400).json(validation.error.details[0].message)
  } else {
    const hashedPassword = bcrypt.hashSync(password, salt);

    const sql = "INSERT INTO users(username, password) VALUES(?, ?)";
  
    pool.execute(sql, [username, hashedPassword], (error, rows) => {
      if (error) {
        res.sendStatus(500);
      } else res.json(rows);
    });
  }

};

module.exports = {
  registerController,
};
