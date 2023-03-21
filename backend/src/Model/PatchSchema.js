const joi = require('joi');

const patchTodoSchema = joi.object({
    description: joi.string().min(6).max(50).required()
});

module.exports = {
    patchTodoSchema
}