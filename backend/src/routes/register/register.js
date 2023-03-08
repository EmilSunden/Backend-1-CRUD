const express = require('express');
const registerRoute = express.Router();

const { registerController } = require('../../controllers/register/register');

registerRoute.post('/register', registerController);

module.exports = {
    registerRoute
}