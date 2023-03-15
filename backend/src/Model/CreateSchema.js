const joi = require('joi');

const createTodoSchema = joi.object({
    description: joi.string().min(10).max(50).required(),
    // user_id: joi.number().integer().options({ convert: false })
});

module.exports = {
    createTodoSchema
}