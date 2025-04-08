const bcrypt = require("bcrypt");
const { User } = require("../models");

const { generateToken } = require("../helpers/auth");
const saltRounds = 10;

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      const error = new Error("User or password not valid");
      error.status = 400;
      throw error;
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      const error = new Error("Invalid credentials");
      error.status = 400;
      throw error;
    }
    const access_token = generateToken({
      expiresIn: "1h",
      payload: { email },
      secret: process.env.JWT_SECRET,
    });

    const refresh_token = generateToken({
      expiresIn: "7d",
      payload: { email },
      secret: process.env.JWT_SECRET,
    });

    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      sameSite: "none",
      secure: false, // Mettre `true` en production avec HTTPS
    });

    res.status(200).json({ access_token });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
exports.refreshToken = (req, res) => {
  const refresh_token = req.cookies.refresh_token;

  try {
    if (!refresh_token) {
      const error = new Error("Refresh token is missing");
      error.status = 403;
      throw error;
    }

    const decoded = jwt.verify(refresh_token, process.env.JWT_REFRESH_SECRET);
    const access_token = generateToken({
      expiresIn: "1h",
      payload: { email: decoded.email },
      secret: process.env.JWT_SECRET,
    });

    res.status(200).json({ access_token });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("refreshToken");
  res.status(200).json({ message: "Logged out" });
};
