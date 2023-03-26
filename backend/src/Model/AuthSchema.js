const joi = require('joi');

const authSchema = joi.object({
    username: joi.string().min(3).max(25).required(),
    password: joi.string().min(3).max(25).required()
});

module.exports = {
    authSchema
}