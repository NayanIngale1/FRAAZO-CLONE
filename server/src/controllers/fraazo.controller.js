const Fraazo = require("../models/fraazo.model");
const express = require("express");

const router = express.Router();

// Get all product
router.get("/", async (req, res) => {
  try {
    const data = await Fraazo.find().lean().exec();

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

// get one product by id
router.get("/:id", async (req, res) => {
  try {
    const data = await Fraazo.findById(req.params.id).lean().exec();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

// Update one by id
router.patch("/:id", async (req, res) => {
  try {
    const data = await Fraazo.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
      .lean()
      .exec();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

// Delete one by Id
router.delete("/:id", async (req, res) => {
  try {
    const data = await Fraazo.findByIdAndRemove(req.params.id).lean().exec();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

// get all by category
router.get("/category/:category", async (req, res) => {
  try {
    const data = await Fraazo.find({ category: req.params.category })
      .lean()
      .exec();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

//get all by subcategory
router.get("/sub/:subcategory", async (req, res) => {
  try {
    const data = await Fraazo.find({ sub_category: req.params.subcategory })
      .lean()
      .exec();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

// get all by tag
router.get("/tag/:tag", async (req, res) => {
  try {
    const data = await Fraazo.find({ tag: req.params.tag }).lean().exec();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

// post one by on
router.post("/", async (req, res) => {
  try {
    const data = await Fraazo.create(req.body);
    res.status(201).send({ data, status: "success" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = router;
