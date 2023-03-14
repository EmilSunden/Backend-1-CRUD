const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { SECRET } = process.env;

console.log(SECRET)

const useCookie = async (req, res, next) => {
  try {
    const { authToken } = await req.cookies;
    const loggedInUser = jwt.verify(authToken, SECRET);
    req.loggedInUser = loggedInUser;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Something went wrongg' })
  }
};

module.exports = {
  useCookie
};
