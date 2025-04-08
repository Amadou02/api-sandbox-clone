const { User } = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
exports.findAll = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
