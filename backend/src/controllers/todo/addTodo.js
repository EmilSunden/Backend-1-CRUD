const { pool } = require("../../config/database");
const { createTodoSchema } = require("../../Model/CreateSchema");

const addTodoController = (req, res) => {
  const { description } = req.body;

  const validation = createTodoSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json(validation.error.details[0].message);
  }

  const sql = `INSERT INTO todos (user_id, description) VALUES (?, ?)`;

  pool.execute(sql, [req.loggedInUser.userId, description], (error, rows) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.json(rows);
    }
  });
};

module.exports = {
  addTodoController,
};

// friends tabell coming up