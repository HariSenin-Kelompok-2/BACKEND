const { Users } = require("../models");

const getUsers = async (req, res, next) => {
  const data = await Users.findAll();
  return res.status(200).json(data);
};

const getUserDetail = async (req, res, next) => {
  const data = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(data);
};

const addUsers = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      messsage: "Kamu tidak boleh begitu",
    });
  }

  const exists = await Users.findOne({
    where: {
      email,
    },
  });

  if (exists) {
    return res.status(400).json({
      message: "Email yang kamu gunakan sudah digunakan",
    });
  }

  const data = await Users.create({
    id: crypto.randomUUID(),
    name,
    email,
    password,
  });

  return res.status(201).json(data);
};

const updateUsers = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      messsage: "Kamu tidak boleh begitu",
    });
  }

  const exists = await Users.findOne({
    where: {
      email,
    },
  });

  if (exists) {
    return res.status(400).json({
      message: "Email yang kamu gunakan sudah digunakan",
    });
  }

  const data = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!data) {
    return res.status(200).json({
      messsage: "data tidak ada",
    });
  }

  data.name = name;
  data.email = email;
  data.password = password;
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
    return res.status(200).json({
      messsage: "data tidak ada",
    });
  }

  await data.destroy();
  return res.status(200).json(data);
};

module.exports = {
  getUsers,
  getUserDetail,
  addUsers,
  updateUsers,
  deleteUsers,
};
