const express = require('express');
const loginRoute = express.Router();

const { loginController } = require('../../controllers/login/login');

loginRoute.post('/login', loginController);

module.exports = {
    loginRoute
}