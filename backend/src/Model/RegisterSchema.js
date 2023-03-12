const joi = require('joi');

const registerSchema = joi.object({
    username: joi.string().min(4).max(25).required(),
    password: joi.string().min(7).max(25).required()
});

module.exports = {
    registerSchema
}