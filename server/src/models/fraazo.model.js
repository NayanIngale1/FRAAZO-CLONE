const mongoose = require("mongoose");

const fraazoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    weight: { type: String, required: true },
    prize: { type: Number, required: true },
    old_prize: { type: Number, required: false, default: null },
    category: { type: String, required: true },
    sub_category: { type: String, required: true },
    description: {
      type: String,
      required: false,
      default: "No Details Available",
    },
    benifit: { type: String, required: false, default: "No Details Available" },
    info: { type: String, required: false, default: "No Details Available" },
    tag: { type: String, required: false, default: "" },
  },
  { versionKey: false, timestamps: true }
);

const Fraazo = mongoose.model("fraazo", fraazoSchema);

module.exports = Fraazo;
