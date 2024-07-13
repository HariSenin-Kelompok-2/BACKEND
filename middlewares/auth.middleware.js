const jwt = require("jsonwebtoken");
const { Users } = require("../models");

const checkToken = async (req, res, next) => {
  const token = req.cookies.jwt
  if (!token) {
    return res.status(401).json({ message: "token tidak ditemukan" });
  }

  let decode;
  try {
    decode = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: "token tidak valid" });
  }

  const currentUser = await Users.findByPk(decode.id) 
  if (!currentUser) {
    return res.status(401).json({status: 401, message: "token sudah kadaluarsa"});
  }
  req.currentUser = currentUser; 

  next();
};

module.exports = {
  checkToken,
};
