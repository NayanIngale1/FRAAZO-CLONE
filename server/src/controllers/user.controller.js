const User = require("../models/user.model");

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getAuthToken = (user) => {
  return jwt.sign({ user }, process.env.SECRETE_KEY);
};

//get user
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}).lean().exec();
    return res.status(200).send({ users: users });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).send({ error: error.message });
  }
});

//get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send({ users: user });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).send({ error: error.message });
  }
});

// post user
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log("user:", user);
    return res.status(200).send({ msg: "User created successfully", user });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).send({ error: error.message });
  }
});

// update user
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send({ msg: "User updated successfully", user });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).send({ error: error.message });
  }
});

//api to delete user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: "User deleted successfully", user });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
