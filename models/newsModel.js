const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  photourl: String,
});

module.exports = mongoose.model("News", newsSchema);
