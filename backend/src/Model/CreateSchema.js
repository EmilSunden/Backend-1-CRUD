const joi = require('joi');

const createTodoSchema = joi.object({
    description: joi.string().min(10).max(50).required(),
    user_id: joi
    .string()
    .min(1)
    .max(999999)
    .pattern(/[1-9][0-9]*/)
    .required(),
});

module.exports = {
    createTodoSchema
}