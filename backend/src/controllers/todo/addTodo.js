const { pool } = require("../../config/database");
const { createTodoSchema } = require("../../Model/CreateSchema");

const addTodoController = (req, res) => {
  const { description, user_id } = req.body;

  const validation = createTodoSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json(validation.error.details[0].message);
  }

  const sql = `INSERT INTO todos (description, user_id) VALUES (?, ?)`;

  pool.execute(sql, [description, user_id], (error, rows) => {
    console.log(rows);
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
