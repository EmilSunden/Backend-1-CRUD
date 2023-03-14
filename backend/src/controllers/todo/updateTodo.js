const { pool } = require("../../config/database");
const { patchTodoSchema } = require("../../Model/PatchSchema");

const updateTodoController = (req, res) => {
  const { description } = req.body;
  const { id } = req.params;

  const validation = patchTodoSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json(validation.error.details[0].message);
  }

  const sql = `UPDATE todos SET description = ? WHERE id = ?`;

  pool.execute(sql, [description, id], (error, rows) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.status(200).send(rows);
    }
  });
};

module.exports = {
  updateTodoController,
};
