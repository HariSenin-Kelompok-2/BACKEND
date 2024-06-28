const jwt = require("jsonwebtoken");
const { Users } = require("../models");

const checkToken = async (req, res, next) => {
  const { authorization } = req.headers;
  let token;
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(400).json({ message: "token tidak ditemukan" });
  }

  let decode;
  try {
    decode = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: "token tidak valid" });
  }

  const currentUser = await Users.findByPk(decode.id) 
  console.log(currentUser);

  if (!currentUser) {
    return res.status(401).json({status: 401, message: "token sudah kadaluarsa"});
  }

  req.currentUser = currentUser; 

  next();
};

module.exports = {
  checkToken,
};
