const joi = require('joi');

const deleteTodoSchema = joi.object({
    id: joi.number().required()
});

module.exports = {
    deleteTodoSchema
}