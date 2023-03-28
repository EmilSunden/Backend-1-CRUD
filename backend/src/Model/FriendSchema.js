const joi = require('joi');

const addFriendSchema = joi.object({
    friend: joi.string().min(1).max(254).required()
});

module.exports = {
    addFriendSchema
}