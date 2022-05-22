const User = require("../models/user.model");

const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");

require("dotenv").config();

// function for generating new token

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY);
};

const register =
  ("",
  async (req, res) => {
    try {
      //checking for validaion errors by express-validator
      const errors = validationResult(req);

      // console.log('errors:', errors.array())

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      //if user is already exists
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).send({ message: "Email Already Exists.." });
      }

      // if not then create new user

      user = await User.create(req.body);

      //genera the token
      const token = generateToken(user);

      return res.status(200).send({
        token: token,
        message: "User created successfully",
        user: user,
      });
    } catch (error) {
      console.log("error:", error);
      return res.status(500).send({ message: error.message });
    }
  });
const login = async (req, res) => {
  try {
    //checking for validaion errors by express-validator
    const errors = validationResult(req);

    // console.log('errors:', errors.array())

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //finding user
    const user = await User.findOne({ email: req.body.email });

    //if user does not exists then
    if (!user) {
      return res
        .status(400)
        .send({ message: "Your Email or Password is incorrect" });
    }

    //if user mail is exists then check for correct password
    const match = user.checkPassword(req.body.password);

    if (!match) {
      return res
        .status(400)
        .send({ message: "Your Email or Password is incorrect" });
    }

    //if it matches then return user with token value

    const token = generateToken(user);

    return res.status(200).send({
      token: token,
      message: "Login Successful",
      user: user,
    });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { register, login, generateToken };
