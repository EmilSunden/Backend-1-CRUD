const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { SECRET } = process.env;

const useCookie = (req, res, next) => {
  const { authToken } = req.cookies;
  if (authToken) {
    try {
      const loggedInUser = jwt.verify(authToken, SECRET);
      req.loggedInUser = loggedInUser;
      next()
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong!' })
    }
  } else {
    res.send(404).json({message: 'Authentication token not found'})
  }
};

module.exports = {
  useCookie
};
