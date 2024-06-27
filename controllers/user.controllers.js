const { Users, Region, products, Carts, PriceList } = require("../models");
const jwt = require("jsonwebtoken");

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

const getUsers = async (req, res, next) => {
  const data = await Users.findAll({
    include: [
      {
        model: Region,
        attributes: ["name"],
      },
      {
        model: products,
        as: "productOwned",
        attributes: ["name"],
      },
      {
        model: Carts,
        attributes: ["id"],
        include: [
          {
            model: PriceList,
            attributes: ["price", "discount"],
            include: [
              {
                model: products,
                attributes: ["name"],
              },
            ],
          },
        ],
      },
    ],
  });
  return res.status(200).json(data);
};

const getUserDetail = async (req, res, next) => {
  const data = await Users.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["username", "email"],
    include: [
      {
        model: Region,
        attributes: ["name"],
      },
      {
        model: products,
        as: "productOwned",
        attributes: ["name"],
      },
      {
        model: Carts,
        attributes: ["id"],
        include: [
          {
            model: PriceList,
            attributes: ["price", "discount"],
            include: [
              {
                model: products,
                attributes: ["name"],
              },
            ],
          },
        ],
      },
    ],
  });

  return res.status(200).json(data);
};

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password, passwordConfirm, region } = req.body;

    if (!username || !email || !password || !region || !passwordConfirm) {
      return res.status(400).json({
        messsage: "username, email, password, passwordConfirm dan region harus diisi!",
      });
    }

    if (password !== passwordConfirm) {
      return res.status(400).json({ message: "password dan passwordConfirm tidak cocok" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "password harus lebih dari 6 karakter" });
    }

    const existRegion = await Region.findOne({
      where: {
        name: region,
      },
    });

    if (!existRegion) {
      res.status(404).json({ message: "region tidak ditemukan" });
    }

    const exists = await Users.findOne({
      where: {
        email,
      },
    });

    if (exists) {
      return res.status(400).json({
        message: "email sudah digunakan",
      });
    }

    const data = await Users.create({
      id: crypto.randomUUID(),
      username,
      email,
      password,
      regionId: existRegion.id,
    });

    const token = signToken(data.id);
    res.setHeader("Authorization", `Bearer ${token}`);

    return res.status(201).json({ data });
  } catch (error) {
    res.status(400).json({
      message: "Validasi Error",
      error: error.errors.map(err => err.message),
    });
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "email dan password harus diisi!" });
  }

  const exist = await Users.findOne({
    where: {
      email,
    },
  });

  if (!exist || !(await exist.isCorrectPassword(password, exist.password))) {
    return res.status(400).json({ message: "invalid email or password" });
  }

  const token = signToken(exist.id);
  res.setHeader("Authorization", `Bearer ${token}`);

  return res.status(200).json({ message: "login!" });
};

const updateUsers = async (req, res, next) => {
  const { username, email, password, region } = req.body;
  const data = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!data) {
    return res.status(200).json({
      messsage: "data tidak ada!",
    });
  }

  if (region) {
    const existRegion = await Region.findOne({
      where: {
        name: region,
      },
    });

    if (!existRegion) {
      res.status(404).json({ message: "region tidak ditemukan" });
    }

    data.regionId = existRegion.id;
  }

  if (email) {
    const exists = await Users.findOne({
      where: {
        email,
      },
    });

    if (exists && exists.id !== data.id) {
      return res.status(400).json({
        message: "Email sudah digunakan",
      });
    }

    data.email = email;
  }

  if (username) {
    data.username = username;
  }

  if (password) {
    data.password = password;
  }

  await data.save();
  return res.status(201).json(data);
};

const deleteUsers = async (req, res, next) => {
  const data = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!data) {
    return res.status(404).json({
      messsage: "data tidak ada",
    });
  }

  await data.destroy();
  return res.status(200).json(data);
};

module.exports = {
  getUsers,
  getUserDetail,
  updateUsers,
  deleteUsers,
  registerUser,
  loginUser,
};
