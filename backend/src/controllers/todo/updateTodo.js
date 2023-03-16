const { pool } = require("../../config/database");
const { patchTodoSchema } = require("../../Model/PatchSchema");

const updateTodoController = (req, res) => {
  const todoId = req.params.id;
  const { description } = req.body;

  const validation = patchTodoSchema.validate(req.body);

  if (validation.error) {
    return res.status(400).json(validation.error.details[0].message);
  };

  const loggedInUserId = req.loggedInUser.userId;

  const sql = `UPDATE todos SET description = ? WHERE id = ? AND user_id = ?`;

  pool.execute(sql, [description, todoId , loggedInUserId], (error, rows) => {
    if (error) {
      res.sendStatus(500);
    } else if (rows.affectedRows === 0) {
      res.status(404).send("Todo not found")
    } else {
      res.json(rows)
    }
  })
};

module.exports = {
  updateTodoController,
};
