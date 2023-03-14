const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { SECRET } = process.env;

const useCookie = async (req, res, next) => {
  const { token } = req.cookies;

  try {
    const loggedInUser = jwt.verify(token, SECRET);
    req.loggedInUser = loggedInUser;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
};

module.exports = {
  useCookie,
};
