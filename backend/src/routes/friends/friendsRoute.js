const express = require('express');
const friendRoute = express.Router();

const {  addFriendController } = require('../../controllers/friends/addFriend'); // post
const { getFriendsController } = require('../../controllers/friends/getFriend'); // get
const { getFriendsTodoController } = require('../../controllers/todo/getFriendsTodo');


friendRoute.post('/friends',  addFriendController)
friendRoute.get('/friends',  getFriendsController)
friendRoute.get('/friends/todos', getFriendsTodoController)

module.exports = {
    friendRoute
}