const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { SECRET } = process.env;

const useCookie = (req, res, next) => {
  // console.log("Req cookies:", req.headers)
  const { authToken } = req.cookies;
  if (authToken) {
    try {
      const loggedInUser = jwt.verify(authToken, SECRET);
      req.loggedInUser = loggedInUser;
      console.log("Logged in user:", req.loggedInUser)
      next()
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong!' })
    }
  } else {
    console.log('Not authorized')
    return res.sendStatus(401)
  }
};

module.exports = {
  useCookie
};
