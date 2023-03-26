const joi = require('joi');

const getTodoSchema = joi.object({
    id: joi.number().required()
});

module.exports = {
    getTodoSchema
}