const express = require('express');
const friendRoute = express.Router();

const {  addFriendController } = require('../../controllers/friends/addFriend'); // post
const { getFriendsController } = require('../../controllers/friends/getFriend'); // get

friendRoute.post('/friend', addFriendController)
friendRoute.get('/friends/todos', getFriendsController)

module.exports = {
    friendRoute
}