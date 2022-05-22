const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb+srv://nayan:nayan123@fraazo-clone.kompq.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
