const jwt = require("jsonwebtoken");
const { Users, Role } = require("../models");

const checkToken = async (req, res, next) => {
  const { authorization } = req.headers;
  let token;
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
  }

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

// const permissionUser = async (res,req,next) => {
//   const rolesData = await Role.findByPk(req.currentUser.Id)

//   const roleName = rolesData.name 

//   if (!Role.Include(roleName)) {
//     return next(res.status(403).json({
//       status:403,
//       error:"Anda tidak dapat mengakses halaman ini"
//     }))
//   }

//   next();
// }
module.exports = {
  checkToken,
  // permissionUser,
};
