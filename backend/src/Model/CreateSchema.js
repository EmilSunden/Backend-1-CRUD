const joi = require('joi');

const createTodoSchema = joi.object({
    description: joi.string().min(6).max(50).required(),
});

module.exports = {
    createTodoSchema
}