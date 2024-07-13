const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const checkUsername = (username) => {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(username);
};

const hashPassword = async (password) => {
  const salt = await bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const signToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

module.exports = { checkUsername, hashPassword, signToken };
