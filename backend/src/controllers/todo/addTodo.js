const { pool } = require("../../config/database");
const { createTodoSchema } = require("../../Model/CreateSchema");

const addTodoController = (req, res) => {
  const { description } = req.body;
  console.log(description)

  const validation = createTodoSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json(validation.error.details[0].message);
  }

  const sql = `INSERT INTO todos (description) VALUES (?)`;

  pool.execute(sql, [description], (error, rows) => {
    if (error) {
      console.log('Something went wrong!', error.message)
      res.sendStatus(500);
    } else {
      res.json(rows);
    }
  });
};

module.exports = {
  addTodoController,
};
